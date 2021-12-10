import styled from "styled-components"
import { motion } from "framer-motion"
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #dbe0e5;
`

export const FooterWrap = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    padding: 48px 24px; 

`




export const SocialMedia = styled.section `
    max-width: 1000px;
    width: 100%;
    background-color: red;
`

export const SocialMediaWrap = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;
    background-color: blue;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`
export const SocialLogo = styled(Link) `
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    &:hover {
        color: rgba(247, 62, 105, 1);
        transition: 0.3s ease-out;
    }
`
export const ArrowUp = styled(motion.div)`
    display: flex;
    justify-content: center;
`

export const WebsiteRights = styled.small `
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 16px;
`
