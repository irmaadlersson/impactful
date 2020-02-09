import React, { useEffect, useState } from 'react';
import { StyledPre } from 'src/views/FormView/style';
import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import Textarea from 'components/UI/Textarea';
import Select from 'components/UI/Select';
import H1 from 'components/UI/H1';
import Style from './style';
import Google from 'src/assets/icons/google.png';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../firebase';
import Logo from 'src/assets/icons/ImpactfulLogo.png';

function resetPassword(reset) {
  var emailAddress = reset;

  firebase
    .auth()
    .sendPasswordResetEmail(emailAddress)
    .then(function() {
      // Email sent.
    })
    .catch(function(error) {
      // An error happened.
    });
}

function FormView(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [quote, setQuote] = useState('');
  const [reset, setReset] = useState('');

  return (
    <Style>
      <div className="wrapper">
        <div className="form" onSubmit={e => e.preventDefault() && false}>
          <H1 className="box_title">Create your account now</H1>
          <form name="example-form">
            {/* <Input
              className="input"
              type="text"
              label="quote"
              id="quote"
              name="quote"
              placeholder="quote"
              value={quote}
              onChange={e => setQuote(e.target.value)}
            /> */}
            <Input
              className="input"
              type="text"
              label="Username"
              id="name"
              name="name"
              placeholder="Username"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <Input
              className="input"
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
            <Input
              className="input"
              type="password"
              label="Password"
              id="password"
              name="password"
              placeholder="Password"
              required
              autoComplete="new-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {/* <Input
              className="input"
              type="password"
              label="Re-enter password"
              id="reEnterPassword"
              name="reEnterPassword"
              placeholder="keep this secret!"
              required
              value={inputs.reEnterPassword}
              autoComplete="new-password"
              onChange={event => onValueChange('reEnterPassword', event.target.value)}
            /> */}

            <Button className="btn" nature="primary" stretch type="submit" onClick={onRegister}>
              Get Started
            </Button>
            <div className="google-wrapper">
              <div className="orWrapp">
                <hr className="hr" />
                <p className="or">or</p>
                <hr className="hr" />
              </div>
              {/* <p className="account">
                <img src={Google} />
              </p> */}
              <p className="account">
                &nbsp; Already have an account? <a href="http://localhost:3000/login1">Log in</a>
              </p>
            </div>
          </form>
          {/* try reset password */}

          {/*  */}
        </div>
      </div>
    </Style>
  );
  async function onRegister() {
    try {
      await firebase.register(name, email, password);
      // await firebase.addQuote(quote);
      props.history.replace('/');
    } catch (error) {
      alert(error.message);
    }
  }
}
export default withRouter(FormView);
