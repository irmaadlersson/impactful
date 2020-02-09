import styled from 'styled-components';
import colors from 'tokens/colors.mjs';

const style = styled.div`
  font-family: Ubuntu, sans-serif;

  font-size: 14px;
  .popUp-info {
    box-shadow: 5px 10px 18px gray;
    height: auto;
    background-color: white;
    top: 0%;
    position: absolute;
    width: 393px;
    right: 0;
    overflow: hidden;
    z-index: 6;
  }
  @media only screen and (max-width: 768px) {
    .popUp-info {
      width: 100%;
      height: auto;
    }
  }
  .exit {
    left: 92%;
    position: relative;
    color: black;
    font-size: 21px;
  }
  @media only screen and (max-width: 768px) {
    .exit {
      display: none;
    }
  }
  .backBtn {
    position: absolute;
    top: 2%;
    left: 3%;
    z-index: 3;
  }
  @media only screen and (min-width: 768px) {
    .backBtn {
      display: none;
    }
  }
  .img {
    width: 100%;
    position: relative;
  }
  .logo {
    width: 55%;
    position: relative;
    top: 1%;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .h1 {
    color: ${colors.mainGreen};
    position: relative;
    top: 0%;
    width: 75%;
    left: 8%;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }
  @media only screen and (max-width: 768px) {
    .h1 {
      margin-top: 20%;
    }
  }

  .text {
    top: 0%;
    position: relative;
    width: 85%;
    left: 8%;
    font-size: 12px;
  }

  .grayRow {
    background-color: #f6f6f6;
    display: flex;
    height: 4vh;
  }
  .whiteRow {
    background-color: white;
    display: flex;
    height: 4vh;
  }
  .colum1 {
    position: relative;
    left: 10%;
    width: 33%;
    font-weight: 500;
    font-size: 14px;
    margin-top: 2%;
  }
  .colum2 {
    left: 25%;
    position: relative;
    font-size: 14px;
    margin-top: 2%;
  }
  .funded {
    top: 0;
    position: relative;
    width: 85%;
    left: 0%;
    margin-top: 10%;
  }
  .funded-text {
    position: relative;
    left: 8%;
    font-size: 14px;
    margin-bottom: 10%;
  }
  .rating-box {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    width: 82%;
    height: 12vh;
    left: 10%;
    top: 5%;
    position: relative;
  }
  .rating {
    text-transform: uppercase;
    color: #959393;
    font-size: 64px;
    padding-left: 33px;
    margin: 0;
    margin-top: -5%;
  }
  .rating-heading {
    font-size: 18px;
    padding-left: 30px;
    margin: 0;
    font-weight: bold;
  }
  .hr-rating {
    position: relative;
    width: 17%;
    left: -34%;
    top: -1%;
    background-color: #fcc30b;
    height: 0.3vh;
  }
  .hrGray {
    width: 85%;
  }
  .rating-text {
    margin-top: -18%;
    width: 97%;
    padding-left: 31%;
    font-size: 10px;
  }
  .map {
    position: relative;
    margin-top: 10%;
    margin-bottom: 10%;
  }

  .impactHeader {
    font-weight: 400;
    font-size: 24px;
    color: ${colors.mainGreen};
    text-align: center;
  }
  .impactText {
    margin-left: 20px;
    margin-right: 20px;
  }

  .SDG {
    display: flex;
  }
  .invest {
    background-color: #55c6c6;
    border-radius: 8px;
    position: relative;
    top: 2%;
    width: 50%;
    text-align: center;
    left: 24%;
    height: 5vh;
  }
  .textInvest {
    text-decoration: none;
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 50px;
  }
  .textEnding {
    margin-left: 20px;
    margin-right: 20px;
    position: relative;
    top: 2%;
    text-align: center;
  }
`;

export default style;
