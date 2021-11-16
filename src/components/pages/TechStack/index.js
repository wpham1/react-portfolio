import React from 'react'
import { TechStackContainer, TechHeading, TechContent, TechCard, TechTitle, TechIcons, TechLinks ,TechText } from './TechStackElements'
import { FaHtml5, FaReact } from 'react-icons/fa'
import {DiRubyRough} from 'react-icons/di'
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io'
import { SiRubyonrails } from 'react-icons/si'
import { TiHtml5 } from 'react-icons/ti'

const TechStack = () => {
    return (
        <TechStackContainer>
            <TechHeading>Tech Stack</TechHeading>
            <TechContent>
                <TechCard>
                    <TechTitle>Languages</TechTitle>
                    <TechIcons>
                        <TechLinks>
                            <TiHtml5/>
                        </TechLinks>
                        <TechLinks>
                        <IoLogoCss3/>
                        </TechLinks>
                        <TechLinks>
                            <DiRubyRough/>
                        </TechLinks>
                        <TechLinks>
                            <IoLogoJavascript/>
                        </TechLinks>
                    </TechIcons>
                </TechCard>               
                <TechCard>
                    <TechTitle>Frameworks</TechTitle>
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
                    <TechTitle>Design Tools</TechTitle>
                    <TechIcons>
                        <TechLinks>
                            <FaHtml5/>
                        </TechLinks>
                        <TechLinks>
                        <FaHtml5/>
                        </TechLinks>
                        <TechLinks>
                            <DiRubyRough/>
                        </TechLinks>
                        <TechLinks>
                            <IoLogoJavascript/>
                        </TechLinks>
                    </TechIcons>
                </TechCard>               
            </TechContent>
        </TechStackContainer>
    )
}

export default TechStack
