import styled from 'styled-components';
import colors from 'tokens/colors.mjs';

const style = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  .popUp-info {
    box-shadow: 5px 10px 18px grey;
    height: 100vh;
    width: 30%;
    right: 0;
    top: 0%;
    background-color: white;
    position: absolute;
    z-index: 6;
  }
  @media only screen and (max-width: 768px) {
    .popUp-info {
      width: 100%;
      height: auto;
      z-index: 3;
      box-shadow: none;
    }
  }
  .infoDiv {
    background-color: ${colors.mainGreen};
    height: 10vh;
  }
  .infoImg {
    padding: 6%;
  }
  .exit {
    position: absolute;
    top: 2%;
    left: 88%;
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
  }
  @media only screen and (min-width: 768px) {
    .backBtn {
      display: none;
    }
  }
  .info-h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    margin: 30px 30px -10px 30px;
    padding: 0;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    .info-h1 {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 160%;
      margin: 30px 30px 10px 30px;
      padding: 0;
    }
  }
  .info-text {
    font-size: 16px;
    padding-left: 71px;
    width: 85%;
  }
  @media only screen and (max-width: 768px) {
    .info-text {
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      padding: 0;
      margin: 0px 30px 0px 30px;
    }
  }
`;

export default style;
