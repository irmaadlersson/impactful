import React from 'react';
import Img from 'assets/icons/GLP_portfolio_small.png';
import Style from './style';

const index = () => {
  return (
    <Style>
      <div className="backgroundImg-wrapper">
        <img className="img" src={Img} />

        <div className="textwrapper">
          <p className="text description">
            Thank you for showing your interest in our upcoming Portfolio Monitor. Please enter your
            email to get notified when it is up and running.
          </p>
        </div>
      </div>
    </Style>
  );
};

export default index;
