import logging
from typing import Dict

import keyboard

from prompt_loader import PromptLoader
from typer_engine import TyperEngine


class KeyboardListener:
    def __init__(self, prompt_loader: PromptLoader, typer: TyperEngine):
        self.prompt_loader = prompt_loader
        self.typer = typer
        self.logger = logging.getLogger("keyboard_listener")
        self._registered: Dict[str, int] = {}

    def start(self) -> None:
        self.register_all()
        self.logger.info("Keyboard listener started")

    def stop(self) -> None:
        self.clear_hotkeys()
        self.logger.info("Keyboard listener stopped")

    def clear_hotkeys(self) -> None:
        for hotkey in list(self._registered):
            try:
                keyboard.remove_hotkey(self._registered[hotkey])
            except KeyError:
                pass
        self._registered.clear()

    def register_all(self) -> None:
        self.clear_hotkeys()
        prompts = self.prompt_loader.get_prompts()

        for shortcut, data in prompts.items():
            title = str(data.get("title", shortcut)).strip() or shortcut
            content = str(data.get("content", "")).strip()
            if not content:
                self.logger.warning("Skipping empty content for shortcut: %s", shortcut)
                continue

            try:
                hotkey_id = keyboard.add_hotkey(
                    shortcut,
                    lambda text=content, key=shortcut, name=title: self._on_hotkey(key, name, text),
                    suppress=True,
                    trigger_on_release=True,
                )
                self._registered[shortcut] = hotkey_id
                self.logger.info("Registered shortcut: %s", shortcut)
            except Exception as exc:
                self.logger.warning("Could not register shortcut '%s': %s", shortcut, exc)

    def _on_hotkey(self, shortcut: str, title: str, content: str) -> None:
        self.logger.info("Shortcut pressed: %s", shortcut)
        self.typer.enqueue(content, title=title)
