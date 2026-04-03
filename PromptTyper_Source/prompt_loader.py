import json
import logging
import os
import threading
import time
from typing import Callable, Dict


class PromptLoader:
    def __init__(self, prompts_path: str):
        self.prompts_path = prompts_path
        self.logger = logging.getLogger("prompt_loader")
        self._lock = threading.Lock()
        self._callbacks: list[Callable[[], None]] = []
        self._prompts: Dict[str, dict] = {}
        self._last_mtime: float = 0
        self._stop = threading.Event()
        self._watcher = threading.Thread(target=self._watch_loop, daemon=True)

    def start(self) -> None:
        self.reload(force=True)
        self._watcher.start()

    def stop(self) -> None:
        self._stop.set()
        self._watcher.join(timeout=2)

    def add_reload_callback(self, callback: Callable[[], None]) -> None:
        self._callbacks.append(callback)

    def get_prompts(self) -> Dict[str, dict]:
        with self._lock:
            return dict(self._prompts)

    def reload(self, force: bool = False) -> bool:
        if not os.path.exists(self.prompts_path):
            self._create_default_file()

        try:
            mtime = os.path.getmtime(self.prompts_path)
            if not force and mtime <= self._last_mtime:
                return False

            data = self._load_json_lenient()

            normalized: Dict[str, dict] = {}
            for key, value in data.items():
                shortcut = str(key).strip().lower()
                if not shortcut:
                    continue
                if not isinstance(value, dict):
                    continue
                title = str(value.get("title", "Untitled")).strip()
                content = str(value.get("content", "")).rstrip()
                normalized[shortcut] = {"title": title, "content": content}

            with self._lock:
                self._prompts = normalized
                self._last_mtime = mtime

            self.logger.info("Prompts loaded: %d", len(normalized))
            self._notify_reloaded()
            return True
        except Exception as exc:
            self.logger.exception("Failed to reload prompts: %s", exc)
            return False

    def _watch_loop(self) -> None:
        while not self._stop.is_set():
            try:
                self.reload(force=False)
            except Exception as exc:
                self.logger.warning("Prompt watch error: %s", exc)
            time.sleep(1.0)

    def _notify_reloaded(self) -> None:
        for callback in self._callbacks:
            try:
                callback()
            except Exception as exc:
                self.logger.warning("Reload callback failed: %s", exc)

    def _create_default_file(self) -> None:
        default_data = {
            "ctrl+alt+b": {
                "title": "Clean Code Prompt",
                "content": "You are a senior developer. Refactor the following code...",
            },
            "ctrl+alt+d": {
                "title": "Debug Prompt",
                "content": "Act as a debugging expert. Analyze this error...",
            },
        }
        with open(self.prompts_path, "w", encoding="utf-8") as f:
            json.dump(default_data, f, indent=2)
        self.logger.info("Created default prompts file: %s", self.prompts_path)

    def _load_json_lenient(self) -> Dict[str, dict]:
        with open(self.prompts_path, "r", encoding="utf-8") as f:
            raw = f.read()

        try:
            return json.loads(raw)
        except json.JSONDecodeError:
            fixed = self._escape_newlines_inside_strings(raw)
            self.logger.warning(
                "prompts.json had raw newlines inside quoted strings; auto-recovering this load."
            )
            return json.loads(fixed)

    @staticmethod
    def _escape_newlines_inside_strings(text: str) -> str:
        out: list[str] = []
        in_string = False
        escaped = False

        for ch in text:
            if not in_string:
                out.append(ch)
                if ch == '"':
                    in_string = True
                continue

            if escaped:
                out.append(ch)
                escaped = False
                continue

            if ch == "\\":
                out.append(ch)
                escaped = True
                continue

            if ch == '"':
                out.append(ch)
                in_string = False
                continue

            if ch == "\n":
                out.append("\\n")
                continue

            if ch == "\r":
                continue

            out.append(ch)

        return "".join(out)
