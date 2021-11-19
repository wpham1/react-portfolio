import React from 'react'
import { TechStackContainer, TechHeading, TechContent, TechCard, TechTitle, TechIcons, TechLinks ,TechText } from './TechStackElements'
import { FaSass, FaReact, FaFigma, FaBootstrap } from 'react-icons/fa'
import {DiRubyRough} from 'react-icons/di'
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io'
import { SiRubyonrails, SiAdobe, SiStyledcomponents } from 'react-icons/si'
import { TiHtml5 } from 'react-icons/ti'
import { motion } from "framer-motion"


const TechStack = () => {
    const testa = {
        scale: [1, 1.1],
        transition: { duration: 0.15 },
       }

    const boxVariants = {
        out: {
          y: 400,
        },
        in: {
          y: 0,
          transition: {
            duration: 0.6,
            // The first child will appear AFTER the parrent has appeared on the screen
            delayChildren: 0.8,
            // The next sibling will appear 0.5s after the previous one
            staggerChildren: 0.3,
          },
        },
      };
      
      const iconVariants = {
        out: {
          opacity: 0,
          y: 400,
        },
        in: {
          opacity: 100,
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.25,
            damping: 20,
          },
        },
      };
      

    return (
        <TechStackContainer id="tech">
            <TechHeading>Tech Stack</TechHeading>
            <TechContent>
                <TechCard variants={boxVariants} initial="out" animate="in" 
                    testa={testa} whileHover={testa}
>
                    <TechTitle>LANGUAGES</TechTitle>
                    <TechIcons >
                        <TechLinks 
                        variants={iconVariants}
                        >
                            <TiHtml5/>
                        </TechLinks >
                        <TechLinks  
                        variants={iconVariants}
                              >
                        <IoLogoCss3  />
                        </TechLinks>
                        <TechLinks 
                        variants={iconVariants}
                        >
                            <DiRubyRough/>
                        </TechLinks>
                        <TechLinks
                        variants={iconVariants}                        
                        >
                            <IoLogoJavascript/>
                        </TechLinks>
                    </TechIcons>
                </TechCard>               
                <TechCard variants={boxVariants} initial="out" animate="in" 
                    testa={testa} whileHover={testa}>
                    <TechTitle>FRAMEWORKS</TechTitle>
                    <TechIcons>
                        <TechLinks variants={iconVariants}>
                            <SiRubyonrails/>
                        </TechLinks>
                        <TechLinks variants={iconVariants}>
                        <FaReact/>
                        </TechLinks>
                    </TechIcons>
                </TechCard>               
                <TechCard variants={boxVariants} initial="out" animate="in" 
                    testa={testa} whileHover={testa}>
                    <TechTitle>DESIGN TOOLS</TechTitle>
                    <TechIcons>
                        <TechLinks variants={iconVariants}>
                            <FaFigma/>
                        </TechLinks>
                        <TechLinks variants={iconVariants}>
                        <SiAdobe/>
                        </TechLinks>
                        <TechLinks variants={iconVariants}>
                           <FaBootstrap/>
                        </TechLinks>
                        <TechLinks variants={iconVariants}>
                           <FaSass/>
                        </TechLinks>
                        <TechLinks variants={iconVariants}>
                            <SiStyledcomponents/>
                        </TechLinks>
                    </TechIcons>
                </TechCard>               
            </TechContent>
        </TechStackContainer>
    )
}

export default TechStack
