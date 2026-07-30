const loginForm = document.querySelector<HTMLFormElement>("#loginForm"); // <form name="loginForm">
const loginMessage = document.querySelector<HTMLParagraphElement>("#message");

interface User {
    username: string;
    password: string;
}

loginForm?.addEventListener("submit", (e): void => {

    e.preventDefault();

    const user: User = {
        username: document.querySelector<HTMLInputElement>("#username")?.value ?? "",
        password: document.querySelector<HTMLInputElement>("#password")?.value ?? ""
    };

    if (user.username === "" || user.password === "") {
        if (loginMessage) {
            loginMessage.style.color = "crimson";
            loginMessage.textContent = "Username or password left blank";
        }
    } else if (user.username === "admin" && user.password === "password123") {
        if (loginMessage) {
            loginMessage.style.color = "green";
            loginMessage.textContent = "Login successful!";
        }
    } else {
        if (loginMessage) {
            loginMessage.style.color = "crimson";
            loginMessage.textContent = "Invalid username or password";
        }
    }
});