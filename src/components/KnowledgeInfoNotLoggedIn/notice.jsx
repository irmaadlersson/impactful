import React from 'react';
import Style from './style';
import IMG from 'assets/images/notLoggedIn.svg';

const index = () => {
  return (
    <Style>
      <div className="rectangle-big">
        <div className="rectangle-middle-big">
          <img className="img" src={IMG} />
        </div>
        <div className="text-box">
          <p className="h1">Join Impactful!</p>
          <p className="h2" style={{ marginTop: '5%' }}>
            Log in/sign up to access all research- and news articles.
          </p>

          <a className="btn" href="/login1">
            Start your impactful journey now
          </a>
        </div>
      </div>
    </Style>
  );
};

export default index;
