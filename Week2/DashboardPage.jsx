import { useNavigate } from "react-router";

function DashboardPage({ username, onLogout }) {
    const navigate = useNavigate();

    function handleLogout() {
        onLogout();
        navigate("/");
    }

    return (
        <div className="dashboard-page">
            <header className="dashboard-header">
                <div>
                    <h1>SecureBank</h1>
                    <p>Customer Portal</p>
                </div>

                <button
                    className="logout-button"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </header>

            <main className="dashboard-content">
                <section className="welcome-section">
                    <p className="eyebrow">
                        ACCOUNT OVERVIEW
                    </p>

                    <h2>Welcome, {username}!</h2>

                    <p>
                        Here is a summary of your SecureBank accounts
                    </p>
                </section>

                <section className="account-grid">
                    <article className="account-card">
                        <div className="account-card-header">
                            <span>Checking Account</span>
                            <span className="account-type">
                                CHECKING
                            </span>
                        </div>

                        <p className="account-number">
                            Account ending in 1042
                        </p>

                        <p className="balance-label">
                            Available balance
                        </p>

                        <p className="balance">
                            $1,250.00
                        </p>
                    </article>
                    <article className="account-card">
                        <div className="account-card-header">
                            <span>Savings Account</span>
                            <span className="account-type">
                                SAVINGS
                            </span>
                        </div>

                        <p className="account-number">
                            Account ending in 2048
                        </p>

                        <p className="balance-label">
                            Available balance
                        </p>

                        <p className="balance">
                            $5,700.00
                        </p>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default DashboardPage;