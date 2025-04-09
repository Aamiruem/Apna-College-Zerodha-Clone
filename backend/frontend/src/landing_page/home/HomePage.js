// Correct
import ReactDOM from 'react-dom';
// Or for React 18+
import { createRoot } from 'react-dom/client';


import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats'; // Update this based on the correct location
import Pricing from './Pricing'; 
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
function HomePage() {
    return ( 
        <>
            <Navbar/>
            <Hero />
            <Awards />
            <Stats />
            <Pricing/>
            <Education />
            <OpenAccount />
            <Footer />
        </>
    );
}

export default HomePage;
