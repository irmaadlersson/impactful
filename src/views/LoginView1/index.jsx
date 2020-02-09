import React, { useEffect, useState } from 'react';
import Grid from 'components/UI/Grid';
import GridChild from 'components/UI/GridChild';
import Loader from 'compositions/Loader';
import getDataByEntry from 'data/getDataByEntry.js';
import Alert from 'components/UI/Alert';
import Image from 'components/UI/Image';
import Style from './style';
import breakpoints from 'helpers/constants/breakpoints.mjs';

import { StyledPre } from 'src/views/FormView/style';
import Login from 'src/components/Login';
import Figure from 'src/assets/images/loginFigure.png';
import GreenPattern from 'src/assets/icons/greenpattern2.png';
import Google from 'src/assets/icons/google.png';

const LoginView1 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // console.log('inside fetch');
      const entry = await getDataByEntry('4theAj1jCm1Y7wLZmmJ5BP');
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
        <Grid
          width="100%"
          columns={[{ columns: 1 }, { columns: 12, break: breakpoints.desktop }]}
          rowGap={20}
        >
          {/* <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 4,
                start: 1
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <div className="pattern-wrapper">
              <img className="GreenPattern" src={GreenPattern} />
            </div>
          </GridChild>
          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 4,
                start: 2
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <div className="text">
              <h1>Make impact everyday!</h1>
              <p>Log in to continue your impactful journey</p>
            </div>
          </GridChild>
          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 4,
                start: 2
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <img className="figure" src={Figure} />
          </GridChild> */}
          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 4,
                start: 5
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <Login />
          </GridChild>
        </Grid>
      </Style>
    );
  }
};

export default LoginView1;
