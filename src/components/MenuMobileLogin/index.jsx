import React from 'react';
import { Link } from 'react-router-dom';
import Lock from '/assets/icons/lock.svg';
import Style, { PopupImage } from './style';
import firebase from '../firebase';

const Menu = () => {
  return (
    <Style>
      <div>
        <div className="wrapper-menu">
          <div className="topMenu">
            <img src={Lock} />
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/login1">
              {' '}
              Log In
            </Link>
          </div>
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
          </ul>
        </div>
      </div>
    </Style>
  );
  async function logout() {
    await firebase.logout();
    // props.history.push('/login1');
  }
};

export default Menu;
