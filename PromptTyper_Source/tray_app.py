import logging
import os
import threading
from typing import Callable

import pystray
from PIL import Image, ImageDraw

from app_setup import AppSetup
from prompt_manager import PromptManagerWindow
from prompt_loader import PromptLoader


class TrayApp:
    def __init__(
        self,
        prompt_loader: PromptLoader,
        on_exit: Callable[[], None],
        app_setup: AppSetup,
        startup_target_executable: str,
        startup_argument_script: str | None = None,
    ):
        self.prompt_loader = prompt_loader
        self.on_exit = on_exit
        self.app_setup = app_setup
        self.startup_target_executable = startup_target_executable
        self.startup_argument_script = startup_argument_script
        self.logger = logging.getLogger("tray_app")
        self._manager_lock = threading.Lock()
        self._manager_open = False
        self._manager_instance: PromptManagerWindow | None = None
        self.prompt_bank_path = os.environ.get(
            "PROMPT_BANK_PATH",
            os.path.join(os.path.expanduser("~"), "Desktop", "prompt bank", "index.html"),
        )
        self.icon = pystray.Icon(
            "TextAutomationTool",
            icon=self._create_icon(),
            title="Text Automation Tool",
            menu=pystray.Menu(
                pystray.MenuItem("Manage Prompts", self._open_prompt_manager),
                pystray.MenuItem("Reload Prompts", self._reload_prompts),
                pystray.MenuItem("Open Prompts File", self._open_prompts_file),
                pystray.MenuItem(
                    "Start on Windows startup",
                    self._toggle_startup,
                    checked=lambda item: self._is_startup_enabled(),
                ),
                pystray.MenuItem("Exit", self._exit),
            ),
        )

    def run(self) -> None:
        self.logger.info("Tray app started")
        self.icon.run()

    def stop(self) -> None:
        self.icon.stop()

    def _reload_prompts(self, icon: pystray.Icon, item: pystray.MenuItem) -> None:
        changed = self.prompt_loader.reload(force=True)
        if changed:
            self._notify("Prompts reloaded")
        else:
            self._notify("Prompts unchanged")

    def _open_prompt_manager(self, icon: pystray.Icon, item: pystray.MenuItem) -> None:
        self.open_prompt_manager()

    def open_prompt_manager(self, imported_prompt: dict | None = None) -> None:
        with self._manager_lock:
            if self._manager_open:
                if self._manager_instance and imported_prompt:
                    self._manager_instance.import_prompt(
                        imported_prompt.get("title", ""),
                        imported_prompt.get("content", ""),
                        imported_prompt.get("source", ""),
                    )
                    self._notify("Imported prompt opened in manager")
                else:
                    self._notify("Prompt manager is already open")
                return
            self._manager_open = True

        def run_manager() -> None:
            try:
                manager = PromptManagerWindow(
                    prompts_path=self.prompt_loader.prompts_path,
                    prompts=self.prompt_loader.get_prompts(),
                    on_saved=lambda: self.prompt_loader.reload(force=True),
                    prompt_bank_path=self.prompt_bank_path,
                )
                self._manager_instance = manager
                if imported_prompt:
                    manager.import_prompt(
                        imported_prompt.get("title", ""),
                        imported_prompt.get("content", ""),
                        imported_prompt.get("source", ""),
                    )
                manager.run()
            except Exception as exc:
                self.logger.exception("Prompt manager failed: %s", exc)
                self._notify("Could not open prompt manager")
            finally:
                with self._manager_lock:
                    self._manager_instance = None
                    self._manager_open = False

        threading.Thread(target=run_manager, daemon=True).start()

    def _open_prompts_file(self, icon: pystray.Icon, item: pystray.MenuItem) -> None:
        try:
            os.startfile(self.prompt_loader.prompts_path)
        except Exception as exc:
            self.logger.error("Failed to open prompts file: %s", exc)

    def _is_startup_enabled(self) -> bool:
        try:
            return self.app_setup.startup_shortcut_exists()
        except Exception as exc:
            self.logger.error("Failed to check startup shortcut state: %s", exc)
            return False

    def _toggle_startup(self, icon: pystray.Icon, item: pystray.MenuItem) -> None:
        try:
            if self._is_startup_enabled():
                self.app_setup.remove_startup_shortcut()
                self._notify("Startup disabled")
            else:
                self.app_setup.ensure_startup_shortcut(
                    self.startup_target_executable,
                    argument_script=self.startup_argument_script,
                )
                self._notify("Startup enabled")
            icon.update_menu()
        except Exception as exc:
            self.logger.exception("Failed to toggle startup: %s", exc)
            self._notify("Could not update startup setting")

    def _exit(self, icon: pystray.Icon, item: pystray.MenuItem) -> None:
        self.on_exit()
        self.icon.stop()

    def _notify(self, message: str) -> None:
        try:
            self.icon.notify(message, title="Text Automation Tool")
        except Exception:
            self.logger.info(message)

    @staticmethod
    def _create_icon() -> Image.Image:
        size = 64
        image = Image.new("RGB", (size, size), color=(30, 30, 30))
        draw = ImageDraw.Draw(image)
        draw.rectangle((8, 8, 56, 56), outline=(0, 200, 255), width=4)
        draw.text((18, 20), "T", fill=(0, 200, 255))
        return image
