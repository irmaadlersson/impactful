import styled from 'styled-components';
import colors from 'tokens/colors.mjs';
const style = styled.div`
  font-family: Ubuntu, sans-serif;

  .wrapper {
    position: relative;
    background: white;
    border-radius: 8px;
    opacity: 0.8;
    top: 100px;
    height: 650px;
    padding: 40px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  }
  @media only screen and (max-width: 1024px) {
    .wrapper {
      position: relative;
      background: none;

      border-radius: 8px;
      top: 20px;
      height: 70vh;
      padding: 0px 40px 0px 40px;
      box-shadow: none;
    }
  }
  @media only screen and (max-width: 360px) {
    .wrapper {
      position: relative;
      background: none;

      border-radius: 8px;
      top: 0px;
      height: 73vh;
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
    opacity: 0.8;
  }
  .box_title {
    text-align: center;
    font-style: normal;
    font-size: 24px;
    line-height: 28px;
    /* identical to box height */

    color: #000000;
  }
  .input {
    border: solid ${colors.impactful};
    height: 0vh;
    background-color: white;
  }
  @media only screen and (max-width: 768px) {
    .input {
      height: 6vh;
    }
  }
  .btn {
    margin-bottom: 28px;
  }
  .linkwrapper {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    padding-top: 28;
  }
  hr {
    width: 30%;
    background-color: #bdbdbd;
  }
  .orWrapp {
    display: flex;
    position: relative;
    width: 100%;

    color: #bdbdbd;
  }
  .or {
  }
  .google {
  }
  .forgotPassword {
  }
  a {
    text-decoration: none;
    color: ${colors.impactful};
  }
`;

export default style;
