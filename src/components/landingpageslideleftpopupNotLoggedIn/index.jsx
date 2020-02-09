import React, { useState } from 'react';
import Img from 'assets/icons/LP_rating_small.png';
import Style from './style';
import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import firebase from '../firebase';

const index = () => {
  const [email, setEmail] = useState('');

  return (
    <Style>
      <div className="backgroundImg-wrapper">
        <img className="img" src={Img} />

        <div className="textwrapper">
          <p className="text description">
            Thank you for showing your interest in our upcoming rating features. We will notify you
            as soon as it is up and running.
          </p>

          {/* <form
            className="formwrapper"
            action="mailto:someone@example.com"
            method="post"
            enctype="text/plain"
          >
            <input className="email" type="text" placeholder="Enter email" name="mail" />
            <input className="submitbtn" type="submit" value="Notify me" />
          </form> */}
          <div className="form" onSubmit={e => e.preventDefault() && false}>
            <form name="example-form">
              <Input
                className="email"
                type="email"
                label="Email"
                id="email"
                name="email"
                placeholder="Email"
                required
                autoComplete="off"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

              <Button
                className="submitbtn="
                submitbtn
                nature="primary"
                stretch
                type="submit"
                onClick={sendEmail}
              >
                Get Started
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Style>
  );
  async function sendEmail() {
    try {
      await firebase.addEmail(email);
      alert('Thank you, we will notify you when our upcoming features are ready.');

      // props.history.replace('/');
    } catch (error) {
      alert(error.message);
    }
  }
};

export default index;
