import styled from "styled-components";
import courseImg from "../../assets/hero/registration-bg.png.webp";

export const Cards = styled.div``;

export const Card = styled.div`
  /* background-color: #a8d1fe; */
  background-color: transparent;
  backdrop-filter: blur(20px);
  box-shadow: 0px 0px 10px 2px #fff;
  margin-bottom: 100px;
  padding: 80px 20px 20px 20px;
  border-radius: 10px;
  position: relative;
  .white-p{
    color: #fff;
  }

  .posImg {
    position: absolute;
    bottom: 78%;
    @media screen and (max-width: 500px) {
      bottom: 80%;
    }
    @media screen and (max-width: 400px) {
      bottom: 82%;
    }
  }
  .Subtext {
    background-image: linear-gradient(
      180deg,
      rgba(95, 168, 33, 255) 0%,
      rgba(133, 205, 71, 255) 100%
    );
    font-size: 20px;
    color: white;
    border: none;
    padding: 7px 20px;
    border-radius: 10px;
  }
  .littleCol {
    background-color: #d3e8ff;
    padding: 5px 15px;
    border-radius: 10px;
    position: relative;

    img {
      position: absolute;
      bottom: 77%;
      left: 90%;
      @media screen and (max-width: 400px) {
        left: 85%;
        bottom: 83%;
      }
    }
  }
`;

export const WrapperCourse = styled.div`
  background: url(${courseImg}) no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
  background-position: center center;
  /* max-height: 1200px; */
  /* background-color: #51a3fe; */
  /* background-image: linear-gradient(180deg, rgba(81,163,254,0) 0%, rgba(81,163,254,1) 84%) */
`;

export const Wrapper = styled.div`
  .course-title {
    margin: 0;
    text-align: center;
    color: white;
    padding: 100px 0px;
    font-size: 40px;
    font-weight: bold;
    @media screen and (max-width: 425px) {
      font-size: 29px;
      width: 90%;
      margin: 0 auto;
    }
  }

  .div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Butto {
    /* width: 260px; */
    margin: 0 auto;
  }
  padding-bottom: 50px;
`;
