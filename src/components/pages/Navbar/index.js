import React, {useState, useEffect} from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks
} from './NavbarElements'

const Navbar = ({toggle}) => {

    // insert the props function from Homepage
        const [scrollNav, setScrollNav] = useState(false)
    
        const changeNav = () => {
            if(window.scrollY >= 100){
                setScrollNav(true)
            }else{
                setScrollNav(false)
            }
        }
    
        useEffect(() => {
            window.addEventListener('scroll', changeNav)
        }, [])
    
            const toggleHome = () => {
                scroll.scrollToTop();
            }

    return (
    <>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>insert image here</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about"
                          smooth={true} duration={500} spy exact='true' offset={-80}
                          >
                        About Me
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="tech"
                        smooth={true} duration={500} spy exact='true' offset={-80}
                        >
                        Tech Stack
                    </NavLinks>
                </NavItem>
                <NavItem>
                <NavLinks to="projects"
                        smooth={true} duration={500} spy spy={true} exact='true' offset={-80}
                        >
                        Projects
                    </NavLinks>
                </NavItem>
                <NavItem>
                <NavLinks to="contact"
                        smooth={true} duration={500} spy exact='true' offset={-80}
                        >
                        Contact Me
                    </NavLinks>
                </NavItem>
             </NavMenu>
        </NavbarContainer>
    </Nav>
    </>
    )
}

export default Navbar
