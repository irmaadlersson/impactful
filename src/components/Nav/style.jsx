import styled from 'styled-components';
import PropTypes from 'prop-types';

import Link from 'components/UI/Link';

import colors from 'tokens/colors.mjs';
import spacing from 'tokens/spacing.mjs';

export const StyledNav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 16px;
  background: white;
  font-family: Ubuntu, sans-serif;

  .navwrapper {
    width: 100%;
    height: 60px;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    background-color: white;
    z-index: 6;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  @media only screen and (max-width: 1024px) {
    .navwrapper {
      display: none;
    }
  }
  @media only screen and (max-width: 1024px) {
    .Hamburger {
      position: absolute;
      right: 5%;
    }
  }
  @media only screen and (max-width: 1024px) {
    .LogoMobile {
      position: absolute;
      left: 5%;
      top: 2%;
    }
  }
`;

export const StyledNavLink = styled(Link)`
  display: inline-flex;
  color: black;
  text-decoration: none;
  cursor: pointer;
  font-family: Ubuntu, sans-serif;

  .link-left {
    font-style: normal;
    overflow: hidden;
  }
  .link-left::before {
    content: '';
    display: block;
    height: 3px;
    width: 0%;
    background-color: ${colors.impactful};
    position: absolute;
    top: 40px;
    transition: all ease-in-out 150ms;
  }
  .link-left:hover::before {
    width: 110px;
  }
  .link-middle {
    font-style: normal;
    overflow: hidden;
  }
  .link-middle::before {
    content: '';
    display: block;
    height: 3px;
    width: 0%;
    background-color: ${colors.impactful};
    position: absolute;
    top: 40px;
    transition: all ease-in-out 150ms;
  }
  .link-middle:hover::before {
    width: 85px;
  }
  .link-right {
    font-style: normal;
    overflow: hidden;
  }
  .link-right::before {
    content: '';
    display: block;
    height: 3px;
    width: 0%;
    background-color: ${colors.impactful};
    position: absolute;
    top: 40px;
    transition: all ease-in-out 150ms;
  }
  .link-right:hover::before {
    width: 90px;
  }

  /* loginbutton */
  .loginbutton {
    position: relative;
    height: 100%;
    height: 85%;
    margin-top: 2%;
    border-radius: 7px;
    right: 5%;
    background-color: ${colors.mainGreen};
    color: white;
  }

  .lockIcon {
    padding-right: 5px;
    padding-bottom: 5px;
  }

  .linkinbutton {
    padding: 12px 20px 10px 20px;
    width: 245px;
    margin-left: 25%;
    margin-top: 0%;
    font-size: 18px;
  }

  /* loginbutton */
  /* buttonloggedin */
  .buttonloggedin {
    right: 35%;
    z-index: 5;
    position: relative;
  }
  .counter {
    color: ${colors.impactful};
  }
  .flexbox {
    padding-top: 10px;
    position: relative;
    height: 50px;
  }

  .downarrow {
    display: inline;
    margin: 0;
  }
  .userIconloggedin {
  }
  .linkbutton {
    font-style: normal;
    display: inline-block;
    color: black;
    margin: 0;
    font-size: 16px;
  }

  /* buttonloggedin */
`;
