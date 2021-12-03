import styled from "styled-components";
import { motion } from "framer-motion"

export const BsEmojiSunglasses = styled.p`
   z-index: 4; 
    height: auto;
    position: absolute;
    width: 100px;
    color: black;
`

export const ImgWrapper = styled.div`
    height: auto;
`

export const Sticker = styled.img`
    position: relative;
    width: 100%;
    height: 353px;
    padding: 30px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transform: rotate(-5deg);
`
export const CircleText = styled.img`
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 500px;
    height: auto;
    padding: 30px;
    animation: RotateCircle 30s infinite;

 @keyframes RotateCircle {
     0%{transform: rotate(0deg);}
     100%{transform: rotate(360deg);}
    }

    @media screen and (max-width: 780px){
    display: none;
    overflow: hidden;
    }

    &:hover{
    animation: RotateCircle 0s ease infinite;
    }

`

export const HeroContainer = styled.div`
    background: white;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    max-width: 100%;
    align-items: center;
    padding: 0 30px;
    height: auto;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 780px){
        height: 800px;
        margin-top: -100px;
        width: 100%;
        
    }
    `
export const HeroBg = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const GraphPaper = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #f8f8f8;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%238dcbff' fill-opacity='0.25'%3E%3Cpath opacity='.8' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    transform: scale(2);
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 100%;
    min-height: auto;
    padding: 8px 24px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

@media screen and (max-width: 500px){
    margin-top: 0px;
    display: flex;
    flex-flow: row wrap;
    }
`

export const HeroH1 = styled(motion.h1)`
color: #fff;
font-size: 48px;
text-align: center;


@media screen and (max-width: 768px) {
    font-size: 40px;
    text-align: left;
}

@media screen and (max-width: 480px){
    font-size: 32px;
}
`
export const HeroH2 = styled.h2`
    color: black;
    font-size: 48px;
    text-align: left;
    padding: 5px;
    display: none;
    font-family: 'Comfortaa', cursive;


@media screen and (max-width: 780px) {
    display: block;
    font-size: 36px;
    text-align: center;
}

@media screen and (max-width: 480px){
    font-size: 24px;
}
`

export const HeroP = styled.p`
        display: none; 
@media screen and (max-width: 780px){
    display: block;    
        color: #fff;
        font-size: 24px;
    }
@media screen and (max-width: 768px) {
    font-size: 24px;
}

@media screen and (max-width: 480px){
    font-size: 18px;
}
`