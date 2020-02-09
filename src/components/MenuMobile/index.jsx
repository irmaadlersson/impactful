import React from 'react';
import Icon from '/assets/icons/menuIcon.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Style, { PopupImage } from './style';
import firebase from '../firebase';
import { width } from 'window-size';
const Menu = () => {
  return (
    <Style>
      <div>
        <div className="wrapper-menu">
          <a href="/login1" style={{ textDecoration: 'none' }}>
            <div className="topMenu" onClick={logout}>
              <img src={Icon} /> Sign Out
            </div>
          </a>
          <ul style={{ margin: '0%' }}>
            <div className="cell">
              <li>
                <Link to="/knowledgebox" className="link">
                  <span>Knowledge Box</span>
                </Link>
              </li>
            </div>

            <div className="cell">
              <li>
                <Link to="/projects" className="link">
                  <span>Investments</span>
                </Link>
              </li>
            </div>

            <div className="cell">
              <li>
                <Link to="/aboutus" className="link">
                  <span>How it works</span>
                </Link>
              </li>
            </div>

            <div className="cell">
              <li>
                <Link to="account" className="link">
                  <span>My account</span>
                </Link>
              </li>
            </div>

            <div className="cell">
              <li>
                <Link href="account" className="link">
                  <span>Settings</span>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </Style>
  );
  async function logout() {
    try {
      await firebase.logout();
      // props.history.replace('/');
      // props.router.push('/');
    } catch (error) {
      alert(error.message);
    }
  }
};

export default Menu;
