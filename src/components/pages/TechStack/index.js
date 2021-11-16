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
        scale: [0.9, 1.1],
        transition: { duration: 0.15 },
      }
    //   const buttonVariants = {
    //     pressed: {
    //       scale: 0.5,
    //     },
    //     rest: {
    //       scale: 1,
    //     },
    //   };



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
          y: 400,
        },
        in: {
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.25,
            damping: 10,
          },
        },
      };
      

    return (
        <TechStackContainer>
            <TechHeading>Tech Stack</TechHeading>
            <TechContent>
                <TechCard variants={boxVariants} initial="out" animate="in" >
                    <TechTitle>LANGUAGES</TechTitle>
                    <TechIcons >
                        <TechLinks 
                        // testa={testa} whileHover={testa}
                        variants={iconVariants}
                        >
                            <TiHtml5/>
                        </TechLinks >
                        <TechLinks  
                        variants={iconVariants}
    //                     initial="rest"
    //   whileHover="hover"
    //   whileTap="pressed"
    //   variants={buttonVariants} 
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
                <TechCard variants={boxVariants} initial="out" animate="in">
                    <TechTitle>FRAMEWORKS</TechTitle>
                    <TechIcons>
                        <TechLinks>
                            <SiRubyonrails/>
                        </TechLinks>
                        <TechLinks>
                        <FaReact/>
                        </TechLinks>
                    </TechIcons>
                </TechCard>               
                <TechCard>
                    <TechTitle>DESIGN TOOLS</TechTitle>
                    <TechIcons>
                        <TechLinks>
                            <FaFigma/>
                        </TechLinks>
                        <TechLinks>
                        <SiAdobe/>
                        </TechLinks>
                        <TechLinks>
                           <FaBootstrap/>
                        </TechLinks>
                        <TechLinks>
                           <FaSass/>
                        </TechLinks>
                        <TechLinks>
                            <SiStyledcomponents/>
                        </TechLinks>
                    </TechIcons>
                </TechCard>               
            </TechContent>
        </TechStackContainer>
    )
}

export default TechStack
