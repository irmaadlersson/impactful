import styled from 'styled-components';
import Button from 'components/UI/Button';
import colors from 'tokens/colors.mjs';

const style = styled.div`
  color: white;

  font-family: Ubuntu, sans-serif;

  .why {
    position: relative;
    top: 25%;
    left: 20%;
  }
  @media only screen and (max-width: 768px) {
    .why {
      width: 40%;
      position: relative;
      left: 30%;
      top: 30%;
    }
  }
  .h1 {
    color: ${colors.mainGreen};
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 41px;
  }
  @media only screen and (max-width: 768px) {
    .h1 {
      text-align: center;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
    }
  }
  .backBtn {
    position: absolute;
    top: -14%;
    left: 4%;
  }
  @media only screen and (min-width: 768px) {
    .backBtn {
      display: none;
    }
  }
  .goals {
    position: relative;
    color: black;
    top: 25%;
  }
  @media only screen and (max-width: 768px) {
    .goals {
      top: 12%;
    }
  }
  .description {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
  }
  @media only screen and (max-width: 768px) {
    .description {
      text-align: center;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 124.2%;
      margin: 20px 65px 20px 65px;
    }
  }
  hr {
    background-color: ${colors.mainGreen};
    margin-left: 0%;
    width: 50%;
    height: 0.5vh;
    border-radius: 100%;
  }
`;

export default style;
