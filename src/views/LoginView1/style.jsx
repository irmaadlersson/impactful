import styled from 'styled-components';
import colors from 'tokens/colors.mjs';

const style = styled.div`
  font-family: Ubuntu, sans-serif;

  .text {
    top: 170%;
    color: white;
    margin-left: -6%;
    position: relative;
  }
  @media screen and (max-width: 1024px) {
    .text {
      display: none;
    }
  }
  .pattern-wrapper {
    position: absolute;
    top: 9%;
    width: 32%;
    height: 84%;
    overflow: hidden;
  }
  @media screen and (max-width: 1650px) {
    .pattern-wrapper {
      width: 80%;
    }
  }
  @media screen and (max-width: 1240px) {
    .pattern-wrapper {
      width: 50%;
    }
  }
  @media screen and (max-width: 1024px) {
    .GreenPattern {
      display: none;
    }
  }

  .GreenPattern {
    left: 0;
    top: 10%;
    position: absolute;
    z-index: -1;
  }
  @media screen and (max-width: 1024px) {
    .figure {
      display: none;
    }
  }
  .figure {
    top: 52.2%;
    position: relative;
  }
`;

export default style;
