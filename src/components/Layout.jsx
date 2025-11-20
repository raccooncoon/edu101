import { Link, Outlet } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export default function Layout() {
    return (
        <div className="app-container">
            <header className="header">
                <div className="container header-content">
                    <Link to="/" className="logo">
                        <div className="logo-icon">
                            <BookOpen size={18} />
                        </div>
                        <span className="gradient-text">React 101</span>
                    </Link>

                    <nav className="flex gap-6">
                        <Link to="/" className="nav-link">
                            Dashboard
                        </Link>
                        <a href="https://react.dev" target="_blank" rel="noreferrer" className="nav-link">
                            Official Docs
                        </a>
                    </nav>
                </div>
            </header>

            <main className="main-content">
                <div className="container">
                    <Outlet />
                </div>
            </main>

            <footer className="footer">
                <div className="container">
                    <p>Designed for your React Journey</p>
                </div>
            </footer>
        </div>
    );
}
