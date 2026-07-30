"use strict";
const loginForm = document.querySelector("#loginForm"); // <form name="loginForm">
const loginMessage = document.querySelector("#message");
loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
        username: document.querySelector("#username")?.value ?? "",
        password: document.querySelector("#password")?.value ?? ""
    };
    if (user.username === "" || user.password === "") {
        if (loginMessage) {
            loginMessage.style.color = "crimson";
            loginMessage.textContent = "Username or password left blank";
        }
    }
    else if (user.username === "admin" && user.password === "password123") {
        if (loginMessage) {
            loginMessage.style.color = "green";
            loginMessage.textContent = "Login successful!";
        }
    }
    else {
        if (loginMessage) {
            loginMessage.style.color = "crimson";
            loginMessage.textContent = "Invalid username or password";
        }
    }
});
