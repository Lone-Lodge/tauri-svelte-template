#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

#[tauri::command]
fn greet(name: &str) -> String {
  format!("Hello, {}! From Rust 🦀", name)
}

fn main() {
  tracing_subscriber::registry()
    .with(tracing_subscriber::EnvFilter::new("info"))
    .with(tracing_subscriber::fmt::layer())
    .init();

  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet])
    .setup(|_app| {
      tracing::info!("Tauri app starting");
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
