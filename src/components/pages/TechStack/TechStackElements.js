import styled from "styled-components"
import { motion } from "framer-motion"


export const TechStackContainer = styled.div`
    background-color: #dbe0e5;
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0C6.716 0 0 6.716 0 15c8.284 0 15-6.716 15-15zM0 15c0 8.284 6.716 15 15 15 0-8.284-6.716-15-15-15zm30 0c0-8.284-6.716-15-15-15 0 8.284 6.716 15 15 15zm0 0c0 8.284-6.716 15-15 15 0-8.284 6.716-15 15-15z' fill='%239492ac' fill-opacity='0.09' fill-rule='evenodd'/%3E%3C/svg%3E");
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    min-height: 90vh;
    /* height: 100vh; */
    max-height: auto;
    max-width: 100%;
    position: relative;
    z-index: 1;
    overflow: hidden;


`
export const TechHeading = styled.h1`
    color: rgba(51, 77, 153, 1);
    font-size: 48px;
    margin-bottom: -15px;
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
    `


export const TechContent = styled(motion.div)`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 20px;
    width: 100%;

`

export const TechCard = styled(motion.div)`
    height: auto;
    width: 300px;
    border-radius: 20px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    margin: 20px;
    justify-content: center;

    @media screen and (max-width: 1050px){
    width: 250px;
    }
    &:hover{
        outline: 2px solid rgba(32, 56, 179, 0.51);
    }
`
export const TechIcons = styled(motion.div)`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 10px;
    gap: 0px 20px;
`

export const TechTitle = styled.h2`
    font-size: 30px;
    text-align: center;
    color: #34649e;
    font-family: 'Source Sans Pro', sans-serif; 
    @media screen and (max-width: 480px){
        font-size: 24px;
    }
`
export const TechLinks = styled(motion.div)`
    color: #34649e;
    border: 1.5px solid rgba(52, 100, 158, 0.6);
    border-radius: 50px;
    font-size: 40px;
    width: 55px;
    height: 55px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    text-align: center;
    align-items: center;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.15) ;
    /* background-color: white; */
    &:hover {
        color: rgba(247, 62, 105, 1);
        transition: 0.3s ease-out;
    }
`    

export const TechText = styled.p`
    color: white;
    font-size: 20px;
    background-color: green;
    text-align: center;
    display: inline-block;
`