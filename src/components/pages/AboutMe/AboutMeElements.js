import styled from 'styled-components'

export const AboutContainer = styled.div`
background-color: #f7faff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%2332568c' fill-opacity='0.06' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");
justify-content: center;
    align-items: center;
    padding: 0 50px;
    height: 100%;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 780px){
        /* height: 90vh; */
    }

    `

export const AboutContent = styled.div`
    display: grid;
    padding: 30px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 20px 20px;
    grid-template-areas: 
    "header header image"
    "text text image"
    ;


    @media screen and (max-width: 780px){
    display: flex;
    flex-direction: column;
}

`

export const AboutH1 = styled.h1`
    color: rgba(51, 77, 153, 1);
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
        color: rgba(51, 77, 153, 1);
        text-shadow: 0px 0px 4px white;
        font-size: 24px;
        grid-area: text;
        font-family: 'Source Sans Pro', sans-serif;
        white-space: pre-line;
        line-height: 1.3;
    /* background-color: rgba(255, 255, 255, 0.5); */
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