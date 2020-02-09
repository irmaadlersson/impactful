import React from 'react';
import { Link } from 'react-router-dom';
import Style, { PopupImage } from './style';
import firebase from '../firebase';

const Menu = () => {
  return (
    <Style>
      <div>
        <div className="wrapper-menu">
          <ul style={{ margin: '0%' }}>
            <div className="cell">
              <li>
                <Link to="account" className="link">
                  <span>My account</span>
                </Link>
              </li>
            </div>
            <hr />
            <div className="cell">
              <li>
                <Link to="account" className="link">
                  <span>Settings</span>
                </Link>
              </li>
            </div>
            <hr />
            <div className="cell">
              <li>
                <span className="link" onClick={logout}>
                  Logout
                </span>
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
