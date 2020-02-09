import styled from 'styled-components';
import Button from 'components/UI/Button';
import colors from 'tokens/colors.mjs';

const style = styled.div`
  color: white;

  font-family: Ubuntu, sans-serif;

  .backgroundImg-wrapper {
    width: 100%;
    height: 679px;
    position: absolute;
    background-color: ${colors.impactful};
    z-index: 1;
    max-width: 1440px;
    left: auto;
  }
  @media only screen and (max-width: 1024px) {
    .backgroundImg-wrapper {
      left: 0;
    }
  }
  .img {
    left: 7%;
    position: relative;
    top: 13%;
  }
  @media only screen and (max-width: 1024px) {
    .img {
      left: 10%;
      position: relative;
      top: 20px;
      width: 75%;
    }
  }

  .textwrapper {
    position: absolute;
    top: 120px;
    width: 39%;
    height: 379px;
    z-index: 1;
    left: 55%;
    text-align: right;
  }
  @media only screen and (max-width: 1024px) {
    .textwrapper {
      position: relative;
      top: 20%;
      left: 0%;
      width: 100%;
      z-index: 1;
      text-align: center;
      padding: 0 5% 0 5%;
    }
  }

  .slogan {
    position: absolute;
    margin: 0px 0px 0px 0px;
    font-weight: normal;
    font-style: normal;
    font-size: 50px;
    line-height: 57px;
    color: ${colors.mainGreen};
  }
  @media only screen and (max-width: 1405px) {
    .slogan {
      font-size: 49px;
    }
  }
  @media only screen and (max-width: 1378px) {
    .slogan {
      font-size: 48px;
    }
  }
  @media only screen and (max-width: 1349px) {
    .slogan {
      font-size: 47px;
    }
  }
  @media only screen and (max-width: 1321px) {
    .slogan {
      font-size: 46px;
    }
  }
  @media only screen and (max-width: 1293px) {
    .slogan {
      font-size: 45px;
    }
  }
  @media only screen and (max-width: 1265px) {
    .slogan {
      font-size: 37px;
    }
  }
  @media only screen and (max-width: 1024px) {
    .slogan {
      font-size: 18px;
      line-height: 20px;
    }
  }
  .text {
    color: ${colors.white};
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin: 0;
  }
  @media only screen and (max-width: 1024px) {
    .text {
      font-size: 14px;
    }
  }
  .text.description {
    top: 140px;
  }
  @media only screen and (max-width: 1024px) {
    .text.description {
      font-size: 14px;
      top: 10%;
      border: none;
    }
  }
  .btn {
    position: relative;
    width: 252.81px;
    border: solid white;
    border-radius: 8px;
    text-align: center;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    height: 60px;
    top: 180px;
    line-height: 50px;
    left: 0px;
    background-color: ${colors.impactful};
    font-size: 18px;
  }
  @media only screen and (max-width: 1024px) {
    .btn {
      font-size: 14px;
      top: 50px;
    }
  }
  .exitbtn {
    position: relative;
    z-index: 3;
    top: -155px;
    width: 40px;
    height: 40px;
    left: -187px;
    background-color: white;
    text-decoration: none;
    color: black !important;
    font-size: 30px;
  }
  @media only screen and (max-width: 1024px) {
    .exitbtn {
      top: -460px;
      width: 25px;
      height: 26px;
      left: -184px;
      font-size: 14px;
      line-height: 0;
    }
  }
`;

export default style;
