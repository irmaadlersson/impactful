import React, { useEffect, useState } from 'react';
import Grid from 'components/UI/Grid';
import GridChild from 'components/UI/GridChild';
import Loader from 'compositions/Loader';
import Arrow from 'assets/icons/upArrow.png';
import getDataByEntry from 'data/getDataByEntry.js';
import Image from 'components/UI/Image';
import Style, { ButtonStyle } from './style';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import Popup from '/components/landingpageslide';
import Popup2 from '/components/landingpageslideleft';

const index = () => {
  const [data, setData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  function handleClickRight() {
    // console.log('clicked arrow');
    setShowPopup(!showPopup);
  }
  function handleClickLeft() {
    // console.log('clicked arrow');
    setShowPopup2(!showPopup2);
  }

  useEffect(() => {
    async function fetchData() {
      // console.log('inside fetch');
      const entry = await getDataByEntry('4rkX8ufbCyolos7iwZcmHD');
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
        <React.Fragment>
          <Grid
            width="100%"
            columns={[{ columns: 1 }, { columns: 12, break: breakpoints.desktop }]}
            rowGap={100}
            maxWidth="1440px"
          >
            {/* arbetar på img för att få den responsiv */}
            <div className="backgroundImg-wrapper">
              {/* <Image
                className="backgroundImg"
                style={{
                  width: '100%',
                  position: 'relative',
                  zIndex: '-1',
                  backgroundSize: 'cover',
                  background: 'rgba(0, 0, 0, 0.4)'
                }}
                caption="nice responsive image"
                src={data.fields.backgroundImg.fields.file.url}
                // srcset="image-320px.jpg 20em, image-480px.jpg 30em, image-768px.jpg 48em"
                sizes="auto"
              /> */}
            </div>
            <GridChild
              style={{ height: '679px' }}
              columnSpan={[
                { start: 1 },
                {
                  break: breakpoints.desktop,
                  columns: 5,
                  start: 1
                },
                {
                  break: breakpoints.mobile,
                  columns: 1,
                  start: 1
                }
              ]}
            >
              {showPopup && <Popup />}
              {showPopup2 && <Popup2 />}
              <Image
                src={Arrow}
                className={`arrowRight ${showPopup ? 'arrowRightClicked' : 'arrowRight'}`}
                onClick={handleClickRight}
              />
              <Image
                src={Arrow}
                className={`arrowLeft ${showPopup2 ? 'arrowLeftClicked' : 'arrowLeft'}`}
                onClick={handleClickLeft}
              />

              <img className="imgLeft" src={data.fields.imgTop.fields.file.url} />
              <div className="ball-wrapper">
                <div className={`ball ${showPopup2 ? 'ball left' : 'ball'}`}></div>
                <div
                  className={`ball ${
                    showPopup ? 'ball' : `${showPopup2 ? 'ball' : 'ball middle'}`
                  }`}
                ></div>
                <div className={`ball ${showPopup ? 'ball right' : 'ball'}`}></div>
              </div>
            </GridChild>
            <GridChild
              columnSpan={[
                { start: 1 },
                {
                  break: breakpoints.desktop,
                  columns: 6,
                  start: 6
                },
                {
                  break: breakpoints.mobile,
                  columns: 1,
                  start: 1
                }
              ]}
            >
              <div className="textwrapper">
                <p className="slogan">{data.fields.slogan}</p>
                <p className="hashtag">{data.fields.hashtag}</p>
              </div>

              <div style={{ display: 'flex' }}>
                <div style={{ width: '100px' }}></div>
                <a href="/projects" style={{ textDecoration: 'none' }}>
                  <div className="find-investments-btn">
                    <p>Find investments</p>
                  </div>
                </a>
                <div style={{ width: '100px' }}></div>

                <a href="/signup" style={{ textDecoration: 'none' }}>
                  <div className="get-started-btn">
                    <p>Start my impactful journey</p>
                  </div>
                </a>
              </div>
            </GridChild>
            <GridChild
              columnSpan={[
                { start: 1 },
                {
                  break: breakpoints.desktop,
                  columns: 3,
                  start: 3
                },
                {
                  break: breakpoints.mobile,
                  columns: 1,
                  start: 1
                }
              ]}
            >
              {/* What is impact investments img */}
              <div className="goalsImg">
                <img src={data.fields.imgWhatis.fields.file.url} />
              </div>
            </GridChild>
            <GridChild
              columnSpan={[
                { start: 1 },
                {
                  break: breakpoints.desktop,
                  columns: 4,
                  start: 8
                },
                {
                  break: breakpoints.mobile,
                  columns: 1,
                  start: 1
                }
              ]}
            >
              {/* our whatis impact txt */}
              <div className="goals" style={{ textAlign: 'right' }}>
                <h1 className="h1">{data.fields.whatIsImpact.fields.title}</h1>

                <p className="description">{data.fields.whatIsImpact.fields.text}</p>

                <a className="aBtnFindOut" style={{ textDecoration: 'none' }} href="/knowledgebox">
                  Find out more
                </a>
              </div>
            </GridChild>
            <GridChild
              columnSpan={[
                { start: 1 },
                {
                  break: breakpoints.desktop,
                  columns: 4,
                  start: 8
                },
                {
                  break: breakpoints.mobile,
                  columns: 1,
                  start: 1
                }
              ]}
            ></GridChild>

            <GridChild
              style={{ height: '251px' }}
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
              {/* our mission txt */}
              <div className="goals-mission-text">
                <h1 className="h1-mission">{data.fields.mission.fields.title}</h1>

                <p className="description-mission">{data.fields.mission.fields.text}</p>

                <div className="wrapp-btn-mission">
                  <div>
                    <a className="aBtn" style={{ textDecoration: 'none' }} href="/aboutus">
                      How Impactful works
                    </a>
                  </div>
                </div>
              </div>
            </GridChild>

            <GridChild
              style={{ height: '251px' }}
              columnSpan={[
                { start: 1 },
                {
                  break: breakpoints.desktop,
                  columns: 4,
                  start: 8
                },
                {
                  break: breakpoints.mobile,
                  columns: 1,
                  start: 1
                }
              ]}
            >
              {/* our mission img */}
              <div className="goals-mission">
                <img src={data.fields.imgGoal.fields.file.url} />
              </div>
            </GridChild>

            <GridChild
              style={{ height: '260px' }}
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
              {/* our vision img */}

              <div className="goals">
                <img src={data.fields.imgVision.fields.file.url} />
              </div>
            </GridChild>
            <GridChild
              style={{ height: '260px' }}
              columnSpan={[
                { start: 1 },
                {
                  break: breakpoints.desktop,
                  columns: 4,
                  start: 8
                },
                {
                  break: breakpoints.mobile,
                  columns: 1,
                  start: 1
                }
              ]}
            >
              {/* our vision txt */}
              <div className="goals" style={{ textAlign: 'right' }}>
                <h1 className="h1-vision">{data.fields.vision.fields.title}</h1>
                <p className="description-vision">{data.fields.vision.fields.text}</p>
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
              {/* our partners txt */}
              <div className="goals-partners">
                <h1 className="h1-partners">{data.fields.partnerstxt.fields.title}</h1>
                <p className="description-partners">{data.fields.partnerstxt.fields.text}</p>
              </div>
            </GridChild>
            <GridChild
              columnSpan={[
                { start: 1 },
                {
                  break: breakpoints.desktop,
                  columns: 4,
                  start: 8
                },
                {
                  break: breakpoints.mobile,
                  columns: 1,
                  start: 1
                }
              ]}
            >
              {/* our parthers img */}

              <div className="goals-img-partners">
                <img src={data.fields.imgPartners.fields.file.url} />
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
              <div className="wrapper">
                {/* <h1 className="h1">Our partners</h1>
                <hr />
                <p className="text">Our partners are....</p> */}

                <div className="flexbox">
                  {data.fields.logopartners &&
                    data.fields.logopartners.map((item, id, index) => {
                      // console.log(`partners`, item, index);
                      return (
                        <div key={`${id}`} className="wrapper-partner">
                          <a href={item.fields.url} rel="noopener noreferrer" target="_blank">
                            <img className="img-partner" src={item.fields.img.fields.file.url} />
                          </a>
                        </div>
                      );
                    })}
                </div>
              </div>
            </GridChild>
          </Grid>
        </React.Fragment>
      </Style>
    );
  }
};

export default index;
