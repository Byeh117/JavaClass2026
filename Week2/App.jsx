import {
    BrowserRouter,
    Navigate,
    Route,
    Routes
} from "react-router";

import { useState } from "react";

import LoginPage from "./LoginPage.jsx";
import DashboardPage from "./DashboardPage.jsx";
import NotFoundPage from "./NotFoundPage";

function App() {
    const [loggedInUser, setLoggedInUser] = useState(null);

    function handleLogin(username) {
        setLoggedInUser(username);
    }

    function handleLogout() {
        setLoggedInUser(null);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        loggedInUser
                        ? <Navigate to="/dashboard" replace />
                        : <LoginPage onLogin={handleLogin} />
                    }
                />

                <Route
                    path="/dashboard"
                    element={
                        loggedInUser
                        ? (
                            <DashboardPage
                                username={loggedInUser}
                                onLogout={handleLogout}
                            />
                        )
                        : <Navigate to="/" replace />
                    }
                />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;