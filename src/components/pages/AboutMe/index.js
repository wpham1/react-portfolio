import React from 'react'
import { AboutContainer, AboutContent, AboutH1, AboutP, AboutImage, AboutImageWrapper } from './AboutMeElements'

const AboutMe = () => {
    return (
        <AboutContainer id="about">
            <AboutContent>
                <AboutH1>About Me</AboutH1>
                <AboutP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially u</AboutP>
                <AboutImageWrapper>
                    <AboutImage/>
                </AboutImageWrapper>
            </AboutContent>
        </AboutContainer>
    )
}

export default AboutMe
