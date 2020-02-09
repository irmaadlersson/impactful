import React, { useEffect, useState } from 'react';
import Grid from 'components/UI/Grid';
import GridChild from 'components/UI/GridChild';
import Loader from 'compositions/Loader';
import getDataByEntry from 'data/getDataByEntry.js';
import Image from 'components/UI/Image';
import Style from './style';
import WhoIs from 'assets/images/whoIs.svg';
import BackBtn from 'src/assets/icons/blueBackBtn.svg';

import breakpoints from 'helpers/constants/breakpoints.mjs';

const index = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // console.log('inside fetch');
      const entry = await getDataByEntry('3RTr16xj1Qcz2GE5x7k7ZK');
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
          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 5,
                start: 2
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <div className="goals">
              <a href="knowledgebox">
                <Image className="backBtn" src={BackBtn} />
              </a>
              <h1 className="h1">Who are Impact Investors?</h1>

              <p className="description">
                There are actually different types of impact investors. For example, angel
                investors, venture capitalists, institutional investors, and non-traditional
                entities can all have an interest in sustainable startups. This is aside from
                financial corporations, charitable foundations, governments, and quasi-governmental
                agencies. Not all of these make impact investments in the same way - some providing
                only capital, while others might offer a mix of capital and grants, or even capital,
                grants, and expertise. Before approaching potential impact investors, it is vital
                that you do your homework first, and understanding as much as you can about your
                prospects to ensure a good fit.
              </p>
            </div>
          </GridChild>
          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 6,
                start: 7
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <img className="who" src={WhoIs} />
          </GridChild>
        </Grid>
      </Style>
    );
  }
};

export default index;
