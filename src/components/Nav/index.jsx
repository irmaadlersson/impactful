import React, { useContext, useState, useRef, useEffect, createContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from 'components/UI/Grid';
import GridChild from 'components/UI/GridChild';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import PropTypes from 'prop-types';

import Image from 'components/UI/Image';
import Logo from '/assets/icons/ImpactfulLogo.svg';
import Lock from '/assets/icons/lock.svg';
import Userloggedin from '/assets/icons/userIconloggedin.svg';
import Hamburger from '/assets/icons/hamburger.svg';
import LogoMobile from '/assets/icons/Logomobile.svg';

import Menu from '/assets/icons/arrowVector.svg';
import Popup from '/components/Menu';
import MobilePopup from '/components/MenuMobile';
import MobilePopupLogin from '/components/MenuMobileLogin';

import { AuthContext } from 'Auth';
import firebase from '../firebase';
import { StyledNav, StyledNavLink } from './style';
import useOutsideClick from '../OutsideClick/outsideClick';
import { FavoritesConsumer } from '../../contexts/FavoritesContext';

const Nav = props => {
  const { currentUser } = useContext(AuthContext);

  const [showPopup, setShowPopup] = useState(false);
  const [showMobilePopup, setShowMobilePopup] = useState(false);
  const [showMobilePopupLogin, setShowMobilePopupLogin] = useState(false);
  const [count, setCount] = useState('');

  const ref = useRef();

  useEffect(() => {
    // console.log(`mount`);
    GetCount();
  }),
    [];

  useOutsideClick(ref, () => {
    if (showPopup) setShowPopup(false);
    if (showMobilePopup) setShowMobilePopup(false);
    if (showMobilePopupLogin) setShowMobilePopupLogin(false);
  });

  function GetCount() {
    if (currentUser) {
      firebase.db
        .collection('UserFavorites')
        .where('currentUser', '==', firebase.auth.currentUser.uid) // letar efter endast currentUser
        .get() /*där fav == true visa upp*/
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('ingen data matchad');
          }
          const count = snapshot.size;
          if (count === 0) {
            setCount('');
          } else {
            setCount(count);
            // console.log(`sätts count`, count);
          }

          // console.log(`firebase count userfavorites`, count);
        })
        .catch(err => {
          console.log('error fick ingen data', err);
        });
    }
  }

  return (
    <StyledNav {...props}>
      {currentUser ? (
        <div>
          <StyledNavLink as={RouterLink} to="/">
            <img className="LogoMobile" src={LogoMobile} />
          </StyledNavLink>

          <img
            className="Hamburger"
            ref={ref}
            src={Hamburger}
            onClick={() => setShowMobilePopup(true)}
          />
        </div>
      ) : (
        <div>
          <StyledNavLink as={RouterLink} to="/">
            <img className="LogoMobile" src={LogoMobile} />
          </StyledNavLink>

          <img
            className="Hamburger"
            ref={ref}
            src={Hamburger}
            onClick={() => setShowMobilePopupLogin(true)}
          />
        </div>
      )}
      <img className="Mobilelogo" />
      {showMobilePopup && <MobilePopup />}
      {showMobilePopupLogin && <MobilePopupLogin />}

      <div className="navwrapper">
        <StyledNavLink as={RouterLink} to="/">
          <Image src={Logo}></Image>
        </StyledNavLink>

        <StyledNavLink as={RouterLink} to="/knowledgebox">
          <p className="link-left">Knowledge Box</p>
        </StyledNavLink>

        <StyledNavLink as={RouterLink} to="/projects">
          <p className="link-middle">Investments</p>
        </StyledNavLink>

        <StyledNavLink as={RouterLink} to="/aboutus">
          <p className="link-right">How it works</p>
        </StyledNavLink>

        {/* <div></div> */}

        {currentUser ? (
          <StyledNavLink>
            <div
              className="buttonloggedin"
              ref={ref}
              onClick={
                (console.log(`current username`, firebase.getCurrentUsername()),
                () => setShowPopup(true))
              }

              // onMouseLeave={
              //   (console.log(`current username`, firebase.getCurrentUsername()),
              //   () => setShowPopup(false))
              // }
            >
              {/* försök till count */}
              <div className="flexbox">
                {`${count}`}
                <img className="userIconloggedin" src={Userloggedin} />
                <p className="linkbutton">&nbsp;Hi,&nbsp;{firebase.getCurrentUsername()}&nbsp;</p>
                <Image src={Menu} className="downarrow" />

                {showPopup && <Popup />}
              </div>
            </div>
          </StyledNavLink>
        ) : (
          <StyledNavLink as={RouterLink} to="/login1">
            <div className="buttoncontent">
              <div className="loginbutton">
                <p className="linkinbutton">
                  <img className="lockIcon" src={Lock} />
                  Log In
                </p>
              </div>
            </div>
          </StyledNavLink>
        )}
      </div>
    </StyledNav>
  );
};

export default Nav;
