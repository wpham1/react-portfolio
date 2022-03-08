import React from 'react'
import { AboutContainer, AboutContent, AboutH1, AboutP, AboutImage, AboutImageWrapper } from './AboutMeElements'
import Photo from '../../../images/yaboi.jpg'

const AboutMe = () => {
    return (
        <AboutContainer id="about">
            <AboutContent>
                <AboutH1>About Me</AboutH1>
                <AboutP>Howdy! I'm Walter Pham, animation enthusiast and coding padawan.
                {"\n"} In the last year I've completed an intensive 10-month Web Developer bootcamp and a 6-week internship at Tanda. 
                {"\n"} I'm currently a Junior Web Developer at etrainu and accepting opportunities to grow as a Front End Developer and UI/UX Designer.
                {"\n"} I've got a background in games and animation and am passionate about design and motion that can make people feel good.
                {"\n"} I love collaborating on projects and working with people to create fun, exciting experiences and absolutely love designing in Figma. 
                {"\n"} Feel free to reach out to talk Animation and Design!  
                </AboutP>
                <AboutImageWrapper>
                    <AboutImage src={Photo}/>
                </AboutImageWrapper>
            </AboutContent>
        </AboutContainer>
    )
}

export default AboutMe
