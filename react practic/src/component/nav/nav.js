import React from 'react';
import './nav.scss';
const NavBar = () => {
    return (
        <nav className="navbar">
                <div className="nav__item"><a href="#">Profile</a></div>
                <div className="nav__item"><a href="#">Messages</a></div>
                <div className="nav__item"><a href="#">News</a></div>
                <div className="nav__item"><a href="#">Music</a></div>
                <div className="nav__item"><a href="#">Settings</a></div>
            </nav>
    );
};

export default NavBar;