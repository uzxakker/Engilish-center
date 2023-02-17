import styled from "styled-components";

export const WrapperTeachers = styled.div`
  padding: 50px 0;
`;

export const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }

  .before-div {
    position: absolute;
    width: 300px;
    height: 300px;
    background-color: rgba(156, 237, 86, 255);
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
    background: linear-gradient(180deg, rgba(191,143,253,1) 0%, rgba(141,95,201,1) 100%);
    top: 25%;
    left: 35%;
    z-index: -1;
    border-radius: 54% 46% 53% 47% / 39% 42% 58% 61%;
    transform: rotate(45deg);
  }

  .after-div {
    position: absolute;
    width: 300px;
    height: 300px;
    background-color: rgba(255, 149, 25, 1);
    top: 10px;
    right: 10px;
    z-index: -1;
    border-radius: 10px;
    border-radius: 54% 46% 53% 47% / 39% 42% 58% 61%;
    /* clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); */
    transform: rotate(105deg);
    transform-origin: bottom;
  }

  .col1 {
    @media screen and (max-width: 768px) {
        margin-bottom: 272px;
    }
  }
  h2 {
    margin: 0;
    color: white;
    text-align: center;
    font-size: 40px;
    padding: 3% 0%;
  }
  .teacher-title {
    color: #fff;
    text-align: center;
    font-size: 40px;
    margin-bottom: 90px;

    @media screen and (max-width: 768px) {
      margin-bottom: 0;
    }

    @media screen and (max-width: 425px) {
      margin-bottom: 0;
    }

    @media screen and (max-width: 375px) {
      margin-bottom: 0;
      font-size: 31px;
    }
    @media screen and (max-width: 320px) {
      margin-bottom: 0;
      font-size: 25px;
    }
  }

  .row {
    padding-top: 280px !important;

    @media screen and (max-width: 1024px) {
      margin: 0 !important;
    }
  }
  /* width: 500px; */
  .card {
    font-size: 14px;
    width: 350px;
    height: 500px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 20px;
    box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
      0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
      0 0 16px hsl(0deg 0% 0% / 0.075);
    @media screen and (max-width: 440px) {
      width: 2 50px !important;
    }
  }

  .card-container:nth-child(2) {
    margin-top: 10%;
  }

  .card-container {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-top: 20px;
    width: 50%;
    height: 100%;

    @media screen and (max-width: 1065px) {
      width: 500px !important;
    }
    @media screen and (max-width: 520px) {
      width: 100% !important;
    }

    img {
      width: 200px;
      transform: rotate(-10deg);
      @media screen and (max-width: 440px) {
        width: 150px !important;
      }
    }
  }
  .cards {
    /* width: 100%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5% 0;
    @media screen and (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .splash {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 15%;
    clip-path: path(
      "M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z"
    );
  }
`;
