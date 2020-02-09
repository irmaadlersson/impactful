import React from 'react';
import Grid from 'components/UI/Grid';
import GridChild from 'components/UI/GridChild';
import Style from './style';
import Comingsoon from 'src/assets/images/comingsoon.png';
import breakpoints from 'helpers/constants/breakpoints.mjs';

const index = () => {
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
              columns: 12,
              start: 1
            },
            {
              break: breakpoints.mobile,
              columns: 1,
              start: 1
            }
          ]}
        >
          <img src={Comingsoon} />
        </GridChild>
      </Grid>
    </Style>
  );
};
export default index;
