import { useState } from "react";
import { useNavigate } from "react-router";

function LoginPage({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        if (
            username === "admin" && password === "password123"
        ) {
            setMessage("Login Successful!");
            setMessageType("success");

            onLogin(username);
            navigate("/dashboard");
        } else {
            setMessage("Invalid username or password.");
            setMessageType("error");
        }
    }

    return (
        <main className="login-page">
            <section className="login-card">
                <div className="bank-logo">
                    <span aria-hidden="true">🏦</span>
                </div>

                <h1>SecureBank</h1>

                <p className="subtitle">
                    Sign in to access your account
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">
                            Username
                        </label>

                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                            placeholder="Enter username"
                            autoComplete="username"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            placeholder="Enter password"
                            autoComplete="current-password"
                            required
                        />
                    </div>

                    <button type="submit">
                        Login
                    </button>
                </form>

                {message && (
                    <p
                        className={`message ${messageType}`}
                        role="status"
                    >
                        {message}
                    </p>
                )}

                <p className="demo-credentials">
                    Demo login: admin / password123
                </p>
            </section>
        </main>
    );
}

export default LoginPage;