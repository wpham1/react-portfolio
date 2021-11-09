import styled from "styled-components";
export const ParticleContainer = styled.div`
    display: flex;
    height: 800px;
    width: 100%;
    background-color: rgba(255,255,255,0.0);
`

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;


    @media screen and (max-width: 780px){
        height: 500px;
    }

    `

export const HeroBg = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const GradientBg = styled.div`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: linear-gradient(317deg, #18a7eb, #eb275e);
    background-size: 400% 400%;
    -webkit-animation: AnimationName 37s ease infinite;
    -moz-animation: AnimationName 37s ease infinite;
    animation: AnimationName 37s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:0% 84%}
    50%{background-position:100% 17%}
    100%{background-position:0% 84%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 84%}
    50%{background-position:100% 17%}
    100%{background-position:0% 84%}
}
@keyframes AnimationName {
    0%{background-position:0% 84%}
    50%{background-position:100% 17%}
    100%{background-position:0% 84%}
}
`
export const HeroContent = styled.div`
margin-top: -50px;
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 780px){
    display: block;    
        color: #fff;
        font-size: 24px;
    }
`

export const HeroH1 = styled.h1`
color: #fff;
font-size: 48px;
text-align: center;

@media screen and (max-width: 768px) {
    font-size: 40px;
    text-align: left;
}

@media screen and (max-width: 480px){
    font-size: 32px;
}
`
export const HeroH2 = styled.h2`
color: #fff;
font-size: 36px;
text-align: center;

@media screen and (max-width: 768px) {
    font-size: 30px;
    text-align: left;
}

@media screen and (max-width: 480px){
    font-size: 24px;
}
`

export const HeroP = styled.p`
        display: none; 
@media screen and (max-width: 780px){
    display: block;    
        color: #fff;
        font-size: 24px;
    }
@media screen and (max-width: 768px) {
    font-size: 24px;
}

@media screen and (max-width: 480px){
    font-size: 18px;
}
`