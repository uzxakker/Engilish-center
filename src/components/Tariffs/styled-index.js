import styled from "styled-components";
import tarifImg from "../../assets/hero/video-area-bg.png.webp";

export const WrapperTariffs = styled.div`
  /* background-color: #51a3fe; */
  background: url(${tarifImg}) no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
  background-position: bottom center;
  /* max-height: 1200px; */
`;

export const Wrapper = styled.div`
  padding: 50px 0 150px 0;
  .text {
    margin: 0;
    color: white;
    text-align: center;
    padding: 3% 0%;
    font-size: 40px;
    @media screen and (max-width: 375px) {
      padding: 20px 0  50px  0;
    }
    @media screen and (max-width: 320px) {
      margin-bottom: 40px;
      font-size: 28px;
    }
  }
  img {
    width: 200px;
    border-radius: 50%;
  }
  .card {
    background-color: transparent;
    backdrop-filter: blur(20px);
    padding: 5%;
    border-radius: 30px;
    margin-top: 5%;
    text-align: center;
    box-shadow: 0px 0px 10px 2px #fff;
    z-index: 1;
    .card-text {
      background-image: linear-gradient(
        180deg,
        rgba(156, 237, 86, 255) 0%,
        rgba(85, 151, 26, 255) 100%
      );
      padding: 10px 20px;
      font-size: 25px;
      font-weight: bold;
      border: none;
      border-radius: 20px;
      margin: 5% 0% 3%;
      color: white;
    }

    .card-text2 {
      background-image: linear-gradient(
        180deg,
        rgba(190, 142, 251, 255) 0%,
        rgba(141, 95, 201, 255) 50%
      );
      padding: 10px 20px;
      font-size: 25px;
      font-weight: bold;
      border: none;
      border-radius: 20px;
      margin: 5% 0% 3%;
      color: white;
    }
    .card-text3 {
      background-image: linear-gradient(
        180deg,
        rgba(253, 179, 35, 255) 0%,
        rgba(218, 144, 1, 255) 50%
      );
      padding: 10px 20px;
      font-size: 25px;
      font-weight: bold;
      border: none;
      border-radius: 20px;
      margin: 5% 0% 3%;
      color: white;
    }
    .card-subtext {
      margin: 0 0 4%;
    }
    ul {
      text-align: start;
      padding: 0;
    }
    .button {
      .btn {
        margin: 0 auto;
        /* width: 258px; */
      }
    }
  }

  .col,
  .col1,
  .wrappers {
    position: relative;
    z-index: 1;
  }

  .before-div {
    position: absolute;
    width: 350px;
    height: 350px;
    background-color: rgba(244, 63, 84, 1);
    top: -35px;
    left: -80px;
    z-index: -1;
    border-radius: 54% 46% 53% 47% / 39% 42% 58% 61%;
    transform: rotate(45deg);
  }

  .center-div {
    position: absolute;
    width: 500px;
    height: 500px;
    background-color: rgba(244, 63, 84, 1);
    top: 25%;
    left: 35%;
    z-index: -1;
    border-radius: 54% 46% 53% 47% / 39% 42% 58% 61%;
    transform: rotate(45deg);
  }

  .after-div {
    position: absolute;
    width: 350px;
    height: 350px;
    background-color: rgba(255, 149, 25, 1);
    top: 400px;
    right: 10px;
    z-index: -1;
    border-radius: 54% 46% 53% 47% / 39% 42% 58% 61%;
    transform: rotate(45deg);
    transform-origin: bottom;
  }
  /* .card:nth-child(2)::before{
    position: absolute;
    content: '';
    width: 100px;
    height: 100px;
    background-color: rgba(255,149,25,1);
    top: -10px;
    right: -10px;
    z-index: -1;
    border-radius: 10px;
  } */
`;
