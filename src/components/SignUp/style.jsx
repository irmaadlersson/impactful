import styled from 'styled-components';
import colors from 'tokens/colors.mjs';

const style = styled.div`
  font-family: Ubuntu, sans-serif;

  .input {
    border: solid ${colors.impactful};
    padding: 1em;
    font-size: 14px;
  }
  @media only screen and (max-width: 1024px) {
    .input {
      padding: 3%;
    }
  }
  .wrapper {
    position: relative;
    background: white;
    border-radius: 8px;
    opacity: 0.8;
    top: 100px;
    height: 70vh;
    padding: 40px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  }
  @media only screen and (max-width: 1024px) {
    .wrapper {
      position: relative;
      background: none;

      border-radius: 8px;
      top: 0px;
      height: 63vh;
      padding: 0px 40px 0px 40px;
      box-shadow: none;
    }
  }

  .logo {
    position: relative;
    left: 25%;
    margin-bottom: 10px;
  }

  .form {
    width: 100%;
    background-color: white;

    border-radius: 1%;
  }
  .btn {
  }
  @media only screen and (max-width: 1024px) {
    .btn {
      min-height: 30px;
      padding: 3%;
      font-size: 0.8rem;
    }
  }
  .wrapper2 {
    top: 10%;
    position: relative;
    padding: 10%;
    background: white;
    border-radius: 8px;
    opacity: 0.8;
  }

  .form2 {
    width: 100%;
    background-color: white;
    opacity: 0.8;
  }
  .box_title {
    font-style: normal;
    font-weight: bolder;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    /* identical to box height */

    color: #000000;
  }
  @media only screen and (max-width: 1024px) {
    .box_title {
      font-size: 18px;
    }
  }
  .google-wrapper {
    margin-top: 28px;
    align-content: center;
  }
  @media only screen and (max-width: 1024px) {
    .google-wrapper {
      margin-top: 0%;
    }
  }
  .orWrapp {
    display: flex;
    position: relative;
    color: #bdbdbd;
  }
  .or {
    color: #bdbdbd;
    display: contents;
  }
  .hr {
    width: 30%;
  }

  .account {
    text-align: center;
  }
  @media only screen and (max-width: 1024px) {
    .account {
      font-size: 14px;
    }
  }
`;

export default style;
