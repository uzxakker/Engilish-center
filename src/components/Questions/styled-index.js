import styled from "styled-components";

export const WrapperQuestions = styled.div`
  /* background-color: #8dd54f; */
`;

export const Wrapper = styled.div`
  padding: 5% 0;

  @media screen and (max-width: 1024px) {
    padding: 5% 3%;
  }
  @media screen and (max-width: 768px) {
    padding: 5% 3%;
  }
  .text {
    margin: 0;
    color: white;
    text-align: center;
    font-size: 40px;
    color: #fff;
    @media screen and (max-width: 425px) {
      font-size: 30px;
      margin-bottom: 20px;
    }
  }

  .accordion {
    /* background-image: linear-gradient(90deg, rgba(255,149,25,1) 0%, rgba(244,63,84,1) 100%); */
    background: rgba(133, 205, 71, 255);
    /* backdrop-filter: blur(10px); */
  }

  .acords {
    @media screen and (max-width: 425px) {
      margin-top: 30px;
    }
  }

  .css-1elwnq4-MuiPaper-root-MuiAccordion-root:before {
    height: 0 !important;
  }
  .subtext {
    color: white;
    margin: 1% 0 0;
    text-align: center;
    margin-bottom: 3%;
  }

  .s {
    h2 {
      @media screen and (max-width: 425px) {
        font-size: 20px;
      }
      @media screen and (max-width: 320px) {
        font-size: 18px;
      }
    }
  }
`;
