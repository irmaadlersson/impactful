import styled from 'styled-components';
import colors from 'tokens/colors.mjs';

const style = styled.div`
  font-family: Ubuntu, sans-serif;

  .link {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 6;
    color: black;
    text-decoration: none !important;
  }
  .cell:hover {
    background-color: #55c6c6;
    color: white;
  }
  hr {
    margin: 0;
  }
  .wrapper-menu {
    position: absolute;
    height: 100%;
    top: 0px;
    width: 50%;
    right: 0;
    background-color: white;
    border-bottom-left-radius: 8px;
    z-index: 5;
    text-align: center;
    box-shadow: 1px 5px 5px grey;
  }
  .topMenu {
    height: 60px;
    line-height: 3;
    background-color: ${colors.mainGreen};
    color: white;
    text-decoration: none !important;
  }

  .cell {
  }
`;

export default style;
