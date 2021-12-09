import React from 'react'
import { ProjectsContainer, ProjectsHeading, ProjectWrapper, Column1, Column2, TextWrapper, Heading, Subtitle, ImgWrap, Img, WebLink, Icon } from './ProjectsElements'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import { motion } from "framer-motion"


const Projects = ({id, img, alt, heading, description, html, webtext, bigid}) => {

    const btnpress ={
        scale: [1, 1.1],
        transition: { duration: 0.15 },
    }

    return (
        <ProjectsContainer id={id} id="projects">
            <ProjectsHeading>{bigid}</ProjectsHeading>
            <ProjectWrapper>
                <Column1>
                    <TextWrapper>
                     <Heading >{heading}</Heading>
                     <Subtitle>{description}</Subtitle>
                     <WebLink href={html} target="_blank" whileTap={{scale: 0.9}}>{webtext} 
                     <Icon>
                         <BsBoxArrowUpRight/>
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
