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
  .btn-anime {
    margin-top: 30px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 30px;
    text-align: center;
    font-weight: bold;
    font-size: 26px;
    background: transparent;
    border: none;
    position: relative;
    color: #fff;
    cursor: pointer;
  }

  .btn-anime::before,
  .btn-anime::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  .btn-anime::before {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(190, 142, 251, 255) 0%,
      rgba(141, 95, 201, 255) 50%
    );
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(141, 95, 201, 255);
  }
  .btn-anime::after {
    bottom: -10px;
    right: -10px;
    width: 40px;
    height: 40px;
    background: #ffffff15;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.151);
    border-radius: 50px;
  }

  .btn-anime:hover::before {
    bottom: -7px;
    right: -5px;
    width: 110%;
    height: 110%;
  }
  .btn-anime:hover::after {
    border-radius: 10px;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

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
