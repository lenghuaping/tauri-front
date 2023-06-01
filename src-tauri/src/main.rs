#![cfg_attr(
all(not(debug_assertions), target_os = "windows"),
windows_subsystem = "windows"
)]

use std::process::Command;

pub fn checkout(branch_name: &str) {
    let output = Command::new("git")
        .arg("checkout")
        .arg(branch_name)
        .output()
        .expect("failed to execute git command");

    println!("{}", String::from_utf8_lossy(&output.stdout));
}

pub fn add_and_commit(message: &str) {
    let output = Command::new("git")
        .arg("add")
        .arg(".")
        .output()
        .expect("failed to execute git command");

    println!("{}", String::from_utf8_lossy(&output.stdout));

    let output = Command::new("git")
        .arg("commit")
        .arg("-m")
        .arg(message)
        .output()
        .expect("failed to execute git command");

    println!("{}", String::from_utf8_lossy(&output.stdout));
}

pub fn push() {
    let output = Command::new("git")
        .arg("push")
        .output()
        .expect("failed to execute git command");

    println!("{}", String::from_utf8_lossy(&output.stdout));
}


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![checkout])
        .invoke_handler(tauri::generate_handler![add_and_commit])
        .invoke_handler(tauri::generate_handler![push])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
