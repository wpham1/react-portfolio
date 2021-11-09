import React from 'react'
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

const Navbar = () => {
    return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo>insert image here</NavLogo>
            <MobileIcon>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                <NavLinks to="/">About Me</NavLinks>
                </NavItem>
                <NavItem>
                <NavLinks to="/">Tech Stack</NavLinks>
                </NavItem>
                <NavItem>
                <NavLinks to="/">Projects</NavLinks>
                </NavItem>
                <NavItem>
                <NavLinks to="/">Contact Me</NavLinks>
                </NavItem>
             </NavMenu>
        </NavbarContainer>
    </Nav>
    </>
    )
}

export default Navbar
