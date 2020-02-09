import React, { useEffect, useState, useContext } from 'react';
import Grid from 'components/UI/Grid';
import GridChild from 'components/UI/GridChild';
import Loader from 'compositions/Loader';
import getDataByEntry from 'data/getDataByEntry.js';
import Image from 'components/UI/Image';
import Style from './style';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import KnowledgeInfo from 'components/KnowledgeInfo';
import KnowledgeInfoNotLoggedIn from 'components/KnowledgeInfoNotLoggedIn';
import { AuthContext } from 'Auth';

const index = () => {
  const [data, setData] = useState(null);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      // console.log('inside fetch');
      const entry = await getDataByEntry('1Eh4we81Cgg10bNUKSy0e5');
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
            Style={{ marginTop: '60px' }}
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
            <div>
              <h1 className="h1-title">Knowledge Box</h1>
              <p className="text">
                Investing is complex and not always easy to understand. Find the right mix of
                education, research, news, and blogs in our knowledge box.
              </p>
            </div>
          </GridChild>
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
            {currentUser ? <KnowledgeInfo /> : <KnowledgeInfoNotLoggedIn />}
          </GridChild>
        </Grid>
      </Style>
    );
  }
};

export default index;
