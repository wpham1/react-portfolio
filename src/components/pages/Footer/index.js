import React from 'react'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, ArrowUp, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'
import {IoIosArrowDropupCircle} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare, FaItchIo, FaBehanceSquare} from 'react-icons/fa'

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
                            Back to square one
                            <ArrowUp  animate={{
                            y: [2, -2, 2],
                            }}
                            transition={{ease: "easeInOut", duration: 1.3, repeat: Infinity}}>
                                <IoIosArrowDropupCircle/>
                            </ArrowUp>
                    </SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href="https://www.linkedin.com/in/walterpham/" target="_blank" aria-label="Linkedin">
                            <BsLinkedin/>
                        </SocialIconLink>
                        <SocialIconLink href="https://github.com/wpham1" target="_blank" aria-label="Github">
                            <FaGithubSquare/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.behance.net/walterpham" target="_blank" aria-label="Behance">
                            <FaBehanceSquare/>
                        </SocialIconLink>
                        <SocialIconLink href="https://ouroborosgames.itch.io/" target="_blank" aria-label="Itch">
                            <FaItchIo/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
                <WebsiteRights>WPhamPortfolio © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
            </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
