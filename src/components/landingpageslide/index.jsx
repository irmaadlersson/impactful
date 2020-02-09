import React, { useEffect, useState, useContext } from 'react';
import Img from 'assets/images/LP_portfolio.svg';
import Style, { PopupImage } from './style';
import Notice from '../landingpageslidepopup';
import NoticeNotLoggedIn from '../landingpageslidepopupNotLoggedIn';
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
          <p className="slogan">Monitor all your impact investments in one place.</p>
          <p className="text description">
            Keeping track of all your impact investments can be difficult. Impactful works on making
            it easy.
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
