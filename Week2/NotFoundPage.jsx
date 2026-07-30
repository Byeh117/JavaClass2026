import { Link } from "react-router";

function NotFoundPage() {
    return (
        <main className="not-found-page">
            <section className="not-found-card">
                <p className="error-code">404</p>

                <h1>Page Not Found</h1>

                <p>
                    The page you have requested does not exist.
                </p>

                <Link
                    className="home-link"
                    to="/"
                >
                    Return to Login
                </Link>
            </section>
        </main>
    );
}

export default NotFoundPage;