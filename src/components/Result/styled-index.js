import styled from "styled-components";

export const WrapperResult = styled.div`
  /* background-color: #bf8ffd; */
`;

export const Wrapper = styled.div`
  padding: 5% 0%;

  
  h2 {
    margin: 0;
    color: white;
    font-size: 45px;
    font-weight: bold;
    width: 60%;

    @media screen and (max-width: 1024px) {
      width: 100%;
      text-align: center;
    }

    

    @media screen and (max-width: 980px) {
      width: 100%;
    }
    @media screen and (max-width: 610px) {
      font-size: 30px;
    }
    @media screen and (max-width: 400px) {
      font-size: 20px;
    }

    @media screen and (max-width: 425px) {
      width: 90%;
      margin: 0 auto;
    }
  }
  .Cards {
    .card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #ffffff;
      margin-top: 5%;
      padding: 10px 20px;
      border-radius: 20px;
      img {
        width: 70px;
      }
      p {
        padding-left: 3%;
        font-size: 19px;
        line-height: 25px;

        span {
          font-weight: bold;
        }
      }
    }
  }
  .button {
    margin-top: 5%;
    .btn {
      margin: 0 auto;
      width: 255px;
    }
  }
`;

export const Card = styled.div`
  background-color: #a8d1fe;
  margin: 140px 0 50px;
  padding: 30px 20px 20px;
  border-radius: 10px;
  /* position: relative; */
  .texts {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    font-size: 18px;
  }
  .headr {
    position: relative !important;
    /* border: 1px solid black; */
    width: 200px;
    height: 50px;
    margin-left: auto;
  }
  .video {
    /* position: absolute; */
    img {
      position: absolute;
      bottom: -100%;
      /* bottom : 0; */
      left: -10%;
      right: 10%;
      width: 310px;
      height: 300px;
    }
    i {
      font-size: 50px;
      color: white;
      position: absolute;
      top: -130%;
      z-index: 1000;
      right: 39%;
    }
    /* border-radius: 10px; */
    @media screen and (max-width: 500px) {
      bottom: 80%;
    }
    @media screen and (max-width: 400px) {
      bottom: 82%;
    }
  }
`;
