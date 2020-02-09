import React, { useEffect, useState } from 'react';
import Grid from 'components/UI/Grid';
import GridChild from 'components/UI/GridChild';
import Loader from 'compositions/Loader';
import getDataByEntry from 'data/getDataByEntry.js';
import Image from 'components/UI/Image';
import Style from './style';
import MarkedHeart from 'src/assets/icons/MarkedHeart.png';
import FavoHeart from 'src/assets/icons/favoHeart.png';
import Settings from 'src/assets/icons/settings.png';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import I from 'src/assets/icons/i.png';
import SortArrow from 'src/assets/icons/SortArrow.png';
import Test from './userFavorites';

const index = () => {
  const [state, setState] = useState(true);

  function toggleFavorite() {
    state ? setState(false) : setState(true);
  }
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
            {/* THEAAAAAD */}
            <div className="wrapper">
              <table className="table">
                <thead className="gray-row">
                  <tr className="thead">
                    <td className="cellHeader">Name</td>
                    <td className="cellHeader">
                      Exp return <img className="arrow" src={SortArrow} />
                    </td>
                    <td className="cellHeader">
                      Maturity <img className="arrow" src={SortArrow} />
                    </td>

                    <td className="cellHeader">
                      Owner <img className="arrow" src={SortArrow} />
                    </td>
                    <td className="cellHeader">Favorites </td>
                  </tr>
                </thead>
              </table>

              {/* TBODY */}

              <Test />

              {/* <table className="table">
                <tbody>
                  <tr style={{ backgroundColor: '#f6f6f6' }}>
                    <td className="cell" style={{ color: '#5FBEC5' }}>
                      PROJEKTnamwwwn{' '}
                    </td>
                    <td className="cell">6%</td>
                    <td className="cell">8 years</td>

                    <td className="cell">Trine</td>
                    <td className="cell" onClick={toggleFavorite}>
                      {state ? <img src={MarkedHeart} /> : <img src={MarkedHeart} />}
                    </td>
                  </tr>
                  <tr>
                    <td className="cell" style={{ color: '#5FBEC5' }}>
                      PROJEKTnamn{' '}
                    </td>
                    <td className="cell">63%</td>
                    <td className="cell">83 years</td>

                    <td className="cell">Energizeee</td>
                    <td className="cell" onClick={toggleFavorite}>
                      {state ? <img src={MarkedHeart} /> : <img src={MarkedHeart} />}
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: '#f6f6f6' }}>
                    <td className="cell" style={{ color: '#5FBEC5' }}>
                      PROJEKTnamn{' '}
                    </td>
                    <td className="cell">6%</td>
                    <td className="cell">8 years</td>

                    <td className="cell">Trine</td>
                    <td className="cell" onClick={toggleFavorite}>
                      {state ? <img src={MarkedHeart} /> : <img src={MarkedHeart} />}
                    </td>
                  </tr>
                </tbody>
              </table> */}
              <br />
              <a href="/projects">+Add projects</a>
            </div>
          </GridChild>
        </Grid>
      </Style>
    );
  }
};

export default index;
