# Tauri v2 Migration (Guide)

This template remains neutral and compatible with Tauri v1, but it includes guidance to prep for **Tauri v2**.

## Why consider v2?

- Improved **capabilities** (security by default)
- Better mobile story (future options)
- Updated API surface and plugins

## Migration steps (high-level)

1. Update Tauri deps to v2 in `src-tauri/Cargo.toml` and equivalent config.
2. Replace/adapt any v1-only APIs and plugin interfaces.
3. Define **capabilities** explicitly (fs, shell, http, etc.).
4. Re-test: window creation, menu/tray, custom commands (IPC).
5. Update any CI steps invoking the tauri CLI to v2 syntax.

## Links

- Tauri v2 docs: https://tauri.app/
- Upgrade notes: check official migration sections
