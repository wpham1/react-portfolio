import React, { useState } from 'react';
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        // go from false to true when toggled
        setIsOpen(!isOpen)
    };
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar/>
        
        <HeroSection/>
        </>
    )
}

export default Home
