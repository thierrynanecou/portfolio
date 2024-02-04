import React from 'react';
import './accueil.scss';
import About from '../about/about';
import Cards from '../../components/cards/cards';
import Footer from '../footer/footer';

const Accueil = () => {
    
    return (
        <div>
            <Cards />
            <About />
            <Footer />
        </div>
    );
}

export default Accueil;

