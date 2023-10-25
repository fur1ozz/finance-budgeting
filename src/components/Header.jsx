import React from 'react';
import '../Header.css'; // Import the CSS file

function Header() {
    return (
        <header className="header-container">
            <h1 className="header-title">Maze Tracker</h1>
            <nav className="for-all-header">
                <ul className="nav-list">
                    <li><a href="/">REPORTCARD</a></li>
                    <li><a href="/about">IEKRĀJUMI</a></li>
                    <li><a href="/contact">IZMAKSAS</a></li>
                </ul>
            </nav>
            <div className="for-login-button">
                <button className="login-btn">login</button>
            </div>
        </header>
    );
}

export default Header;
