import logging
import os
import signal
import sys

from app_setup import AppSetup
from keyboard_listener import KeyboardListener
from prompt_bank_bridge import PromptBankBridge
from prompt_loader import PromptLoader
from tray_app import TrayApp
from typer_engine import TyperEngine

APP_NAME = "PromptTyper"


def _runtime_base_dir() -> str:
    if getattr(sys, "frozen", False):
        return os.path.dirname(sys.executable)
    return os.path.dirname(os.path.abspath(__file__))


def configure_logging(log_path: str) -> None:
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
        handlers=[
            logging.FileHandler(log_path, encoding="utf-8"),
        ],
    )


def main() -> None:
    base_dir = _runtime_base_dir()
    bundled_prompts_path = os.path.join(base_dir, "prompts.json")
    prompt_bank_data_path = os.environ.get(
        "PROMPT_BANK_DATA_PATH",
        os.path.join(os.path.expanduser("~"), "Desktop", "prompt bank", "prompt_bank_data.json"),
    )

    setup = AppSetup(APP_NAME, bundled_prompts_path)
    setup.ensure_user_data()
    configure_logging(setup.user_log_path)

    logger = logging.getLogger("main")
    logger.info("Starting text automation app")

    if getattr(sys, "frozen", False):
        startup_target_executable = sys.executable
        startup_argument_script = None
    else:
        startup_target_executable = sys.executable.replace("python.exe", "pythonw.exe")
        startup_argument_script = os.path.abspath(__file__)

    loader = PromptLoader(setup.user_prompts_path)
    typer = TyperEngine(min_delay=0.01, max_delay=0.03)
    listener = KeyboardListener(loader, typer)

    def on_reload() -> None:
        listener.register_all()

    loader.add_reload_callback(on_reload)
    loader.start()
    listener.start()

    tray = TrayApp(
        prompt_loader=loader,
        on_exit=lambda: shutdown(loader, listener, typer, bridge),
        app_setup=setup,
        startup_target_executable=startup_target_executable,
        startup_argument_script=startup_argument_script,
    )

    bridge = PromptBankBridge(
        on_import=lambda payload: tray.open_prompt_manager(imported_prompt=payload),
        data_path=prompt_bank_data_path,
    )
    bridge.start()

    signal.signal(signal.SIGINT, lambda *_: tray.stop())
    signal.signal(signal.SIGTERM, lambda *_: tray.stop())

    tray.run()


def shutdown(
    loader: PromptLoader,
    listener: KeyboardListener,
    typer: TyperEngine,
    bridge: PromptBankBridge,
) -> None:
    logging.getLogger("main").info("Shutting down")
    bridge.stop()
    listener.stop()
    loader.stop()
    typer.stop()


if __name__ == "__main__":
    main()
