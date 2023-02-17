import styled from "styled-components";

export const WrapperLeave = styled.div`
  /* background-color: #8dd54f; */
`;

export const Wrapper = styled.div`
  padding: 5% 0;
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
      rgba(109, 161, 250, 255) 0%,
      rgba(66, 120, 211, 255) 100%
    );
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(66, 120, 211, 255);
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

  .button {
    .btn {
      width: 280px;
      @media screen and (max-width: 930px) {
        margin: 0 auto;
      }
    }
  }
  h2 {
    margin: 0;
    font-size: 40px;
    @media screen and (max-width: 425px) {
      font-size: 35px;
    }
    @media screen and (max-width: 375px) {
      font-size: 30px;
    }
  }
  p {
    font-size: 19px;
    width: 80%;
    @media screen and (max-width: 425px) {
      font-size: 16px;
    }
    @media screen and (max-width: 375px) {
      font-size: 15px;
    }
  }
  .box {
    background-color: white;
    width: 80%;
    margin: 0 auto;
    padding: 3%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 0px 10px #c6eaa7;
    @media screen and (max-width: 930px) {
      display: flex;
      flex-direction: column-reverse;
      text-align: center;

      p {
        width: 100%;
      }
    }

    img {
      width: 300px;
      @media screen and (max-width: 425px) {
        width: 240px;
      }
    }
    button {
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      /* width: 100%; */
      span {
        background-image: linear-gradient(
          180deg,
          rgba(109, 161, 250, 255) 0%,
          rgba(66, 120, 211, 255) 100%
        );
        padding: 10px 20px;
        text-transform: uppercase;
        color: white;
        font-weight: bold;
        font-size: 20px;
        border-start-end-radius: 10px;
        border-end-end-radius: 10px;
      }
      ion-icon {
        background-image: linear-gradient(
          180deg,
          rgba(109, 161, 250, 255) 0%,
          rgba(66, 120, 211, 255) 100%
        );
        padding: 10px 10px;
        color: white;
        font-size: 23.5px;
        border-start-start-radius: 10px;
        border-end-start-radius: 10px;
      }
    }
  }
`;
