import ctypes
import logging
import queue
import random
import threading
import time
from typing import Optional

import keyboard
import win32gui
import win32process

user32 = ctypes.windll.user32
VK_LBUTTON = 0x01
VK_RBUTTON = 0x02
VK_MBUTTON = 0x04
VK_ESCAPE = 0x1B
try:
    from plyer import notification
except Exception:
    notification = None


class TyperEngine:
    def __init__(self, min_delay: float = 0.01, max_delay: float = 0.03):
        self.min_delay = min_delay
        self.max_delay = max_delay
        self.logger = logging.getLogger("typer_engine")

        self._jobs: "queue.Queue[tuple[str, Optional[str], int]]" = queue.Queue()
        self._stop = threading.Event()
        self._thread = threading.Thread(target=self._worker, daemon=True)
        self._thread.start()

    def enqueue(self, text: str, title: Optional[str] = None) -> None:
        if not text:
            return
        target_hwnd = int(user32.GetForegroundWindow() or 0)
        self._jobs.put((text, title, target_hwnd))

    def stop(self) -> None:
        self._stop.set()
        self._jobs.put(("", None, 0))
        self._thread.join(timeout=2)

    def _worker(self) -> None:
        while not self._stop.is_set():
            text, title, target_hwnd = self._jobs.get()
            if self._stop.is_set():
                break
            if not text:
                continue

            if self._looks_sensitive_context():
                self.logger.warning("Typing blocked in sensitive context")
                continue

            try:
                completed = self._type_text(text, target_hwnd)
                if title:
                    if completed:
                        self.logger.info("%s", title)
                        self._notify(title)
                    else:
                        self.logger.info("Typing stopped due to window focus change")
                        self._notify("Typing stopped (focus changed)")
            except Exception as exc:
                self.logger.exception("Typing failed: %s", exc)

    def _type_text(self, text: str, target_hwnd: int) -> bool:
        self._wait_for_modifiers_release()
        for ch in text:
            if self._user_interrupt_detected():
                return False
            if self._focus_changed(target_hwnd):
                return False
            if ch == "\n":
                self._send_safe_newline()
            else:
                keyboard.write(ch, delay=0)
            time.sleep(random.uniform(self.min_delay, self.max_delay))
        return True

    @staticmethod
    def _wait_for_modifiers_release(timeout: float = 0.4) -> None:
        end_time = time.time() + timeout
        modifier_keys = ("ctrl", "alt", "shift", "windows")
        while time.time() < end_time:
            if not any(keyboard.is_pressed(key) for key in modifier_keys):
                return
            time.sleep(0.01)

    def _looks_sensitive_context(self) -> bool:
        hwnd = user32.GetForegroundWindow()
        if not hwnd:
            return False

        title = (win32gui.GetWindowText(hwnd) or "").lower()
        class_name = (win32gui.GetClassName(hwnd) or "").lower()

        blocked_keywords = [
            "password",
            "passcode",
            "pin",
            "sign in",
            "login",
            "credential",
            "security key",
        ]
        if any(keyword in title for keyword in blocked_keywords):
            return True

        if "credential" in class_name:
            return True

        try:
            _, pid = win32process.GetWindowThreadProcessId(hwnd)
            process_name = self._process_name_from_pid(pid)
            if process_name in {"KeePass.exe", "1Password.exe", "Bitwarden.exe"}:
                return True
        except Exception:
            return False

        return False

    @staticmethod
    def _focus_changed(target_hwnd: int) -> bool:
        if not target_hwnd:
            return False
        current = int(user32.GetForegroundWindow() or 0)
        return current != target_hwnd

    @staticmethod
    def _user_interrupt_detected() -> bool:
        # If user clicks or presses Esc during typing, stop immediately.
        return any(
            user32.GetAsyncKeyState(vk) & 0x8000
            for vk in (VK_LBUTTON, VK_RBUTTON, VK_MBUTTON, VK_ESCAPE)
        )

    @staticmethod
    def _process_name_from_pid(pid: int) -> str:
        import psutil

        process = psutil.Process(pid)
        return process.name()

    @staticmethod
    def _notify(title: str) -> None:
        if notification is None:
            return
        try:
            notification.notify(
                title="Text Automation Tool",
                message=f"Prompt typed: {title}",
                timeout=2,
            )
        except Exception:
            pass

    @staticmethod
    def _send_safe_newline() -> None:
        # Many chat inputs submit on Enter; Shift+Enter inserts a line break.
        keyboard.press("shift")
        try:
            keyboard.send("enter")
        finally:
            keyboard.release("shift")
