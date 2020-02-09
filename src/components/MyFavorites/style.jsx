import styled from 'styled-components';
import colors from 'tokens/colors.mjs';
const style = styled.div`
  font-family: Ubuntu, sans-serif;

  .wrapper {
    background-color: white;
    /* height: 30vh; */
    position: relative;
    border-radius: 0.4em;
    margin-top: 0%;
  }
  .table {
    width: 100%;
  }
  .cellHeader {
    width: 10%;
    height: 5.5vh;
    overflow: hidden;
  }

  .cell {
    width: 10%;
    height: 5.5vh;
    overflow: hidden;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 60px;
  }
  @media only screen and (max-width: 768px) {
    .cell {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 11px;
    }
  }
  @media only screen and (max-width: 768px) {
    .cellHeader {
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 11px;
    }
  }
  @media only screen and (max-width: 768px) {
    .arrow {
      width: 10%;
    }
  }
  .favoritesImg {
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    .favoritesImg {
      width: 25%;
    }
  }
  td {
    width: 100%;
    text-align: center;
  }
  .favo {
    background-color: white;
    height: 11vh;
    margin: 0;
    position: relative;
    top: 135%;
    border-radius: 8px;
    width: 100%;
  }
  a {
    color: ${colors.mainGreen};
    text-decoration: none;
    margin: 2%;
  }
  @media only screen and (max-width: 768px) {
    a {
      font-size: 12px;
    }
  }
`;

export default style;
