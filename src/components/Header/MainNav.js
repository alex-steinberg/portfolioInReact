import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => (
    <nav className="main-nav">
        <NavLink exact to="/">
            Home
        </NavLink>
        <NavLink exact to="/portfolio">
            Portfolio
        </NavLink>
    </nav>
)

export default MainNav;
