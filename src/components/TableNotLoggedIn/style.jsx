import styled from 'styled-components';
import colors from 'tokens/colors.mjs';
const style = styled.div`
  font-family: Ubuntu, sans-serif;

  /*SEARCH STYLE*/
  .seachDiv {
    width: 100%;
    height: 6vh;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }
  @media only screen and (max-width: 768px) {
    .seachDiv {
      box-shadow: none;
    }
  }
  .searchBox {
    display: flex;
  }
  @media only screen and (max-width: 768px) {
    .searchBox {
    }
  }

  .text-wrapp {
    display: flex;
    color: ${colors.mainGreen};
    position: relative;
    margin-top: -4.5%;
  }
  @media only screen and (max-width: 768px) {
    .text-wrapp {
      display: none;
    }
  }
  .searchBar {
    width: 30%;
    position: relative;
    left: 63%;
    margin-top: 0.8%;
    border: 1px solid ${colors.mainGreen};
    box-sizing: border-box;
    border-radius: 8px;
    text-align: center;
    height: 4vh;
    font-style: italic;
    z-index: 2;
  }
  @media only screen and (max-width: 768px) {
    .searchBar {
      position: relative;
      left: 0;
      width: 300px;
      margin: 0 0px 0px 20px;
    }
  }

  /* .search-icon {
    margin-top: -2.7%;
    position: relative;
    left: 47%;
    z-index: 2;
  }
  @media only screen and (max-width: 768px) {
    .search-icon {
      position: relative;
      top: -50%;
      left: 76%;
      margin: 0;
    }
  } */
  .info {
    position: relative;
    left: 65%;
    margin: 15px 0 0 0;
  }
  @media only screen and (max-width: 768px) {
    .info {
      display: block;
      max-width: 100%;
      width: auto;
      height: auto;
      margin: 0 auto;
      object-fit: contain;
      left: 0;
    }
  }
  .pFilter {
    margin: 5% 0 0 0;
  }
  /*FILTER STYLE*/
  .FilterDivs {
    display: flex;
    position: absolute;
  }
  .filterBy {
    border: 1px solid ${colors.mainGreen};
    border-radius: 26px;
    text-align: center;
    width: 12%;
    height: 5vh;
    margin: 0.1% 2% 0% 1%;
  }
  @media only screen and (max-width: 1200px) {
    .filterBy {
      width: 13%;
    }
  }
  /* .ExpFilter {
    background-color: red;
    width: 50%;
    position: relative;
    left: 0%;
  }
  .MatFilter {
    background-color: red;
    width: 50%;
    position: relative;
    left: -2%;
  }
  .ImpFilter {
    background-color: red;
    width: 50%;
    position: relative;
    left: -9%;
  }
  .RiskFilter {
    background-color: red;
    width: 50%;
    position: relative;
    left: -15%;
  }
  .OwnerFilter {
    background-color: red;
    width: 50%;
    position: relative;
    left: -25%;
  }
  .LocationFilter {
    background-color: red;
    width: 50%;
    position: relative;
    left: -33%;
  } */

  .wrapper {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  }
  @media only screen and (max-width: 768px) {
    .wrapper {
      box-shadow: none;
    }
  }
  .table {
    width: 100%;
  }
  .gray-row {
    background-color: #f6f6f6;
  }
  h3 {
    font-weight: 600;
  }
  td {
    width: 100%;
    text-align: center;
  }
  .white-row {
    background-color: white;
  }

  .cell {
    width: 10%;
    height: 5.5vh;
    overflow: hidden;
  }
  .cellHeader {
    width: 10%;
    height: 5.5vh;
    overflow: hidden;
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
    .cell {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 11px;
    }
  }

  @media only screen and (max-width: 768px) {
    .I {
      display: none;
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

  .hoverDiv {
    background-color: #f2f2f2;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    position: relative;
    padding: 0% 5% 5% 5%;
    width: 100%;
    height: 25vh;
  }
  .notLoggedInDiv {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    width: 100%;
    height: 70vh;
  }
  @media only screen and (max-width: 768px) {
    .notLoggedInDiv {
      height: 30vh;
    }
  }
  .notLoggedInIMG {
    position: relative;
    left: 15%;
    margin-top: 5%;
  }
  @media only screen and (max-width: 768px) {
    .notLoggedInIMG {
      width: 30%;
      margin-top: 5%;
      left: 8%;
    }
  }

  .investment-btn {
    background-color: ${colors.mainGreen};
    height: 4.5vh;
    border-radius: 6px;
    text-align: center;
    width: 32%;
    color: white;
    font-size: 14px;
    padding: 1%;
    margin-right: 4%;
    cursor: pointer;
    line-height: 0vh;
  }
  @media only screen and (max-width: 768px) {
    .investment-btn {
      height: 4.2vh;
      width: 90%;
      position: relative;
      left: -45%;
      border-radius: 0;
      border-radius: 4px;
      margin-top: 9%;
    }
  }
  .pBtn {
    margin-top: 2%;
  }
  @media only screen and (max-width: 768px) {
    .pBtn {
      font-size: 12px;
      width: 95%;
      margin: 0;
      line-height: 23px;
    }
  }
  @media only screen and (max-width: 768px) {
    .favo {
      width: 27%;
    }
  }

  .divJoin {
    position: relative;
    left: 50%;
    top: -55%;
    text-align: center;
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    .divJoin {
      top: -50%;
    }
  }
  .pJoin {
    width: 31%;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
  }
  @media only screen and (max-width: 768px) {
    .pJoin {
      font-size: 12px;
      line-height: 15px;
      width: 45%;
      position: relative;
      left: -5%;
    }
  }
  .h1Join {
    width: 31%;
    font-weight: normal;
    font-size: 24px;
    line-height: 25px;
  }
  @media only screen and (max-width: 768px) {
    .h1Join {
      font-size: 14px;
      margin-top: 0%;
    }
  }
`;

export default style;
