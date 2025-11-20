import React from 'react';

export function Layout({ children, headerContent }) {
    return (
        <div className="app">
            <header className="header">
                <div className="container">
                    {headerContent}
                </div>
            </header>

            <main className="main-content">
                {children}
            </main>

            <footer className="footer">
                <div className="container">
                    <p>Designed for your Coding Journey 🚀</p>
                </div>
            </footer>
        </div>
    );
}
