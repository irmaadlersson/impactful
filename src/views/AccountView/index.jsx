import React, { useEffect, useState } from 'react';
import Grid from 'components/UI/Grid';
import GridChild from 'components/UI/GridChild';
import Loader from 'compositions/Loader';
import getDataByEntry from 'data/getDataByEntry.js';
import Image from 'components/UI/Image';
import Style from './style';
import MarkedHeart from 'src/assets/icons/MarkedHeart.png';
import FavoHeart from 'src/assets/icons/favoHeart.png';
import SettingsImg from 'src/assets/icons/settings.png';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import MyFavorites from 'components/MyFavorites';

import Settings from 'components/Settings';

const index = () => {
  const [state, setState] = useState(true);

  const [popupShown, showPopup] = useState(true);

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
                columns: 10,
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
              <h1 className="title">My Account</h1>

              <p className="text">
                Here you can find your favorite investments and edit your settings.
              </p>
            </div>
          </GridChild>
          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 10,
                start: 2
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            {/* <div className="favo">
              <img className="icon" src={FavoHeart}></img>
              <p className="text" onClick={() => showPopup(false)}>
                My favorites
              </p>
            </div> */}

            <div className="tabs">
              <div className="tab">
                <input
                  type="radio"
                  name="css-tabs"
                  id="tab-1"
                  defaultChecked
                  className="tab-switch"
                />
                <label htmlFor="tab-1" className="tab-label">
                  My Favorites
                </label>
                <div className="tab-content">
                  <MyFavorites />
                </div>
              </div>

              <div className="tab">
                <input type="radio" name="css-tabs" id="tab-2" className="tab-switch" />
                <label htmlFor="tab-2" className="tab-label">
                  Settings
                </label>
                <div className="tab-content">
                  <Settings />
                </div>
              </div>
            </div>
          </GridChild>
          {/* <GridChild
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
            <div className="setting">
              <img className="icon" src={SettingsImg}></img>
              <p className="text">Settings</p>
            </div>
          </GridChild> */}
          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 10,
                start: 2
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            {/* <Settings /> */}
          </GridChild>

          {/* <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 10,
                start: 2
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
          
           
          </GridChild>  */}
        </Grid>
        {/* {popupShown && (
          <MyFavorites
            closePop={() => {
              showPopup(true);
            }}
          />
        )} */}
      </Style>
    );
  }
};

export default index;
