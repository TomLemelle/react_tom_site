import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <header className="navigation">
            <NavLink exact to="#video" activeClassName="nav-active" className="nav-links">Vidéos</NavLink>
            <NavLink exact to="#training" activeClassName="nav-active" className="nav-links">Formation</NavLink>
            <NavLink exact to="#informations" activeClassName="nav-active" className="nav-links">Informations</NavLink>
            <NavLink exact to="#articles" activeClassName="nav-active" className="nav-links">Articles</NavLink>
        </header>
    );
};

export default Navigation;