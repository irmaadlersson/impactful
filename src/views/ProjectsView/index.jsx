import React, { useEffect, useState, useContext } from 'react';
import Grid from 'components/UI/Grid';
import InfoPopup from 'components/InfoPopup';
import ProjectCard from 'components/ProjectCard';
import Table from 'components/Table';
import TableNotLoggedIn from 'components/TableNotLoggedIn';
import GridChild from 'components/UI/GridChild';
import Loader from 'compositions/Loader';
import getDataByEntry from 'data/getDataByEntry.js';
import Image from 'components/UI/Image';
import Info from 'src/assets/images/infocirkle.png';
import Style from './style';
import breakpoints from 'helpers/constants/breakpoints.mjs';

import { AuthContext } from 'Auth';

const index = () => {
  const [data, setData] = useState(null);
  const [popupShown, showPopup] = useState(false);

  const { currentUser } = useContext(AuthContext);

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
        <Grid
          width="100%"
          columns={[{ columns: 1 }, { columns: 12, break: breakpoints.desktop }]}
          rowGap={20}
          maxWidth="1440px"
        >
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
            <div className="text1">
              <h1 className="investments">Investments</h1>

              <p className="text1">
                Here you can sort and filter all investment opportunities from our partners.
              </p>
            </div>
          </GridChild>
        </Grid>
        {/* true && expression always evaluates to expression, and false && expression always evaluates to false.
      Therefore, if the condition is true, the element right after && will appear in the output.
      If it is false, React will ignore and skip it. */}

        {/* INFOPOPUP RUTA  
        {popupShown && (
          <InfoPopup
            closePop={() => {
              showPopup(false);
            }}
          />
        )}
        <Image onClick={() => showPopup(!popupShown)} src={Info} /> */}
        {currentUser ? <Table /> : <TableNotLoggedIn />}
      </Style>
    );
  }
};

export default index;
