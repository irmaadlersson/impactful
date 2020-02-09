import React, { useEffect, useState, useContext } from 'react';
import Grid from 'components/UI/Grid';
import GridChild from 'components/UI/GridChild';
import Loader from 'compositions/Loader';
import getDataByEntry from 'data/getDataByEntry.js';
import Image from 'components/UI/Image';
import Style from './style';
import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import firebase from '../firebase';

const index = () => {
  const [state, setState] = useState(true);

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // console.log('inside fetch');
      const entry = await getDataByEntry('2CGQH7zMEgnWkCajXSRlYc');
      // console.log(entry);
      setData(entry);
    }
    fetchData();
  }, []);
  if (!data) {
    return <Loader fullScreen />;
  } else {
    return (
      <Style>
        <div className="flex">
          <div className="wrappInput">
            <p className="title">Full name</p>
            <p>{firebase.getCurrentUsername()}</p>
            <p className="title">Email</p>
            <p>{firebase.getCurrentUserEmail()}</p>
          </div>
          <div className="wrappInput2">
            <Input
              className="input"
              type="password"
              label="Enter current password"
              id="reEnterPassword"
              name="reEnterPassword"
              placeholder="keep this secret!"
              required
              value="inputs.reEnterPassword"
              autoComplete="new-password"
              onChange={event => onValueChange('reEnterPassword', event.target.value)}
            />
            <Input
              className="input"
              type="password"
              label="Enter new password"
              id="reEnterPassword"
              name="reEnterPassword"
              placeholder="keep this secret!"
              required
              value="inputs.reEnterPassword"
              autoComplete="new-password"
              onChange={event => onValueChange('reEnterPassword', event.target.value)}
            />
            <Input
              className="input"
              type="password"
              label="Re-enter password"
              id="reEnterPassword"
              name="reEnterPassword"
              placeholder="keep this secret!"
              required
              value="inputs.reEnterPassword"
              autoComplete="new-password"
              onChange={event => onValueChange('reEnterPassword', event.target.value)}
            />

            <Button nature="primary" stretch type="submit" className="btn">
              Save new settings
            </Button>
          </div>
        </div>
      </Style>
    );
  }
};

export default index;
