import React from 'react';
import { NavLink } from 'react-router-dom';
import './cards.scss';
import bookiImage from './../../assets/Booki.png';
import sophieBluelImage from './../../assets/Sophie-bluel.png';
import kasaImage from './../../assets/Kasa.png';
import ninaCarducciImage from './../../assets/Nina-Carducci.png';
import logoGitHub from "./../../assets/github.png";

const Cards = () => {
    return (
        <main>
        <div className="cards-container">
            <NavLink to="/logement/1" className="card-link">
                <div className="logement">
                    <img src={bookiImage} alt="Booki" />
                    <h2>Booki</h2>
                    <span className="github-link">
                        
                        <a href="https://github.com/thierrynanecou/Booki.git" target="_blank" rel="noopener noreferrer"><img src={logoGitHub} alt="GitHub" />GitHub</a>
                    </span>
                </div>
            </NavLink>

            <NavLink to="/logement/2" className="card-link">
                <div className="logement">
                    <img src={sophieBluelImage} alt="Sophie Bluel" />
                    <h2>Sophie Bluel</h2>
                    <span className="github-link">
                        <img src={logoGitHub} alt="GitHub" />
                        <a href="https://github.com/thierrynanecou/SophieBluel.git" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </span>
                </div>
            </NavLink>

            <NavLink to="/logement/3" className="card-link">
                <div className="logement">
                    <img src={kasaImage} alt="Kasa" />
                    <h2>Kasa</h2>
                    <span className="github-link">
                        <img src={logoGitHub} alt="GitHub" />
                        <a href="https://github.com/thierrynanecou/Kasa.git" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </span>
                </div>
            </NavLink>

            <NavLink to="/logement/4" className="card-link">
                <div className="logement">
                    <img src={ninaCarducciImage} alt="Nina Carducci" />
                    <h2>Nina Carducci</h2>
                    <span className="github-link">
                        <img src={logoGitHub} alt="GitHub" />
                        <a href="https://github.com/thierrynanecou/Nina-Carducci.git" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </span>
                </div>
            </NavLink>
        </div>
        </main>
    );
}

export default Cards;

