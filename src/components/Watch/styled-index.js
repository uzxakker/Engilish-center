import styled from "styled-components";

export const WrapperWatch = styled.div`
  /* background-color: #ffb525; */
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 25px;
  }
  @media screen and (max-width: 755px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
  }
  p {
    margin: 0 auto;
    /* width: 70%; */
    font-size: 30px;
    font-weight: bold;
    color: white;
    @media screen and (max-width: 1000px) {
      font-size: 20px !important;
    }
    @media screen and (max-width: 768px) {
      font-size: 25px !important;
      text-align: start;
    }
    @media screen and (max-width: 425px) {
      font-size: 20px !important;
      width: 100%;
      text-align: start;
    }
  }

  img {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 400px;
      height: 300px;
    }
  }
  /* .tv-img {
    width: 300px;
    height: 200px;
  } */
  button {
    background-image: linear-gradient(
      180deg,
      rgba(190, 142, 251, 255) 0%,
      rgba(141, 95, 201, 255) 50%
    );
    padding: 10px 20px;
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    margin-top: 5%;
    font-size: 20px;
  }

  .texts {
    @media screen and (max-width: 425px) {
      padding: 0 20px;
    }
    @media screen and (max-width: 375px) {
      padding: 0;
    }
    @media screen and (max-width: 320px) {
      padding: 0;
    }
  }
`;
