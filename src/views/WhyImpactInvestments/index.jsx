import React, { useEffect, useState } from 'react';
import Grid from 'components/UI/Grid';
import GridChild from 'components/UI/GridChild';
import Loader from 'compositions/Loader';
import getDataByEntry from 'data/getDataByEntry.js';
import Image from 'components/UI/Image';
import Style from './style';
import WhyImpact from 'assets/images/why.svg';
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
              <h1 className="h1">Why impact investing?</h1>

              <p className="description">
                Impact investing challenges the long-held views that social and environmental issues
                should be addressed only by philanthropic donations, and that market investments
                should focus exclusively on achieving financial returns. The impact investing market
                offers diverse and viable opportunities for investors to advance social and
                environmental solutions through investments that also produce financial returns.
                Many types of investors are entering the growing impact investing market. Here are a
                few common investor motivations: Banks, pension funds, financial advisors, and
                wealth managers can provide client investment opportunities to both individuals and
                institutions with an interest in general or specific social and/or environmental
                causes. Institutional and family foundations can leverage significantly greater
                assets to advance their core social and/or environmental goals, while maintaining or
                growing their overall endowment. Government investors and development finance
                institutions can provide proof of financial viability private-sector investors while
                targeting specific social and environmental goals.{' '}
              </p>

              <p className="description" style={{ color: '#FCC30B' }}>
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
            <img className="why" src={WhyImpact} />
          </GridChild>
        </Grid>
      </Style>
    );
  }
};

export default index;
