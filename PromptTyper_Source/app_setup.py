import json
import logging
import os
import shutil
from pathlib import Path

import win32com.client


class AppSetup:
    def __init__(self, app_name: str, bundled_prompts_path: str):
        self.app_name = app_name
        self.bundled_prompts_path = bundled_prompts_path
        self.logger = logging.getLogger("app_setup")

        appdata = os.environ.get("APPDATA", str(Path.home()))
        self.user_dir = os.path.join(appdata, app_name)
        self.user_prompts_path = os.path.join(self.user_dir, "prompts.json")
        self.user_log_path = os.path.join(self.user_dir, "app.log")

    def _startup_shortcut_path(self) -> str:
        startup_dir = os.path.join(
            os.environ.get("APPDATA", ""),
            "Microsoft",
            "Windows",
            "Start Menu",
            "Programs",
            "Startup",
        )
        return os.path.join(startup_dir, f"{self.app_name}.lnk")

    def ensure_user_data(self) -> None:
        os.makedirs(self.user_dir, exist_ok=True)
        if os.path.exists(self.user_prompts_path):
            return

        if os.path.exists(self.bundled_prompts_path):
            shutil.copyfile(self.bundled_prompts_path, self.user_prompts_path)
            self.logger.info("Copied default prompts to %s", self.user_prompts_path)
            return

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
        with open(self.user_prompts_path, "w", encoding="utf-8") as f:
            json.dump(default_data, f, indent=2)
        self.logger.info("Created default prompts at %s", self.user_prompts_path)

    def ensure_startup_shortcut(self, target_executable: str, argument_script: str | None = None) -> None:
        startup_dir = os.path.dirname(self._startup_shortcut_path())
        if not startup_dir:
            return

        os.makedirs(startup_dir, exist_ok=True)
        shortcut_path = self._startup_shortcut_path()
        if os.path.exists(shortcut_path):
            return

        shell = win32com.client.Dispatch("WScript.Shell")
        shortcut = shell.CreateShortCut(shortcut_path)
        shortcut.Targetpath = target_executable
        shortcut.WorkingDirectory = os.path.dirname(argument_script or target_executable)
        if argument_script:
            shortcut.Arguments = f'"{argument_script}"'
        shortcut.IconLocation = target_executable
        shortcut.save()
        self.logger.info("Startup shortcut created at %s", shortcut_path)

    def startup_shortcut_exists(self) -> bool:
        return os.path.exists(self._startup_shortcut_path())

    def remove_startup_shortcut(self) -> None:
        shortcut_path = self._startup_shortcut_path()
        if os.path.exists(shortcut_path):
            os.remove(shortcut_path)
            self.logger.info("Startup shortcut removed from %s", shortcut_path)
