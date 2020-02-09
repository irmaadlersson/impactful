import React, { useRef, useEffect, useState, useContext } from 'react';
import Grid from 'components/UI/Grid';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import GridChild from 'components/UI/GridChild';
import Hover from 'components/onHover';
import Loader from 'compositions/Loader';
import getDataByEntry from 'data/getDataByEntry.js';
import I from 'src/assets/icons/i.png';
import Info from 'src/assets/icons/info.svg';
import MarkedHeart from 'src/assets/icons/MarkedHeart.png';
import SortArrow from 'src/assets/icons/arrowVector.svg';
import Search from 'src/assets/icons/searchIcon.png';
import Image from 'components/UI/Image';
import ProjectCard from 'components/ProjectCard';
import Test from './table';
import Style from './style';
import InfoPopup from 'components/InfoPopup';
import { AuthContext } from 'Auth';

const index = () => {
  const [data, setData] = useState(null);
  const [popupShown, showPopup] = useState(false);
  const [popupShownInfo, showPopupInfo] = useState(false);
  const { currentUser } = useContext(AuthContext);

  //Toggler
  const [state, setState] = useState(true);
  function toggle() {
    state ? setState(false) : setState(true);
  }

  // SEARCH STARTS
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results =
      data &&
      data.fields.table.filter(company =>
        company.fields.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setList(results);
  }, [data, searchTerm]);
  // SEARCH ENDS

  useEffect(() => {
    async function fetchData() {
      const entry = await getDataByEntry('2CGQH7zMEgnWkCajXSRlYc');
      setData(entry);
      setList(entry.fields.table);
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
            {/*FILTER AND SEARCH BAR */}

            <div className="seachDiv">
              <div className="searchBox">
                <input
                  className="searchBar"
                  type="text"
                  placeholder="Search projects and companys..."
                  value={searchTerm}
                  onChange={handleChange}
                  onClick={toggle}
                />
                {/* <Image className="search-icon" src={Search} />   */}
              </div>
              {/* <InfoPopup/> */}

              <ul>
                {searchResults.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="text-wrapp">
                <div className="filterBy">
                  <p className="pFilter" onClick={toggle}>
                    Expected return&nbsp;{' '}
                  </p>
                </div>

                <div className="filterBy">
                  <p className="pFilter" onClick={toggle}>
                    Maturity&nbsp;{' '}
                  </p>
                </div>

                <div className="filterBy">
                  <p className="pFilter" onClick={toggle}>
                    Owner&nbsp;{' '}
                  </p>
                </div>
              </div>
              <Image className="info" onClick={() => showPopupInfo(!popupShownInfo)} src={Info} />
            </div>

            {/* TOGGLE INFO */}
            <div className="FilterDivs">
              {!state && (
                <div className="ExpFilter">This function is not active in the beta version.</div>
              )}
            </div>

            <br />

            {/*THEAD */}
            <div className="wrapper">
              <table className="table">
                <thead className="gray-row">
                  <tr className="thead">
                    <td className="cellHeader">Name</td>
                    <td className="cellHeader">
                      Exp return <img className="arrow" src={SortArrow} onClick={toggle} />
                    </td>
                    <td className="cellHeader">
                      Maturity <img className="arrow" src={SortArrow} onClick={toggle} />
                    </td>

                    <td className="cellHeader">
                      Owner <img className="arrow" src={SortArrow} onClick={toggle} />
                    </td>
                    <td className="cellHeader">Favorites </td>
                  </tr>
                </thead>
              </table>

              {/* TBODY */}
              <Test name={currentUser.uid} />

              {/* {list &&
                list.map((item, id) => {
                  console.log(`table`, item, id);
                  return (
                    <div key={`${id}`}>
                      <table className="table">
                        <tbody>
                          <tr className={id % 2 === 0 ? 'white-row' : 'gray-row'}>
                            <td
                              className="cell"
                              style={{ color: '#5FBEC5' }}
                              onClick={() => showPopup(true)}
                            >
                              {item.fields.name}
                            </td>
                            <td className="cell">{item.fields.expReturn}%</td>
                            <td className="cell">{item.fields.maturity} years</td>

                            <td className="cell">{item.fields.owner}</td>
                            <td className="cell" onClick={toggleFavorite}>
                              {state ? (
                                <img
                                  onClick={console.log(`this item`)}
                                  src={item.fields.favorites.fields.file.url}
                                />
                              ) : (
                                <img src={MarkedHeart} />
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  );
                })} */}
            </div>
          </GridChild>
        </Grid>

        {/* INFO POPUP */}
        {popupShownInfo && (
          <InfoPopup
            closePop={() => {
              showPopupInfo(false);
            }}
          />
        )}
        {/* PROJECTCARD POPUP */}
        {popupShown && (
          <ProjectCard
            closePop={() => {
              showPopup(false);
            }}
          />
        )}
      </Style>
    );
  }
};

export default index;
