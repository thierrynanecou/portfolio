import React from 'react';
import { NavLink } from "react-router-dom";
import './header.scss';

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-logo">
               <p>Thierry Nanécou</p> 
            </div>

            <div className="header-nav">
                <NavLink exact to="/" activeClassName="active" className="link">Accueil</NavLink>
                <NavLink to="/about" activeClassName="active" className="link">À propos</NavLink>
                <NavLink exact to="/footer" activeClassName="active" className="link">Contact</NavLink>
            </div>
        </header>
    );
}

export default Header;
