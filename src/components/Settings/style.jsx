import styled from 'styled-components';
import colors from 'tokens/colors.mjs';
const style = styled.div`
  font-family: Ubuntu, sans-serif;

  .wrapper {
    background-color: white;
    height: 40vh;
    position: relative;
    border-radius: 0.4em;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    margin-top: 6%;
  }
  .title {
    color: ${colors.mainGreen};
    font-weight: 100;
  }

  .input {
    width: 264px;
    color: black;
  }
  @media only screen and (max-width: 768px) {
    .input {
      width: 280px;
      height: 5vh;
      border: solid ${colors.mainGreen};
      border-width: thin;
    }
  }
  .flex {
    display: flex;
    background-color: white;
    position: relative;
    border-radius: 0.4em;
    margin-top: 0%;
    align-items: center;
    justify-content: space-evenly;
    margin: 30px 0px 30px 0px;
  }
  .wrappInput {
    display: flex;
    flex-direction: column;
    font-size: 16px;

    position: relative;
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
  }
  @media only screen and (max-width: 768px) {
    .wrappInput {
      display: none;
    }
  }
  .wrappInput2 {
    display: flex;
    flex-direction: column;
    position: relative;
    color: ${colors.mainGreen};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
  .cell {
    width: 10%;
    height: 7vh;
    overflow: hidden;
  }
  .favo {
    background-color: white;
    height: 11vh;
    margin: 0;
    position: relative;
    top: 135%;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    width: 100%;
  }
  .setting {
    background-color: white;
    height: 11vh;
    margin: 0;
    position: relative;
    top: 135%;
    margin-left: -65%;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    width: 100%;
  }
  a {
    color: ${colors.mainGreen};
    text-decoration: none;
  }
  .text {
    position: relative;
    /* padding-top: 6%; */
    font-size: 16px;
    color: #2b858b;
    margin: 0;
    left: 43%;
    padding-top: 10%;
  }
  .icon {
    left: 20%;
    top: 17%;

    position: absolute;
  }
  .btn {
    width: 50%;
    position: relative;
    border-radius: 4px;
    background: ${colors.mainGreen};
    text-transform: none;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
  @media only screen and (max-width: 768px) {
    .btn {
      width: 100%;
    }
  }
`;

export default style;
