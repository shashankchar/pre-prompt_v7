import json
import logging
import os
import webbrowser
from pathlib import Path
from typing import Callable, Dict

import tkinter as tk
from tkinter import messagebox, ttk


class PromptManagerWindow:
    def __init__(
        self,
        prompts_path: str,
        prompts: Dict[str, dict],
        on_saved: Callable[[], None],
        prompt_bank_path: str | None = None,
    ):
        self.prompts_path = prompts_path
        self.on_saved = on_saved
        self.prompt_bank_path = prompt_bank_path
        self.logger = logging.getLogger("prompt_manager")
        self._prompts: Dict[str, dict] = dict(prompts)

        self.root = tk.Tk()
        self.root.title("PromptTyper - Manage Prompts")
        self.root.geometry("780x520")
        self.root.minsize(700, 450)

        self.listbox = tk.Listbox(self.root, exportselection=False)
        self.shortcut_var = tk.StringVar()
        self.title_var = tk.StringVar()
        self._import_notice_var = tk.StringVar(master=self.root, value="")
        self.content_text = tk.Text(self.root, wrap="word")
        self._build_ui()
        self._refresh_list()

    def run(self) -> None:
        self.root.mainloop()

    def _build_ui(self) -> None:
        self.root.columnconfigure(0, weight=1)
        self.root.columnconfigure(1, weight=3)
        self.root.rowconfigure(0, weight=1)

        left = ttk.Frame(self.root, padding=10)
        left.grid(row=0, column=0, sticky="nsew")
        left.rowconfigure(1, weight=1)
        left.columnconfigure(0, weight=1)

        ttk.Label(left, text="Shortcuts").grid(row=0, column=0, sticky="w")
        self.listbox.grid(row=1, column=0, sticky="nsew", pady=(6, 8))
        self.listbox.bind("<<ListboxSelect>>", self._on_select)

        left_actions = ttk.Frame(left)
        left_actions.grid(row=2, column=0, sticky="ew")
        ttk.Button(left_actions, text="New", command=self._new_prompt).pack(side="left", padx=(0, 6))
        ttk.Button(left_actions, text="Delete", command=self._delete_prompt).pack(side="left")

        right = ttk.Frame(self.root, padding=10)
        right.grid(row=0, column=1, sticky="nsew")
        right.columnconfigure(1, weight=1)
        right.rowconfigure(2, weight=1)

        ttk.Label(right, text="Shortcut").grid(row=0, column=0, sticky="w", padx=(0, 8))
        ttk.Entry(right, textvariable=self.shortcut_var).grid(row=0, column=1, sticky="ew", pady=(0, 8))

        ttk.Label(right, text="Title").grid(row=1, column=0, sticky="w", padx=(0, 8))
        ttk.Entry(right, textvariable=self.title_var).grid(row=1, column=1, sticky="ew", pady=(0, 8))

        ttk.Label(right, text="Content").grid(row=2, column=0, sticky="nw", padx=(0, 8))
        self.content_text.grid(row=2, column=1, sticky="nsew")

        ttk.Label(
            right,
            textvariable=self._import_notice_var,
            foreground="#0b6bcb",
            wraplength=420,
            justify="left",
        ).grid(row=3, column=1, sticky="w", pady=(10, 0))

        buttons = ttk.Frame(right)
        buttons.grid(row=4, column=1, sticky="e", pady=(10, 0))
        ttk.Button(buttons, text="Prompt Bank", command=self._open_prompt_bank).pack(side="left", padx=(0, 6))
        ttk.Button(buttons, text="Add Prompt", command=self._open_prompt_bank_admin).pack(side="left", padx=(0, 6))
        ttk.Button(buttons, text="Clear", command=self._new_prompt).pack(side="left", padx=(0, 6))
        ttk.Button(buttons, text="Store", command=self._save_prompt).pack(side="left", padx=(0, 6))
        ttk.Button(buttons, text="Store & Close", command=self._save_and_close).pack(side="left", padx=(0, 6))
        ttk.Button(buttons, text="Close", command=self.root.destroy).pack(side="left")

    def _refresh_list(self) -> None:
        current = self.shortcut_var.get().strip().lower()
        self.listbox.delete(0, tk.END)
        for shortcut in sorted(self._prompts.keys()):
            title = self._prompts[shortcut].get("title", "")
            self.listbox.insert(tk.END, f"{shortcut} - {title}")

        if current and current in self._prompts:
            idx = sorted(self._prompts.keys()).index(current)
            self.listbox.selection_set(idx)
            self.listbox.activate(idx)

    def _on_select(self, _event=None) -> None:
        selection = self.listbox.curselection()
        if not selection:
            return
        shortcut = sorted(self._prompts.keys())[selection[0]]
        item = self._prompts.get(shortcut, {})
        self.shortcut_var.set(shortcut)
        self.title_var.set(item.get("title", ""))
        self.content_text.delete("1.0", tk.END)
        self.content_text.insert("1.0", item.get("content", ""))

    def _new_prompt(self) -> None:
        self.listbox.selection_clear(0, tk.END)
        self.shortcut_var.set("")
        self.title_var.set("")
        self.content_text.delete("1.0", tk.END)
        self._import_notice_var.set("")

    def _delete_prompt(self) -> None:
        shortcut = self.shortcut_var.get().strip().lower()
        if not shortcut or shortcut not in self._prompts:
            messagebox.showinfo("Delete Prompt", "Select a prompt first.")
            return
        if not messagebox.askyesno("Delete Prompt", f"Delete '{shortcut}'?"):
            return

        self._prompts.pop(shortcut, None)
        self._persist()
        self._new_prompt()
        self._refresh_list()

    def _save_prompt(self) -> None:
        shortcut = self.shortcut_var.get().strip().lower()
        title = self.title_var.get().strip() or "Untitled"
        content = self.content_text.get("1.0", tk.END).rstrip("\n")

        if not shortcut:
            messagebox.showerror("Invalid Shortcut", "Shortcut is required.")
            return
        if not content.strip():
            messagebox.showerror("Invalid Content", "Content cannot be empty.")
            return

        self._prompts[shortcut] = {"title": title, "content": content}
        self._persist()
        self._refresh_list()
        self._import_notice_var.set("")
        messagebox.showinfo("Stored", "Prompt stored successfully.")

    def _save_and_close(self) -> None:
        shortcut = self.shortcut_var.get().strip().lower()
        title = self.title_var.get().strip() or "Untitled"
        content = self.content_text.get("1.0", tk.END).rstrip("\n")

        if not shortcut:
            messagebox.showerror("Invalid Shortcut", "Shortcut is required.")
            return
        if not content.strip():
            messagebox.showerror("Invalid Content", "Content cannot be empty.")
            return

        self._prompts[shortcut] = {"title": title, "content": content}
        self._persist()
        self.root.destroy()

    def import_prompt(self, title: str, content: str, source: str = "") -> None:
        def apply_import() -> None:
            self.root.deiconify()
            self.root.lift()
            self.root.focus_force()
            self._new_prompt()
            self.title_var.set(title.strip() or "Imported Prompt")
            self.content_text.insert("1.0", content.rstrip())
            if source:
                self._import_notice_var.set(
                    f"Imported from {source}. Add a shortcut and click Store to save it."
                )
            else:
                self._import_notice_var.set(
                    "Imported prompt loaded. Add a shortcut and click Store to save it."
                )

        self.root.after(0, apply_import)

    def _persist(self) -> None:
        with open(self.prompts_path, "w", encoding="utf-8") as f:
            json.dump(self._prompts, f, indent=2, ensure_ascii=False)
        self.logger.info("Prompts saved to %s", self.prompts_path)
        self.on_saved()

    def _open_prompt_bank(self) -> None:
        if not self.prompt_bank_path or not os.path.exists(self.prompt_bank_path):
            messagebox.showerror("Prompt Bank", "Prompt Bank file not found.")
            return

        try:
            os.startfile(self.prompt_bank_path)
        except Exception as exc:
            self.logger.exception("Failed to open Prompt Bank: %s", exc)
            messagebox.showerror("Prompt Bank", "Could not open Prompt Bank.")

    def _open_prompt_bank_admin(self) -> None:
        if not self.prompt_bank_path or not os.path.exists(self.prompt_bank_path):
            messagebox.showerror("Prompt Bank", "Prompt Bank file not found.")
            return

        try:
            admin_target = f"{Path(self.prompt_bank_path).resolve().as_uri()}#admin"
            webbrowser.open(admin_target)
        except Exception as exc:
            self.logger.exception("Failed to open Prompt Bank admin: %s", exc)
            messagebox.showerror("Prompt Bank", "Could not open Prompt Bank admin.")
