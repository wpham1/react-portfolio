import React from 'react'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, ArrowUp, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'
import {IoIosArrowDropupCircle} from 'react-icons/io'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    
    return (
        <FooterContainer>
            <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                            back to square one
                            <ArrowUp  animate={{
                            y: [2, -2, 2],
                            }}
                            transition={{ease: "easeInOut", duration: 1.3, repeat: Infinity}}>
                                <IoIosArrowDropupCircle/>
                            </ArrowUp>
                    </SocialLogo>

                </SocialMediaWrap>
                <WebsiteRights>WPhamPortfolio © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
            </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
