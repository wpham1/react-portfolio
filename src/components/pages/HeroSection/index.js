import React from 'react'
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroH2, HeroBg, GradientBg, ParticleContainer } from './HeroElements'
import HeroParticles from './HeroParticles'



const HeroSection = () => {
    return (
        <>
        <HeroContainer>
            <HeroBg>
            <HeroParticles/>
                <GradientBg/>
            </HeroBg>
            <HeroContent>
                <HeroP>Howdy, I'm</HeroP>
                
                <HeroH1>Walter Pham</HeroH1>
                <HeroH2>Full Stack Fledgling with a Front-end Focus</HeroH2>
            </HeroContent>
        </HeroContainer>
        </>
    )
}

export default HeroSection
