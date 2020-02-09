import styled from 'styled-components';

const style = styled.div`
  font-family: Ubuntu, sans-serif;

  .link {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 18px;
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
    /* position: relative;
    top: 79px;
    left: 20%;
    width: 164px; */
    position: relative;
    top: 20px;
    right: 65%;
    width: 200%;
    background-color: white;
    border-bottom-left-radius: 8px;
    z-index: 5;
    text-align: center;
    box-shadow: 1px 5px 5px grey;
  }

  .cell {
    padding: 10% 0 10% 0;
  }
`;

export default style;
