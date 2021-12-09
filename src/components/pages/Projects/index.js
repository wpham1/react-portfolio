import React from 'react'
import { ProjectsContainer, ProjectsHeading, ProjectWrapper, Column1, Column2, TextWrapper, Heading, Subtitle, ImgWrap, Img, WebLink, Icon } from './ProjectsElements'
import {TiArrowForward} from 'react-icons/ti'


const Projects = ({id, img, alt, heading, description, html, webtext}) => {
    return (
        <ProjectsContainer id={id} id="projects">
            <ProjectsHeading>Projects</ProjectsHeading>
            <ProjectWrapper>
                <Column1>
                    <TextWrapper>
                     <Heading >{heading}</Heading>
                     <Subtitle>{description}</Subtitle>
                     <WebLink href={html} target="_blank">{webtext} 
                     <Icon>
                         <TiArrowForward/>
                     </Icon>
                     </WebLink>
                    </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                    <Img src={img} alt={alt}/>
                </ImgWrap>
                </Column2>
            </ProjectWrapper>
        </ProjectsContainer>
    )
}

export default Projects
