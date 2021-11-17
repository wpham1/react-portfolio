import styled from 'styled-components'

export const AboutContainer = styled.div`
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    height: 100vh;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 780px){
        height: 90vh;
    }

    `

export const AboutContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 20px 20px;
    grid-template-areas: 
    "header header image"
    "text text image"
    ;


    @media screen and (max-width: 480px){
    display: flex;
    flex-direction: column;
}

`

export const AboutH1 = styled.h1`
    color: black;
    font-size: 48px;
    text-align: left;
    grid-area: header;


@media screen and (max-width: 768px) {
    font-size: 40px;
    text-align: left;
}

@media screen and (max-width: 480px){
    font-size: 32px;
}

`
export const AboutP = styled.p`
    display: block;    
        color: black;
        font-size: 24px;
        grid-area: text;
        font-family: 'Source Sans Pro', sans-serif;
    
@media screen and (max-width: 768px) {
    font-size: 18px;
}

@media screen and (max-width: 480px){
    font-size: 16px;
}
`

export const AboutImageWrapper = styled.div`
    background-color: red;
    width: 250px;
    height: 250px;
    border-radius: 250px;
    grid-area: image;
    justify-self: center;
    align-self: center;
    
    @media screen and (max-width: 768px) {
        width: 150px;
    height: 150px;
}

@media screen and (max-width: 480px){
    width: 100px;
    height: 100px;
    border-radius: 20px;
}
`


export const AboutImage = styled.img`
    display: none;
`