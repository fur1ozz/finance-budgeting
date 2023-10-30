import React from 'react';
import '../styles/Header.css';
import {Link} from "react-router-dom"; // Import the CSS file

function Header({ prop, link }) {
    const activeLink = prop;
    const userName = localStorage.getItem('userName');

    const handleLogout = () => {
        const confirmed = window.confirm("Are you sure you want to log out?");

        if (confirmed) {
            localStorage.clear();
            window.location.href = '/login';
        }
    };

    return (
        <header className="header-container">
            <Link className="header-title" to="/">Maze Tracker</Link>
            <nav className="for-all-header">
                <ul className="nav-list">
                    <li className="none-small">
                        <a href="/ReportCard" className={activeLink === "REPORT CARD" ? "bold" : ""}>
                            REPORTCARD
                        </a>
                    </li>
                    <li className="none-small">
                        <a href="/Goals" className={activeLink === "IEKRĀJUMI" ? "bold" : ""}>
                            IEKRĀJUMI
                        </a>
                    </li>
                    <li className="none-small">
                        <a href="/Izmaksas" className={activeLink === "IZMAKSAS" ? "bold" : ""}>
                            IZMAKSAS
                        </a>
                    </li>
                    <li className="show-small">
                        <a href={'/' + link} className={activeLink === link ? "bold" : ""}>
                            {prop}
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="for-login-button no-login">
                {/*<Link to="/Login" className="login-btn">login</Link>*/}
                {userName ? ( // Check if userName is set in local storage
                    <div className="flex f-d-column a-i-center">
                        <span className="m-b-10px header-user">Hello, {userName}</span>
                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <Link to="/Login" className="login-btn">Login</Link> // Display the login button
                )}
            </div>
        </header>
    );
}

export default Header;
