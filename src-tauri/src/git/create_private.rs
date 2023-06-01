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
