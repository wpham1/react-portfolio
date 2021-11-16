import styled from "styled-components"

export const TechStackContainer = styled.div`
    background-color: coral;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 100%;
    max-width: 100%;
    position: relative;
    z-index: 1;


`
export const TechHeading = styled.h1`
    color: black;
    font-size: 48px;
`
export const TechContent = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background-color: blue;
    padding: 20px;
    width: 100%;

`

export const TechCard = styled.div`
    height: 200px;
    width: 300px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.21) ;
    display: flex;
    flex-flow: column wrap;
    /* margin: 10px; */
    @media screen and (max-width: 1050px){
    width: 250px;
    }
`
export const TechIcons = styled.div`

display: flex;
flex-flow: row wrap;
 justify-content: space-around;
 padding: 10px;
 gap: 0px 10px;
 background-color: red;
`

export const TechTitle = styled.h2`
    font-size: 24px;
    text-align: center;
    color: black;
`
export const TechLinks = styled.div`
    color: black;
    border: 2px solid black;
    border-radius: 50px;
    font-size: 40px;
    width: 55px;
    height: 55px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: teal;
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