import React, { useState, useContext } from 'react';
import Img from 'assets/images/LP_rating.svg';
import Style from './style';
import Notice from '../landingpageslideleftpopup';
import NoticeNotLoggedIn from '../landingpageslideleftpopupNotLoggedIn';

import { AuthContext } from 'Auth';

const index = () => {
  const [showNotice, setShowNotice] = useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <Style>
      <div className="backgroundImg-wrapper">
        <img className="img" src={Img} />

        <div className="textwrapper">
          <p className="text">Upcoming</p>
          <p className="slogan">Risk and impact ratings for all your investments.</p>
          <p className="text description">
            Making the right choice can be difficult. Impactful works on providing one standartized
            framework for all your impact investments.
          </p>
          {currentUser ? showNotice && <Notice /> : showNotice && <NoticeNotLoggedIn />}

          <div>
            <button
              className={`btn ${showNotice ? 'exitbtn' : 'btn'}`}
              style={{ textDecoration: 'none', color: 'white' }}
              onClick={(console.log(`clicked notify me`), () => setShowNotice(!showNotice))}
            >
              {`${showNotice ? 'X' : 'Notify me'}`}
            </button>
          </div>
        </div>
      </div>
    </Style>
  );
};

export default index;
