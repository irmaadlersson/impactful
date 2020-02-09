import styled from 'styled-components';
import Button from 'components/UI/Button';
import colors from 'tokens/colors.mjs';

const style = styled.div`
  color: white;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;

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
      top: -385px;
      left: -227px;
      width: 161%;
      height: 303px;
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
  @media only screen and (max-width: 1024px) {
    .textwrapper {
      top: 54px;
      width: 68%;
      left: 217px;
    }
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

  /* */
  .example-form {
    display: flex;
  }
  .email {
    height: 55%;
    position: relative;
    padding-left: 5px;
    border: 1px solid #fcc30b;
    box-sizing: border-box;
    text-align: left;
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
    margin-top: 8%;
    height: 1%;
    font-size: 12px;
    width: 30%;
  }
`;

export default style;
