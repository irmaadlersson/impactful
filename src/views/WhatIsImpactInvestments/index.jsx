import React, { useEffect, useState } from 'react';
import Grid from 'components/UI/Grid';
import GridChild from 'components/UI/GridChild';
import Loader from 'compositions/Loader';
import getDataByEntry from 'data/getDataByEntry.js';
import Image from 'components/UI/Image';
import Style from './style';
import WhatIs from 'assets/images/what_is.svg';
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
              <h1 className="h1">What is impact investing?</h1>

              <p className="description">
                Impact investments are investments made with the intention to generate positive,
                measurable social and environmental impact alongside a financial return. Impact
                investments can be made in both emerging and developed markets, and target a range
                of returns from below market to market rate, depending on investors' strategic
                goals. The growing impact investment market provides capital to address the world’s
                most pressing challenges in sectors such as sustainable agriculture, renewable
                energy, conservation, microfinance, and affordable and accessible basic services
                including housing, healthcare, and education.{' '}
              </p>

              <p className="description" style={{ color: '#2B858B' }}>
                Source: Global Impact Investing Network (GIIN)
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
            <img className="whatIs" src={WhatIs} />
          </GridChild>
        </Grid>
      </Style>
    );
  }
};

export default index;
