import styled from 'styled-components';
import colors from 'tokens/colors.mjs';

const style = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  margin-top: 15%;
  color: white;

  .footer {
    width: 100%;
    position: absolute;

    overflow: hidden;
    background-color: ${colors.mainGreen};
    z-index: -1;
    height: 42vh;
    left: 0;
  }
  @media only screen and (max-width: 768px) {
    .footer {
      height: 60vh;
    }
  }
  .row {
    display: flex;
    flex-direction: column;
  }
  .row2 {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 768px) {
    .row2 {
      display: none;
    }
  }
  @media only screen and (min-width: 768px) {
    .showOnMobile {
      display: none;
    }
  }

  .text {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 196.2%;
    position: relative;
    margin-top: 20%;
  }

  .social {
    display: flex;
    justify-content: space-between;
    width: 24%;
    padding-top: 5%;
  }
  @media only screen and (max-width: 768px) {
    .social {
      width: 37%;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }
  @media only screen and (max-width: 768px) {
    a,
    .social,
    .text {
      padding-left: 10%;
    }
  }

  @media only screen and (max-width: 768px) {
    .poweredBy {
      position: relative;
      float: right;
      top: -69%;
      margin-right: 6%;
    }
  }
  @media only screen and (max-width: 768px) {
    .arrow {
      display: none;
    }
  }
`;

export default style;
