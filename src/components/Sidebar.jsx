import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";


function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const openSidebar = () => {
        setIsOpen(true);
    };

    const closeSidebar = () => {
        setIsOpen(false)
    };

    const handleMenuItemClick = () => {
        closeSidebar();
    };

    useEffect(() => {
        const handleWindowClick = (event) => {
            const sidebar = document.getElementById('mySidebar');
            if (sidebar && !sidebar.contains(event.target)) {
                closeSidebar();
            }
        };

        window.addEventListener('click', handleWindowClick);

        return () => {
            window.removeEventListener('click', handleWindowClick);
        };
    }, []);

    return (
        <div className="sidebar-none">
            <div className="mainBurger" id="burgIcon">
                <button className="burgerButtonO" onClick={(event) => { event.stopPropagation(); openSidebar(); }}>
                    ☰
                </button>
            </div>

            <div className="sidebar" id="mySidebar" style={{ marginLeft: isOpen ? '0' : '-200px' }}>
                <div className="h-75">
                    <button className="burger-item burgerButtonC" onClick={closeSidebar}>
                        Close
                    </button>
                    <Link
                        to="/ReportCard"
                        className="burger-item"
                        onClick={() => handleMenuItemClick()}
                    >
                        Report card
                    </Link>
                    <Link
                        to="/Goals"
                        className="burger-item"
                        onClick={() => handleMenuItemClick()}
                    >
                        Iekrājumi
                    </Link>
                    <Link
                        to="/Izmaksas"
                        className="burger-item"
                        onClick={() => handleMenuItemClick()}
                    >
                        Izmaksas
                    </Link>
                    {/* Add more menu items and their click handlers here */}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
