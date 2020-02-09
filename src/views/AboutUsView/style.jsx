import styled from 'styled-components';
import colors from 'tokens/colors.mjs';
const style = styled.div`
  font-family: Ubuntu, sans-serif;

  .textAboutUs {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    .textAboutUs {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      margin-left: 40px;
      margin-right: 47px;
      width: 288px;
    }
  }
  .col1Desktop {
    position: relative;
    right: 4%;
  }
  @media only screen and (max-width: 768px) {
    .col1Desktop {
      right: 0%;
    }
  }
  .col2Desktop {
    position: relative;
    left: 4%;
  }
  @media only screen and (max-width: 768px) {
    .col2Desktop {
      left: 0%;
    }
  }
  .box {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 23vh;
    border-radius: 8px;
    padding: 5%;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 768px) {
    .box {
      margin: 0px 30px 10px 30px;
      height: auto;
    }
  }
  .boxHeight {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 32vh;
    border-radius: 8px;
    padding: 5%;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 768px) {
    .boxHeight {
      margin: 0px 30px 10px 30px;
      height: auto;
    }
  }

  /*Style, pics */
  /* .create {
  }
 
  .find {
    position: relative;
    margin-top: 6%;
    margin-bottom: 10%;
  }
  .monitor {
    position: relative;
    margin-top: 18%;
    margin-bottom: 10%;
  }
  .learn {
    position: relative;
    margin-top: 14%;
  }
  .invest {
    position: relative;
    margin-top: 6%;
  } */
  /*Styles, text in box */

  .h1Step {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: ${colors.mainGreen};
  }
  @media only screen and (max-width: 768px) {
    .h1Step {
      font-size: 14px;
      line-height: 18px;
    }
  }
  .imgAboutUs {
    width: 22%;
  }
  .pStep {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    position: relative;
    margin: 0% 0% 5% 28%;
    margin-top: -20%;
  }
  @media only screen and (max-width: 768px) {
    .pStep {
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
    }
  }
  @media only screen and (max-height: 900px) {
    .pStep {
      font-size: 15px;
      line-height: 17px;
    }
  }

  /* Style, the team */
  .h1 {
    color: ${colors.mainGreen};
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin-top: 60px;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    .h1 {
      font-size: 18px;
      margin-top: 50px;
    }
  }

  .name {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: -5px;
  }
  @media only screen and (max-width: 768px) {
    .name {
      font-weight: 600;
      margin-left: 37%;
      margin-top: -27%;
      font-size: 14px;
    }
  }
  .role {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    .role {
      margin-left: 37%;
      margin-top: -16%;
      font-size: 14px;
    }
  }
  @media only screen and (min-width: 1025px) {
    .flexbox {
      display: flex;
    }
  }

  .wrapper-member {
    display: inline-block;
    padding: 2.43%;
  }
  @media only screen and (max-width: 768px) {
    .wrapper-member {
      display: grid;
      margin-left: 73px;
    }
  }
  .wrapper-partner {
    display: inline-flex;
    /* padding: 2%; */
    /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25); */
    border-radius: 8px;
    width: 30%;
    /* height: 22vh; */
    height: 14vh;
    /* margin: 1.66%; */
    margin: -2% 1.66% 0% 1.66%;
    justify-content: center;
  }
  @media only screen and (max-width: 768px) {
    .wrapper-partner {
      display: flex;
      width: 100%;
      justify-content: center;
      align-content: center;
      height: 18vh;
    }
  }
  @media only screen and (max-width: 768px) {
    .imgMember {
      width: 28%;
    }
  }

  .img-partner {
    height: 8vh;
    position: relative;

    top: 30%;
  }

  .clickHere {
    color: ${colors.impactful};
    text-decoration: none;
    font-size: 18px;
  }
  @media only screen and (max-width: 768px) {
    .clickHere {
      font-size: 14px;
    }
  }
`;

export default style;
