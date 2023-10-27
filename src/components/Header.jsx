import React from 'react';
import '../styles/Header.css';
import {Link} from "react-router-dom"; // Import the CSS file

function Header({ prop, link }) {
    const activeLink = prop; // Set the active link name based on the 'prop' value

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
                <button className="login-btn">login</button>
            </div>
        </header>
    );
}

export default Header;
