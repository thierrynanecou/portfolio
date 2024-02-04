import React from 'react' ;
import Accueil from '../pages/accueil/accueil.jsx';

import Error from '../pages/error/error.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/header/header.jsx';



const ConfigRouter = () => (
    <Router>
        <Header />
        <Routes>
           <Route path ="*" element={<Error />} />
            <Route path ="/" element={<Accueil />} />
            
            
            
        </Routes>
        
    </Router>
);

export default ConfigRouter 