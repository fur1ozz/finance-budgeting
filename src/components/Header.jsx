import React from 'react';
import '../styles/Header.css'; // Import the CSS file

function Header({ prop, link }) {
    return (
        <header className="header-container">
            <h1 className="header-title">Maze Tracker</h1>
            <nav className="for-all-header">
                <ul className="nav-list">
                    <li className="none-small"><a href="/ReportCard">REPORTCARD</a></li>
                    <li className="none-small"><a href="/">IEKRĀJUMI</a></li>
                    <li className="none-small"><a href="/Izmaksas">IZMAKSAS</a></li>
                    <li className="show-small"><a href={'/' + link}>{prop}</a></li>
                </ul>
            </nav>
            <div className="for-login-button no-login">
                <button className="login-btn">login</button>
            </div>
        </header>
    );
}

export default Header;
