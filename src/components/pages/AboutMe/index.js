import React from 'react'
import { AboutContainer, AboutContent, AboutH1, AboutP, AboutImage, AboutImageWrapper } from './AboutMeElements'

const AboutMe = () => {
    return (
        <AboutContainer id="about">
            <AboutContent>
                <AboutH1>About Me</AboutH1>
                <AboutP>Howdy! I'm Walter Pham, animation enthusiast and coding padawan.
                {"\n"} I'm a junior full-stack web developer keen to take my training wheels off.
                {"\n"} I'm currently a student at Coder Academy and accepting opportunities to grow as a Front End Developer.
                {"\n"} I've got a background in games & animation and love design & motion.
                {"\n"} I love collaborating on projects and working with people to create fun and exciting experiences.               
                </AboutP>
                <AboutImageWrapper>
                    <AboutImage/>
                </AboutImageWrapper>
            </AboutContent>
        </AboutContainer>
    )
}

export default AboutMe
