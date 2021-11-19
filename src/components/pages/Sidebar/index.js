import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        // adding functionality from props
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle} offset={-80}>About Me</SidebarLink>
                    <SidebarLink to="tech" onClick={toggle} offset={-80}>Tech Stack</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle} offset={-80}>Projects</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle} offset={-80}>Contact Me</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
            
    )
}

export default Sidebar

