import styled from 'styled-components';
import colors from 'tokens/colors.mjs';

const style = styled.div`
  color: white;

  font-family: Ubuntu, sans-serif;

  .backgroundImg-wrapper {
    top: -110px;
    left: 87px;
    width: 950px;
    height: 500px;
    position: absolute;
    background-color: ${colors.white};
    z-index: 2;
    max-width: 1440px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
  @media only screen and (max-width: 1024px) {
    .backgroundImg-wrapper {
      top: -380px;
      left: 0px;
      width: 100%;
      height: 200px;
    }
  }
  .img {
    left: 66px;
    position: relative;
    top: 85px;
    width: 345px;
  }
  @media only screen and (max-width: 1024px) {
    .img {
      display: none;
    }
  }
  .textwrapper {
    position: absolute;
    top: 150px;
    width: 400px;
    height: 192px;
    z-index: 1;
    left: 450px;
    text-align: left;
  }

  .text {
    color: ${colors.black};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    margin: 0;
  }
  .text.description {
    top: 0px;
  }
  @media only screen and (max-width: 1024px) {
    .text.description {
      top: -50%;
      left: -123%;
    }
  }

  /* */
  .formwrapper {
    position: relative;
    width: 392px;
    height: 37px;
    top: 60px;
    display: flex;
  }
  .email {
    width: 80%;
    height: 100%;
    position: relative;
    /* left: 69.3%; */
    padding-left: 5px;
    border: 1px solid ${colors.impactful};
    box-sizing: border-box;
    /* border-radius: 8px; */
    text-align: left;
    /* height: 4vh; */
    /* font-style: italic; */
    z-index: 2;
  }
  .submitbtnwrapper {
    position: relative;
    height: 100%;
    width: 78px;
    z-index: 2;
    top: 3px;
  }
  .submitbtn {
    height: 100%;
    width: 78px;
  }
`;

export default style;
