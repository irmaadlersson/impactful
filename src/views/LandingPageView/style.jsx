import styled from 'styled-components';
import Button from 'components/UI/Button';
import colors from 'tokens/colors.mjs';

const style = styled.div`
  color: white;

  font-family: Ubuntu, sans-serif;
  @media only screen and (max-width: 1024px) {
    margin: 5%;
  }

  .backgroundImg-wrapper {
    width: 100%;
    height: 679px;
    position: absolute;
    overflow: hidden;
    background-color: ${colors.mainGreen};
    z-index: -1;
    left: 0;
  }
  .arrowLeft {
    position: relative;
    top: 330px;
    left: -42%;
    transform: rotate(270deg);
  }
  @media only screen and (max-width: 1024px) {
    .arrowLeft {
      left: -150px;
      top: 55%;
    }
  }
  .arrowLeftClicked {
    z-index: 2;
    position: relative;
    top: 330px;
    left: 188%;
    transform: rotate(90deg);
  }
  @media only screen and (max-width: 1024px) {
    .arrowLeftClicked {
      left: 170px;
    }
  }
  .arrowRight {
    position: relative;
    top: 343px;
    left: 188%;

    transform: rotate(90deg);
  }
  @media only screen and (max-width: 1024px) {
    .arrowRight {
      left: 160px;
      top: 58%;
    }
  }
  .arrowRightClicked {
    z-index: 2;
    position: relative;
    top: 344px;
    left: -42%;
    transform: rotate(270deg);
  }
  @media only screen and (max-width: 1024px) {
    .arrowRightClicked {
      left: -148px;
    }
  }

  .imgLeft {
    position: relative;
    top: 71px;
    margin: 0%;
    left: 60px;
  }
  @media only screen and (max-width: 1024px) {
    .imgLeft {
      left: 1%;
      top: 1%;
    }
  }

  .ball-wrapper {
    position: relative;
    left: 113%;
    z-index: 2;
    top: 110px;
    @media only screen and (max-width: 1250px) {
      top: 150px;
    }
    @media only screen and (max-width: 1120px) {
      top: 175px;
    }
    @media only screen and (max-width: 1080px) {
      top: 213px;
    }
    @media only screen and (max-width: 1024px) {
      left: 43%;
      top: 5%;
      width: fit-content;
      display: flex;
    }
  }

  .ball {
    display: inline-block;
    margin: 1%;
    width: 15px;
    height: 15px;
    border-radius: 12px;
    border: solid white;
  }
  .ball.left {
    background-color: white;
  }
  .ball.middle {
    background-color: white;
  }
  .ball.right {
    background-color: white;
  }

  .textwrapper {
    position: relative;
    top: -25px;
  }
  @media only screen and (max-width: 1024px) {
    .textwrapper {
      position: relative;
      top: -160%;
    }
  }

  .slogan {
    position: relative;
    margin: 0px 0px 0px 0px;
    font-weight: normal;
    font-style: normal;
    font-size: 50px;
    line-height: 57px;
    text-align: right;
    z-index: 0;
  }
  @media only screen and (max-width: 1024px) {
    .slogan {
      font-style: normal;
      font-weight: normal;
      font-size: 19px;
      line-height: 40px;
      text-align: center;
    }
  }
  .hashtag {
    font-weight: normal;
    font-style: normal;
    font-size: 30px;
    text-align: right;
    z-index: 0;
  }
  @media only screen and (max-width: 1024px) {
    .hashtag {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;
      text-align: center;
    }
  }
  .find-investments-btn {
    border: solid ${colors.white};

    border-radius: 8px;
    text-align: center;
    font-weight: 500;
    color: ${colors.white};
    position: relative;
    width: 252.81px;
    border-radius: 8px;
    text-align: center;
    font-weight: 500;
  }
  @media only screen and (max-width: 1024px) {
    .find-investments-btn {
      display: none;
    }
  }
  .get-started-btn {
    position: relative;
    width: 252.81px;
    border: solid white;
    background-color: ${colors.white};
    border-radius: 8px;
    text-align: center;
    font-weight: 500;
    color: ${colors.mainGreen};
  }
  @media only screen and (max-width: 1024px) {
    .get-started-btn {
      border: solid white;
      top: -480%;
      position: relative;
      width: 150%;
      left: -115%;
    }
  }
  @media only screen and (max-width: 400px) {
    .get-started-btn {
      top: -555%;
    }
  }
  .goals {
    position: relative;
    color: black;
    margin-top: 0px;
  }
  @media only screen and (max-width: 1024px) {
    .goals {
      top: -180%;
      margin-top: 0;
    }
  }
  .goalsImg {
    position: relative;
    color: black;
  }
  @media only screen and (max-width: 1024px) {
    .goalsImg {
      display: none;
    }
  }

  .goals-mission {
    position: relative;
    color: black;
    margin-left: 13%;
    top: -75px;
  }
  @media only screen and (max-width: 1024px) {
    .goals-mission {
      top: -335%;
      left: -5%;
    }
  }

  .goals-mission-text {
    top: -4px;
    margin: 0%;
    color: #2b858b;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 57px;
    position: relative;
  }
  @media only screen and (max-width: 1024px) {
    .goals-mission-text {
      text-align: center;
      overflow: hidden;
      top: -55%;
    }
  }
  .h1-mission {
    top: 0px;
    margin: 0%;
    color: #2b858b;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 57px;
    position: relative;
    margin-top: -39px;
  }
  @media only screen and (max-width: 1024px) {
    .h1-mission {
      font-size: 18px;
      text-align: center;
      margin-top: 0;
    }
  }
  .mission-line {
    background-color: ${colors.mainGreen};
    margin-left: 0%;
    width: 60%;
    height: 0.5vh;
    border-radius: 100%;
    top: -10px;
    position: relative;
  }
  .description-mission {
    position: relative;
    top: -7px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: black;
    margin-bottom: 0;
  }
  @media only screen and (max-width: 1024px) {
    .description-mission {
      font-size: 14px;
      text-align: center;
    }
  }

  @media only screen and (max-width: 1024px) {
    .wrapp-btn-mission {
      display: flex;
      flex-direction: row;
      width: 180%;
      position: relative;
      left: 30%;
    }
  }

  .h1-vision {
    top: 25px;
    margin: 0%;
    color: #2b858b;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 57px;
    position: relative;
  }
  @media only screen and (max-width: 1024px) {
    .h1-vision {
      font-size: 18px;
      text-align: center;
    }
  }
  .vision-line {
    background-color: ${colors.mainGreen};
    margin-left: 0%;
    width: 60%;
    height: 0.5vh;
    border-radius: 100%;
    top: 20px;
    position: relative;
  }
  .description-vision {
    position: relative;
    top: 30px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: black;
  }
  @media only screen and (max-width: 1024px) {
    .description-vision {
      font-size: 14px;
      text-align: center;
    }
  }
  .goals-partners {
    margin-top: 120px;
  }
  @media only screen and (max-width: 1024px) {
    .goals-partners {
      text-align: center;
      position: relative;
      top: -37%;
      margin-top: 0;
    }
  }

  .h1-partners {
    top: -48px;
    margin: 0%;
    color: #2b858b;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 57px;
    position: relative;
  }
  @media only screen and (max-width: 1024px) {
    .h1-partners {
      font-size: 18px;
      text-align: center;
    }
  }
  .partners-line {
    background-color: ${colors.mainGreen};
    margin-left: 0%;
    width: 60%;
    height: 0.5vh;
    border-radius: 100%;
    top: -40px;
    position: relative;
  }
  .description-partners {
    position: relative;
    top: -25px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    color: black;
    margin-right: 11%;
    margin-top: 0;
  }
  @media only screen and (max-width: 1024px) {
    .description-partners {
      font-size: 14px;
      text-align: center;
      margin-right: 0%;
    }
  }
  .goals-img-partners {
    margin-top: 190px;
  }
  @media only screen and (max-width: 1024px) {
    .goals-img-partners {
      top: -251%;
      position: relative;
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 320px) {
    .goals-img-partners {
      top: -230%;
      margin-top: 0;
      position: relative;
    }
  }
  @media only screen and (max-width: 1024px) {
    .wrapper {
      position: relative;
      top: -70%;
    }
  }
  @media only screen and (min-width: 1025px) {
    .flexbox {
      display: flex;
    }
  }

  .partners {
    position: relative;
  }

  .wp {
    border: solid pink;
  }

  .h1 {
    top: -65px;
    margin: 0%;
    color: #2b858b;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 57px;
    position: relative;
  }
  @media only screen and (max-width: 1024px) {
    .h1 {
      text-align: center;
      font-size: 18px;
    }
  }

  .description {
    position: relative;
    top: -50px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: black;
    margin: 0;
  }
  @media only screen and (max-width: 1024px) {
    .description {
      text-align: center;
      font-size: 14px;
    }
  }
  .wrapp-btn {
    display: flex;
  }
  .investment-btn {
    position: relative;
    left: 68%;
    top: -50px;

    height: 60px;
    line-height: 50px;
    border-radius: 6px;
    text-align: center;
    width: 32%;
    color: white;
    font-size: 14px;
    padding: 1%;
    margin-right: 4%;
    cursor: pointer;
  }
  @media only screen and (max-width: 1024px) {
    .investment-btn {
      left: 35%;
    }
  }
  .impactWorks-btn {
    border: solid ${colors.mainGreen};
    height: 3.5vh;
    width: 40%;
    height: 3vh;
    font-size: 14px;
    text-align: center;
    border-radius: 6px;
    cursor: pointer;
  }
  .aBtnFindOut {
    color: ${colors.mainGreen};
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
  }
  @media only screen and (max-width: 768px) {
    .aBtnFindOut {
      position: relative;
      left: -35%;
    }
  }
  .aBtn {
    color: ${colors.mainGreen};
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
  }
  .img-partner {
    height: 6vh;
    position: relative;
    top: 30%;
  }
  .wrapper-member {
    display: inline-block;
    padding: 2.43%;
  }
  .wrapper-partner {
    display: inline-flex;
    /* padding: 2%; */
    /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25); */
    border-radius: 8px;
    width: 30%;
    /* height: 22vh; */
    height: 5vh;
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
`;

export default style;
