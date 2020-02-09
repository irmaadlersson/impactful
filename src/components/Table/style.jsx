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
    left: 95%;
    margin: -34px 0 0 0;
    display: block;
    max-width: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
  }
  @media only screen and (max-width: 768px) {
    .info {
      left: 86%;
      margin: -41px 0px 0px 14px;
    }
  }
  .pFilter {
    margin: 4% 0 0 0;
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
    width: 15%;
    height: 4.5vh;
    margin: -0.5% 2% 0% 1%;
  }
  @media only screen and (max-width: 1200px) {
    .filterBy {
      width: 15%;
      margin: -1.2% 2% 0% 1%;
    }
  }
  @media only screen and (min-width: 1400px) {
    .filterBy {
      margin-top: 0.3%;
    }
  }
  @media only screen and (min-width: 1800px) {
    .filterBy {
      margin-top: 0%;
    }
  }
  @media only screen and (min-width: 1400px) {
    .pFilter {
      margin: 4% 0 0 0;
    }
  }

  .ExpFilter {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    width: 100%;
    height: 5vh;
    background: white;
    position: relative;
    left: 140%;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 30px;
    color: ${colors.mainGreen};
    padding: 8px 8px 8px 8px;
  }
  @media only screen and (max-width: 1300px) {
    .ExpFilter {
      left: 98%;
    }
  }
  @media only screen and (max-width: 768px) {
    .ExpFilter {
      left: 36px;
      margin-top: -5%;
      font-size: 12px;
    }
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
  }

  .wrapper {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 60px;
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 60px;
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
`;

export default style;
