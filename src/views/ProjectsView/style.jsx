import styled from 'styled-components';
import colors from 'tokens/colors.mjs';

const style = styled.div`
  font-family: Ubuntu, sans-serif;

  .investments {
    color: ${colors.mainGreen};
    font-weight: bold;
  }
  @media only screen and (max-width: 768px) {
    .investments {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
    }
  }
  .text1 {
    width: 90%;
  }
  @media only screen and (max-width: 768px) {
    .text1 {
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      width: 70%;
      position: relative;
      left: 15%;
    }
  }
`;

export default style;
