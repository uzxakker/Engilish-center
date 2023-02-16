import styled from "styled-components";
import BackImg from "../../../assets/hero/yer5.gif";
import EarthGif from "../../../assets/hero/yer.gif";

export const Wrapper = styled.div`
  z-index: 999999999;
  padding: 90px 0 200px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: white;
  /* background-image: url(${BackImg});
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: right;
  animation: gift 0.5s infinite; */

  @media screen and (max-width: 630px) {
    background-position-y: bottom;
    background-position-x: center;
  }

  .edulink {
    /* color: rgba(156, 237, 86, 255); */
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    text-decoration: underline;
  }
  .texts {
    width: 40%;
    @media screen and (max-width: 1024px) {
      padding: 0 25px;
    }

    @media screen and (max-width: 768px) {
      padding: 0 25px;
    }

    @media screen and (max-width: 425px) {
      padding: 0 15px;
    }
    @media screen and (max-width: 1000px) {
      width: 60%;
    }
    @media screen and (max-width: 805px) {
      width: 80%;
    }
    @media screen and (max-width: 630px) {
      width: 100%;
      text-align: center;
      p {
        font-size: 17px !important;
      }
    }
    @media screen and (max-width: 375px) {
      width: 100%;
      text-align: center;
      p {
        font-size: 14px !important;
        font-weight: 500;
      }
    }
    h2 {
      font-size: 45px;
      padding: 0;
      margin: 0;
      margin-top: 15px;

      @media screen and (max-width: 375px) {
        font-size: 31px;
      }
    }
    .subtext {
      font-weight: 700;
      padding-top: 5px;
      line-height: 25px;
    }
    @media screen and (max-width: 375px) {
      width: 100%;
      text-align: center;
      .subtext {
        font-weight: 500;
      }
    }
    p {
      font-size: 19px;
    }
    ul {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      @media screen and (max-width: 630px) {
        text-align: center;
      }
      @media screen and (max-width: 365px) {
        p {
          font-size: 13px !important;
        }
      }
      li {
        margin: 0;
        padding: 0;
        h3 {
          font-size: 18px;
          margin: 0;
        }
        p {
          margin: 0;
        }
      }
      li:nth-child(1) {
        width: 40%;
      }
    }
  }
  /* img {
    width: 90%;
    } */
`;

export const Top = styled.div`
  height: 170px;
`;
