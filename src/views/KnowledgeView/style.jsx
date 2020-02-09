import styled from 'styled-components';
import colors from 'tokens/colors.mjs';

const style = styled.div`
  font-family: Ubuntu, sans-serif;

  @media only screen and (max-width: 1024px) {
    margin: 0% 5% 0% 5%;
  }

  .backgroundImg-wrapper {
    width: 100%;
    height: 50vh;
    position: absolute;

    overflow: hidden;
    max-width: 1440px;
  }
  .h1-title {
    color: ${colors.mainGreen};
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 57px;
  }
  @media only screen and (max-width: 1024px) {
    .h1-title {
      text-align: center;
      font-size: 18px;
    }
  }

  hr {
    background-color: ${colors.mainGreen};
    margin-left: 0%;
    width: 60%;
    height: 0.5vh;
    border-radius: 100%;
  }
  .text {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
  }
  @media only screen and (max-width: 1024px) {
    .text {
      text-align: center;
      font-size: 12px;
    }
  }
`;

export default style;
