import styled from "styled-components"
import { motion } from "framer-motion"


export const TechStackContainer = styled.div`
    background: rgb(238,174,202);
background: linear-gradient(0deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
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
    overflow-y: hidden;


`
export const TechHeading = styled.h1`
    color: white;
    font-size: 48px;
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
    background-color: white;
    border-radius: 20px;
    outline: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.21) ;
    margin: 20px;
    justify-content: center;


    @media screen and (max-width: 1050px){
    width: 250px;
    }
`
export const TechIcons = styled(motion.div)`

display: flex;
flex-flow: row wrap;
 justify-content: space-around;
 padding: 10px;
 gap: 0px 20px;
 /* background-color: red; */
`

export const TechTitle = styled.h2`
    font-size: 30px;
    text-align: center;
    color: #34649e;
    font-family: 'Source Sans Pro', sans-serif; 
`
export const TechLinks = styled(motion.div)`
    color: #f28db9;
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
    /* &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    } */
`    

export const TechText = styled.p`
    color: white;
    font-size: 20px;
    background-color: green;
    text-align: center;
    display: inline-block;
`