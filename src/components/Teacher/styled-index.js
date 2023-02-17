import styled from "styled-components";

export const WrapperTeacher = styled.div`
  /* background-color: #8dd54f; */
`;

export const Wrapper = styled.div`
  padding: 50px 0;

  @media screen and (max-width: 425px) {
    .row {
      margin: 0 !important;
    }
  }

  @media screen and (max-width: 1024px) {
    .row {
      margin: 0 !important;
    }
  }

  @media screen and (max-width: 375px) {
    .row {
      margin: 0 !important;
    }
  }

  @media screen and (max-width: 320px) {
    .row {
      margin: 0 !important;
    }
  }

  .card:hover {
    transition: all 0.65s;
    transform: scale(1.1);
  }
  .card:focus {
    transition: all 0.65s;
    transform: scale(1.1);
  }

  .teacher-title {
    color: #fff;
    text-align: center;
    font-size: 40px;
    margin-bottom: 90px;

    @media screen and (max-width: 375px) {
      margin-bottom: 40px;
      font-size: 31px;
    }
    @media screen and (max-width: 320px) {
      margin-bottom: 40px;
      font-size: 25px;
    }
  }

  .contents {
    h4 {
      margin-bottom: 0;
    }
    p {
      margin-top: 10px;
    }
  }

  .content-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content-box {
    h2,
    h4,
    p {
      color: #fff;
    }
    h2 {
      margin-top: 0;
      font-size: 36px;
      font-weight: 500;
      @media screen and (max-width: 375px) {
        margin-bottom: 40px;
        font-size: 26px;
      }
      @media screen and (max-width: 320px) {
        margin-bottom: 40px;
        font-size: 22px;
      }
    }

    h4 {
      font-size: 18px;
      font-weight: 500;
      @media screen and (max-width: 375px) {
        font-size: 16px;
      }
      @media screen and (max-width: 320px) {
        font-size: 14px;
      }
    }
    p {
      font-size: 16px;
      @media screen and (max-width: 375px) {
        font-size: 15px;
      }
      @media screen and (max-width: 320px) {
        font-size: 14px;
      }
    }
  }
  .img-boxs {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      margin-top: 40px;
    }

    img {
      border-radius: 10px;
      margin: 0 auto;
      height: 500px;
    }
  }
  /* ant tab css */
  .ant-tabs-nav {
    margin: 0 0 26px 0 !important;
  }
  .ant-tabs-nav-list {
    margin: 0 auto !important;
  }
  .ant-tabs-tab {
    margin: 0 !important;
    padding: 14px 30px !important;
  }

  .ant-tabs-tab-active .tab-img {
    width: 85px;
    height: 85px;
    object-fit: cover;
    border: 2px solid rgba(141,213,79,1);
    border-radius: 50%;
  }
  .ant-tabs-nav::before {
    border: none !important;
  }
  /* ant tab css */
`;
