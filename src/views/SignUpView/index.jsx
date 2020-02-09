import React, { useEffect, useState } from 'react';
import Grid from 'components/UI/Grid';
import GridChild from 'components/UI/GridChild';
import Loader from 'compositions/Loader';
import getDataByEntry from 'data/getDataByEntry.js';
import Image from 'components/UI/Image';
import Style from './style';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import Signup from 'src/components/SignUp';
import Greenpattern from 'assets/icons/greenpattern.png';
import Walking from 'assets/icons/walking.png';

const SignUpView = () => {
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
          style={{ height: '65vh' }}
          columns={[{ columns: 1 }, { columns: 12, break: breakpoints.desktop }]}
        >
          {/* <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 3,
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
              <img src={Greenpattern} />
              <div className="text-wrapper">
                <h1 className="title">Join Us Today!</h1>
                <p className="text">
                  You are just a step away from a profitable and impactful future.
                </p>
              </div>
            </div>
          </GridChild>
          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 2,
                start: 5
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <img className="imgperson" src={Walking} />
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
            <Signup />
          </GridChild>
        </Grid>
      </Style>
    );
  }
};

export default SignUpView;
