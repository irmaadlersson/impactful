import styled from 'styled-components';
import colors from 'tokens/colors.mjs';

const style = styled.div`
  font-family: Ubuntu, sans-serif;

  .greenpattern {
    margin-top: -21%;
    left: 0%;
    z-index: -1;
    width: 88%;
    position: absolute;
  }
  .pattern-wrapper {
    position: absolute;
    top: 0%;
    width: 49%;
    height: 80%;
    overflow: hidden;
    z-index: -1;
  }
  .text-wrapper {
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 35%;
    width: 340px;
    left: 15%;
    /* width: 56%;
    left: 15%; */
  }
  @media only screen and (max-width: 1100px) {
    .text-wrapper {
      top: 28%;
    }
  }
  .title {
    font-weight: 500;
    font-size: 2.25em;
    line-height: 74px;
    text-align: left;
  }
  .text {
    font-weight: normal;
    font-size: 1.2em;
    text-align: left;
    margin-top: 0%;
  }
`;

export default style;
