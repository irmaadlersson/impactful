import React, { useState } from 'react';

import Button from 'components/UI/Button';
import Input from 'components/UI/Input';

import Style from './style';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../firebase';
import Google from 'src/assets/icons/google.png';
import Logo from 'src/assets/icons/ImpactfulLogo.png';

// const FormView = () => {
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [inputs, setInputs] = useState({
//     firstName: '',
//     lastName: '',
//     email: 'hello@humblebee.se',
//     password: '',
//     comment: '',
//     decisiveChoice: 'Red pill'
//   });

//   const onValueChange = (name, value) => {
//     setInputs(inputs => ({
//       ...inputs,
//       [name]: value
//     }));
//   };

//   const onSubmit = event => {
//     event.preventDefault();

//     setIsFormSubmitted(true);

//     // You probably wish to implement some actions with the form values here :)
//     console.info(inputs); /* eslint-disable-line no-console */
//   };

function FormView(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Style>
      <div className="wrapper">
        <form onSubmit={e => e.preventDefault() && false}>
          <div className="form">
            <h1 className="box_title">Welcome back!</h1>

            <Input
              className="input"
              type="email"
              label="Email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              autoComplete="username"
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              className="input"
              type="password"
              label="Password"
              id="password"
              name="password"
              placeholder="Enter password"
              required
              autoComplete="new-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <Button className="btn" stretch type="submit" onClick={login}>
              Log in
            </Button>
          </div>
        </form>
        <div className="linkwrapper">
          <div className="orWrapp">
            <hr />
            <p className="or">or</p>
            <hr />
          </div>

          {/* <img className="google" src={Google} /> */}

          {/* <p>
            Forgot password? <a href="/">Click here</a>
          </p> */}
          <p>
            No account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </Style>
  );

  async function login() {
    try {
      await firebase.login(email, password);
      props.history.replace('/projects');
      // console.log(`Login clicked`, email, 'password is secret');
    } catch (error) {
      alert(error.message);
    }
  }
}

export default withRouter(FormView);
