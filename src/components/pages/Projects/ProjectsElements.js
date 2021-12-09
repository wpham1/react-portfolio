import styled from "styled-components";
import { motion } from "framer-motion"



export const ProjectsContainer = styled.div`
    min-height: 90vh;
    max-height: auto;
    max-width: 100%;
    background-color: #36383c;
    background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23d77272' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 0 20px;
    position: relative;
    z-index: 1;
 
    
`

export const ProjectsHeading = styled.h1`
    color: white;
    font-size: 48px;
    margin-bottom: -18px;
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
    `

export const ProjectWrapper = styled.div`
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%235981ee' fill-opacity='0.11'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
    display: grid;
    width: 100%;
    margin: 30px;
    padding: 0px 20px;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    border-radius: 20px;
    grid-template-areas: "col1 col2";

    @media screen and (max-width: 700px){
        display: flex;
        flex-flow: column wrap;
    }
    @media screen and (min-width: 1000px){
        font-size: 32px;
        max-width: 1200px;
    }

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
    padding-bottom: 0px;
    display: flex;
    flex-flow: column wrap;
    word-wrap: break-word;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: rgba(51, 77, 153, 1);
    @media screen and (max-width: 480px){
        font-size: 24px;
    }

`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    @media screen and (max-width: 768px) {
    font-size: 18px;
}

@media screen and (max-width: 480px){
    font-size: 16px;
    line-height: 1.6;
}
`

export const WebLink = styled(motion.a)`
    font-size: 18px;
    color: white;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    padding: 10px;
    background-color: rgba(51, 77, 153, 1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(255, 255, 255, 0.25);
    border-radius: 40px;

    &:hover {
        background-color: rgba(35, 50, 95, 0.9);
    }
    @media screen and (max-width: 480px){
        font-size: 14px;
    }
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const Icon = styled.i`
    font-size: 17px;
    margin-left: 10px;
`

