import React, { useState } from 'react';
import AboutMe from './AboutMe';
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import Projects from './Projects';
import Sidebar from './Sidebar'
import TechStack from './TechStack';
import { projObjOne, projObjTwo, projObjThree } from "./Projects/Data"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        // go from false to true when toggled
        setIsOpen(!isOpen)
    };
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection/>
        <AboutMe/>
        <TechStack/>
        <Projects {...projObjOne} />
        <Projects {...projObjTwo} />
        <Projects {...projObjThree} />
        </>
    )
}

export default Home
