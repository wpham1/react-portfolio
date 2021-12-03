import React from 'react'
import { HeroContainer, HeroContent, ImgWrapper, HeroH2, HeroBg, CircleText, Sticker, GraphPaper } from './HeroElements'
import { motion } from "framer-motion"
import Sticker2 from "../../../images/hello-stickerwalter.svg"
import TextCircle from "../../../images/circle-text.svg"
import { BsEmojiSunglasses } from 'react-icons/bs'


const HeroSection = () => {
    return (
        <>
        <HeroContainer>
            <HeroBg>
                <GraphPaper/>
                <BsEmojiSunglasses />
            </HeroBg>
            <HeroContent>
                <ImgWrapper><Sticker src={Sticker2}/></ImgWrapper>
                <ImgWrapper><CircleText src={TextCircle}/></ImgWrapper>
                 <HeroH2>Full Stack Fledgling with a Front-end Focus</HeroH2>
            </HeroContent>
        </HeroContainer>
        </>
    )
}

export default HeroSection
