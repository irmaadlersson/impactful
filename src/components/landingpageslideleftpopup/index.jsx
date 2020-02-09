import React from 'react';
import Img from 'assets/icons/LP_rating_small.png';
import Style from './style';

const index = () => {
  return (
    <Style>
      <div className="backgroundImg-wrapper">
        <img className="img" src={Img} />

        <div className="textwrapper">
          <p className="text description">
            Thank you for showing your interest in our upcoming rating features. We will notify you
            as soon as it is up and running.
          </p>
        </div>
      </div>
    </Style>
  );
};

export default index;
