import styled from "styled-components";

export const ProjectsContainer = styled.div`
    min-height: 90vh;
    max-height: auto;
    max-width: 100%;
    background: rgb(238,174,202);
    background: linear-gradient(0deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 0 20px;
    position: relative;
    z-index: 1;
    /* overflow-y: hidden; */
    
`

export const ProjectsHeading = styled.h1`
    color: white;
    font-size: 48px;
    `

export const ProjectWrapper = styled.div`
    background-color: red;
    display: grid;
    width: 100%;
    padding: 0px 20px;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: "col1 col2";
    /* grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2`)}
    } */
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
display: flex;
flex-flow: column wrap;
word-wrap: break-word;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    /* color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')}; */

    @media screen and (max-width: 480px){
        font-size: 32px;
    }

`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    /* color: ${({darkText}) => (darkText ? '#010606' : "#fff")}; */
`