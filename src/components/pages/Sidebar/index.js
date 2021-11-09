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
                    <SidebarLink to="about" onClick={toggle}>About Me</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>Tech Stack</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Contact Me</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
            
    )
}

export default Sidebar

