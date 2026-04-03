import json
import logging
import os
import threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from typing import Callable


class PromptBankBridge:
    def __init__(
        self,
        on_import: Callable[[dict], None],
        data_path: str,
        host: str = "127.0.0.1",
        port: int = 8765,
    ):
        self.on_import = on_import
        self.data_path = data_path
        self.host = host
        self.port = port
        self.logger = logging.getLogger("prompt_bank_bridge")
        self._server: ThreadingHTTPServer | None = None
        self._thread: threading.Thread | None = None

    def start(self) -> None:
        if self._server is not None:
            return

        bridge = self

        class Handler(BaseHTTPRequestHandler):
            def do_OPTIONS(self) -> None:
                self.send_response(204)
                self._send_cors_headers()
                self.end_headers()

            def do_GET(self) -> None:
                if self.path == "/health":
                    self.send_response(200)
                    self._send_cors_headers()
                    self.send_header("Content-Type", "application/json")
                    self.end_headers()
                    self.wfile.write(b'{"status":"ok"}')
                    return

                if self.path == "/prompt-bank-data":
                    payload = bridge._load_prompt_bank_data()
                    if payload is None:
                        self._send_json(404, {"ok": False, "error": "Prompt Bank data not found"})
                        return

                    self._send_json(200, {"ok": True, "prompts": payload})
                    return

                self.send_error(404)
                return

            def do_POST(self) -> None:
                if self.path == "/import-prompt":
                    length = int(self.headers.get("Content-Length", "0"))
                    raw = self.rfile.read(length)

                    try:
                        payload = json.loads(raw.decode("utf-8"))
                    except json.JSONDecodeError:
                        self._send_json(400, {"ok": False, "error": "Invalid JSON"})
                        return

                    title = str(payload.get("title", "")).strip() or "Imported Prompt"
                    content = str(payload.get("content", "")).rstrip()
                    source = str(payload.get("source", "")).strip()

                    if not content.strip():
                        self._send_json(400, {"ok": False, "error": "Prompt content is required"})
                        return

                    bridge.on_import({"title": title, "content": content, "source": source})
                    self._send_json(200, {"ok": True})
                    return

                if self.path == "/prompt-bank-data":
                    length = int(self.headers.get("Content-Length", "0"))
                    raw = self.rfile.read(length)

                    try:
                        payload = json.loads(raw.decode("utf-8"))
                    except json.JSONDecodeError:
                        self._send_json(400, {"ok": False, "error": "Invalid JSON"})
                        return

                    prompts = payload.get("prompts")
                    if not isinstance(prompts, list):
                        self._send_json(400, {"ok": False, "error": "prompts must be a list"})
                        return

                    bridge._save_prompt_bank_data(prompts)
                    self._send_json(200, {"ok": True})
                    return

                self.send_error(404)
                return

            def log_message(self, format: str, *args) -> None:
                bridge.logger.info("HTTP %s", format % args)

            def _send_json(self, status: int, payload: dict) -> None:
                self.send_response(status)
                self._send_cors_headers()
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps(payload).encode("utf-8"))

            def _send_cors_headers(self) -> None:
                self.send_header("Access-Control-Allow-Origin", "*")
                self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
                self.send_header("Access-Control-Allow-Headers", "Content-Type")

        self._server = ThreadingHTTPServer((self.host, self.port), Handler)
        self._thread = threading.Thread(target=self._server.serve_forever, daemon=True)
        self._thread.start()
        self.logger.info("Prompt bank bridge listening on http://%s:%s", self.host, self.port)

    def stop(self) -> None:
        if self._server is None:
            return

        self._server.shutdown()
        self._server.server_close()
        self._server = None

        if self._thread is not None:
            self._thread.join(timeout=2)
            self._thread = None

    def _load_prompt_bank_data(self) -> list[dict] | None:
        if not os.path.exists(self.data_path):
            return None

        with open(self.data_path, "r", encoding="utf-8") as handle:
            payload = json.load(handle)

        if not isinstance(payload, list):
            self.logger.warning("Prompt bank data file did not contain a list: %s", self.data_path)
            return []

        return payload

    def _save_prompt_bank_data(self, prompts: list[dict]) -> None:
        os.makedirs(os.path.dirname(self.data_path), exist_ok=True)
        with open(self.data_path, "w", encoding="utf-8") as handle:
            json.dump(prompts, handle, indent=2, ensure_ascii=False)
        self.logger.info("Prompt bank data saved to %s", self.data_path)
