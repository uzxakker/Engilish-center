import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    font-family: "Fredoka", sans-serif !important;
}
html{
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

/* * {
  cursor: none;
} */
 body {
    margin: 0 ;
    padding: 0;
    font-family: "Fredoka", sans-serif !important;
    background-color: #51A3FE;
    /* background-image: linear-gradient(90deg, rgba(255,149,25,1) 0%, rgba(244,63,84,1) 100%); */
    /* background-color: #FF3CAC;
background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%); */

    /* background: linear-gradient(60deg, rgba(156,237,86,255) 0%, #bf8ffd 25%, rgba(0,212,255,1) 100%); */
    /* background: #bf8ffd; */
    /* background: #654ea3;
  background: -webkit-linear-gradient(to right, #654ea3, #eaafc8); 
  background: linear-gradient(to right, #654ea3, #eaafc8); */
    border-color: transparent;
    background-attachment: fixed;

    /* @media screen and (max-width: 768px) {
     padding: 0 20px;
  } */

    @keyframes animate {
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}

.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: rgba(133,205,71,255);
  transform-origin: 0%;
 z-index: 10000;
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    /* background: #4e54c8; */
    overflow: hidden;
    z-index:-1;
}
.background li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 19s linear infinite;
}




.background li:nth-child(0) {
    left: 6%;
    width: 139px;
    height: 139px;
    bottom: -139px;
    animation-delay: 1s;
}
.background li:nth-child(1) {
    left: 36%;
    width: 126px;
    height: 126px;
    bottom: -126px;
    animation-delay: 2s;
}
.background li:nth-child(2) {
    left: 54%;
    width: 113px;
    height: 113px;
    bottom: -113px;
    animation-delay: 7s;
}
.background li:nth-child(3) {
    left: 32%;
    width: 171px;
    height: 171px;
    bottom: -171px;
    animation-delay: 7s;
}
.background li:nth-child(4) {
    left: 6%;
    width: 161px;
    height: 161px;
    bottom: -161px;
    animation-delay: 19s;
}
.background li:nth-child(5) {
    left: 29%;
    width: 164px;
    height: 164px;
    bottom: -164px;
    animation-delay: 11s;
}
.background li:nth-child(6) {
    left: 57%;
    width: 131px;
    height: 131px;
    bottom: -131px;
    animation-delay: 2s;
}
.background li:nth-child(7) {
    left: 72%;
    width: 141px;
    height: 141px;
    bottom: -141px;
    animation-delay: 2s;
}
.background li:nth-child(8) {
    left: 48%;
    width: 180px;
    height: 180px;
    bottom: -180px;
    animation-delay: 26s;
}
.background li:nth-child(9) {
    left: 44%;
    width: 154px;
    height: 154px;
    bottom: -154px;
    animation-delay: 12s;
}
  }
  ul,ol{
  list-style: none;
  }
`;

export const WrapperContainer = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
`;

export const Div = styled.div`
  overflow: hidden;
  z-index: 0;

 

  .cursor {
    background-color: #fff;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 10;
  }

  /* .teacherss{
    background-color: #51A3FE;
    background-attachment: fixed;
  }
  .onlines{
    background-color: #bf8ffd;
  } */
`;
