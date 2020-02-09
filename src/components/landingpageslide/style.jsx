import styled from 'styled-components';
import colors from 'tokens/colors.mjs';

const style = styled.div`
  color: white;

  font-family: Ubuntu, sans-serif;

  .backgroundImg-wrapper {
    width: 100%;
    height: 679px;
    position: absolute;
    background-color: ${colors.turquoise};
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
    top: 16%;
    position: relative;
    left: 56%;
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
    width: 42%;
    height: 372px;
    top: 184px;
    left: 120px;
    word-wrap: break-word;
    z-index: 1;
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
    text-align: left;
    color: ${colors.mainGreen};
  }
  @media only screen and (max-width: 1363px) {
    .slogan {
      font-size: 49px;
    }
  }
  @media only screen and (max-width: 1335px) {
    .slogan {
      font-size: 48px;
    }
  }
  @media only screen and (max-width: 1307px) {
    .slogan {
      font-size: 47px;
    }
  }
  @media only screen and (max-width: 1280px) {
    .slogan {
      font-size: 46px;
    }
  }
  @media only screen and (max-width: 1259px) {
    .slogan {
      font-size: 39px;
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
    top: 222px;
    line-height: 50px;
    background-color: ${colors.turquoise};
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
    top: -195px;
    width: 40px;
    height: 40px;
    left: 990px;
    background-color: white;
    text-decoration: none;
    color: black !important;
    font-size: 30px;
    border: solid white !important;
  }
  @media only screen and (max-width: 1024px) {
    .exitbtn {
      top: -460px;
      width: 25px;
      height: 26px;
      left: 165px;
      font-size: 14px;
      line-height: 0;
    }
  }
`;

export default style;
