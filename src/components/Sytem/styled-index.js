import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  h2 {
    font-weight: bold;
    margin: 0;
    color: white;
    font-size: 35px;
    margin-bottom: 50px;

    @media screen and (max-width: 375px) {
      font-size: 31px;
    }
    @media screen and (max-width: 320px) {
      font-size: 25px;
    }

    iframe{
      border-radius: 20px;
    }
   

    iframe {
      @media screen and (max-width: 425px) {
        width: 100% !important;
        border-radius: 0 !important;
      }
    }
  }
`;

export const WrapperSystem = styled.div`
  /* background-image: 
  linear-gradient(
      180deg,
      rgba(73, 141, 250, 255) 0%,
      rgba(81, 163, 254, 0) 50%
    ),
    linear-gradient(
      180deg,
      rgba(81, 163, 254, 0) 50%,
      rgba(81, 163, 254, 1) 100%
    ),
    url("https://thumb.tildacdn.com/tild6133-3862-4536-b666-323765353361/-/format/webp/m-monk-E813FON0wDQ-u.png"); */
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: 100%;
  margin: 0;
  padding: 0 0 0 0;
`;
