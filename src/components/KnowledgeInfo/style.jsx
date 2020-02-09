import styled from 'styled-components';
import colors from 'tokens/colors.mjs';

const style = styled.div`
  font-family: Ubuntu, sans-serif;

  .rectangle {
    margin: 0% -36% 0% 28%;
    padding-left: 1%;
    height: 140px;
    background: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
  }
  @media only screen and (max-width: 1024px) {
    .rectangle {
      display: none;
    }
  }

  .rectangle-left {
    margin: 0% -9% 0% 0%;
    padding-left: 1%;
    height: 140px;
    background: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
  }
  @media only screen and (max-width: 1024px) {
    .rectangle-left {
      display: none;
    }
  }

  .rectangle-middle {
    margin: 0% -25% 0% 12%;
    padding-left: 1%;
    height: 140px;
    background: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
  }
  @media only screen and (max-width: 1024px) {
    .rectangle-middle {
      display: none;
    }
  }
  @media only screen and (max-width: 1024px) {
    .rectangle-mobile {
      margin: 5% 0% 0% 0%;
      padding-left: 1%;
      height: 140px;
      background: white;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      display: flex;
    }
  }
  @media only screen and (min-width: 1025px) {
    .rectangle-mobile {
      display: none;
    }
  }

  .slot {
    width: 18.5%;
    position: relative;
    margin: 0% 3% 0% 3%;
    padding-top: 2%;
    height: 100%;
    flex: auto;
  }

  .h1 {
    color: ${colors.black};
    font-weight: normal;
    font-size: 24px;
    margin-bottom: 0%;
    margin-top: 20px;
    margin-left: 5%;
    line-height: 28px;
  }
  @media only screen and (max-width: 1024px) {
    .h1 {
      display: none;
    }
  }
  .h2 {
    color: black;
    font-weight: 350;
    font-style: normal;
    font-size: 16px;
    margin: 0% 0% 0% 0%;
    line-height: 21px;
    display: inline-block;
  }
  @media only screen and (max-width: 1024px) {
    .h2 {
      font-size: 14px;
    }
  }
  .h3 {
    display: inline-block;
    color: #959393;
    font-size: 14px;
    margin-top: 0%;
    margin-bottom: 0%;
  }
  @media only screen and (max-width: 1024px) {
    .h3 {
      font-size: 10px;
    }
  }
  .link {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    display: block;
    position: absolute;
    bottom: 10%;
  }

  hr {
    background-color: ${colors.mainGreen};
    margin-left: 5%;
    width: 60%;
    margin-top: 10px;
    height: 2px;
  }

  @media only screen and (min-width: 1025px) {
    .tabs {
      display: none;
    }
  }
  @media only screen and (min-width: 1025px) {
    .tab {
      display: none;
    }
  }
  @media only screen and (min-width: 1025px) {
    .tab-content {
      display: none;
    }
  }
  @media only screen and (min-width: 1025px) {
    .tab-switch {
      display: none;
    }
  }
  @media only screen and (min-width: 1025px) {
    .tab-label {
      display: none;
    }
  }
  .tabs {
    position: relative;
    margin: 3rem 0;
    height: 40vh;
  }

  .tabs::before,
  .tabs::after {
    content: '';
    display: table;
  }
  .tabs::after {
    clear: all;
  }
  .tab {
    float: left;
    width: 25%;
  }
  .tab-switch {
    display: none;
  }
  .tab-label {
    position: relative;
    font-weight: lighter;
    display: block;
    border-radius: 0 8px;
    line-height: 2.75em;
    height: 3em;
    text-align: center;
    font-size: 14px;
    color: ${colors.mainGreen};
    cursor: pointer;
    top: 0;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }
  .tab-label:hover {
    top: -0.25rem;
    transition: top 0.25s;
  }
  .tab-content {
    position: absolute;
    z-index: 1;
    left: 0;
    width: 100%;
    background: #fff;
    color: #2c3e50;
    opacity: 0;
    transition: all 0.35s;
  }
  .tab-switch:checked + .tab-label {
    background: #fff;
    font-weight: bolder;
    transition: all 0.35s;
    z-index: 1;
    top: -0.0625rem;
    font-size: 16px;
  }
  .tab-switch:checked + label + .tab-content {
    z-index: 2;
    opacity: 1;
    transition: all 0.35s;
  }
`;

export default style;
