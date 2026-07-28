const form = document.querySelector("#loginForm");
const message = document.querySelector("#message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if(username === "admin" && password === "password123"){
        message.style.color = "green";
        message.textContent = "Login Successful!";

        // redirect to dashboard page:
        // window.location.href = "dashboard.html"
    } else {
        message.style.color = "crimson";
        message.textContent = "Invalid username or password";
    }
});