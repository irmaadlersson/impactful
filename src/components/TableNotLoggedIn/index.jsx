import React, { useRef, useEffect, useState } from 'react';
import Grid from 'components/UI/Grid';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import GridChild from 'components/UI/GridChild';
import Hover from 'components/onHover';
import Loader from 'compositions/Loader';
import getDataByEntry from 'data/getDataByEntry.js';
import I from 'src/assets/icons/i.png';
import Info from 'src/assets/icons/info.svg';
import MarkedHeart from 'src/assets/icons/MarkedHeart.png';
import UnMarkedHeart from 'src/assets/icons/UnMarkedHeart.svg';
import SortArrow from 'src/assets/icons/arrowVector.svg';
import Search from 'src/assets/images/search-icon.png';
import NotLoggedIn from 'src/assets/images/notLoggedIn.svg';
import Image from 'components/UI/Image';
import ProjectCard from 'components/ProjectCard';

import Style from './style';

const index = () => {
  const [data, setData] = useState(null);
  const [popupShown, showPopup] = useState(false);

  //Toggler
  const [state, setState] = useState(true);

  function toggleFavorite() {
    state ? setState(false) : setState(true);
  }

  function toggle() {
    state ? setState(false) : setState(true);
  }

  //from hover component
  const [hoverRef, isHovered] = Hover();
  const [hoverRef2, isHovered2] = Hover();
  const [hoverRef3, isHovered3] = Hover();
  const [hoverRef4, isHovered4] = Hover();
  const [hoverRef5, isHovered5] = Hover();
  const [hoverRef6, isHovered6] = Hover();

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
  }, [searchTerm]);
  // SEARCH ENDS

  useEffect(() => {
    async function fetchData() {
      // console.log('inside fetch');
      const entry = await getDataByEntry('2CGQH7zMEgnWkCajXSRlYc');
      // console.log(entry);
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
                />
                {/* <Image className="search-icon" src={Search} />   */}
                <Image className="info" onClick={() => showPopupInfo(!popupShownInfo)} src={Info} />
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
                  <p className="pFilter">Maturity&nbsp; </p>
                </div>

                <div className="filterBy">
                  <p className="pFilter">Owner&nbsp; </p>
                </div>

                <div className="filterBy">
                  <p className="pFilter">Location&nbsp; </p>
                </div>
              </div>
            </div>

            <div className="FilterDivs">
              {!state && (
                <div className="ExpFilter">
                  A return, also known as a financial return, in its simplest terms, is the money
                  made or lost on an investment over some period of time.{' '}
                </div>
              )}
              {/* <div className="MatFilter">A return, also known as a financial return, 
                  in its simplest terms, is the money made or lost
                   on an investment over some period of time. </div>
                   <div className="ImpFilter">A return, also known as a financial return, 
                  in its simplest terms, is the money made or lost
                   on an investment over some period of time. </div>
                   <div className="RiskFilter">A return, also known as a financial return, 
                  in its simplest terms, is the money made or lost
                   on an investment over some period of time. </div>
                   <div className="OwnerFilter">A return, also known as a financial return, 
                  in its simplest terms, is the money made or lost
                   on an investment over some period of time. </div>
                   <div className="LocationFilter">A return, also known as a financial return, 
                  in its simplest terms, is the money made or lost
                   on an investment over some period of time. </div> */}
            </div>

            <br />

            {/*THEAD */}
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

              {/*TBODY */}

              <table className="table">
                <tbody>
                  <tr>
                    <td
                      className="cell"
                      style={{ color: '#5FBEC5' }}
                      onClick={() => showPopup(true)}
                    >
                      Azuri Luminosa Ltd Issue 3
                    </td>
                    <td className="cell">-</td>

                    <td className="cell">-</td>
                    <td className="cell">Energise Africa</td>
                    <td className="cell" onClick={toggleFavorite}>
                      {state ? (
                        <img className="favo" src={UnMarkedHeart} />
                      ) : (
                        <img src={MarkedHeart} />
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
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
            <div className="notLoggedInDiv">
              <img className="notLoggedInIMG" src={NotLoggedIn} />
              <div className="divJoin">
                <h1 className="h1Join">Join Impactful!</h1>
                <p className="pJoin">
                  Log in/sign up to view all investment options, currently we have six different
                  ones available.
                </p>
                <a href="/login1" style={{ textDecoration: 'none' }}>
                  <div className="investment-btn">
                    <p className="pBtn">Start your Impactful journey now</p>
                  </div>
                </a>
              </div>
            </div>
          </GridChild>

          {/*WHEN HOVER THEAD ELEMENTS */}
          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 2,
                start: 3
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            {isHovered && (
              <div className="hoverDiv">
                <h3>{data.fields.onHoverExpRet.fields.title}</h3>
                {data.fields.onHoverExpRet.fields.text}
              </div>
            )}
          </GridChild>
          <GridChild
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
            {isHovered2 && (
              <div className="hoverDiv">
                <h3>{data.fields.onHoverMat.fields.title}</h3>
                {data.fields.onHoverMat.fields.text}
              </div>
            )}
          </GridChild>
          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 2,
                start: 6
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            {isHovered3 && (
              <div className="hoverDiv">
                <h3>{data.fields.onHoverImpRat.fields.title}</h3>
                {data.fields.onHoverImpRat.fields.text}
              </div>
            )}
          </GridChild>
          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 2,
                start: 7
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            {isHovered4 && (
              <div className="hoverDiv">
                <h3>{data.fields.onHoverRiskRat.fields.title}</h3>
                {data.fields.onHoverRiskRat.fields.text}
              </div>
            )}
          </GridChild>
          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 2,
                start: 9
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            {isHovered5 && (
              <div className="hoverDiv">
                <h3>{data.fields.onHoverOwner.fields.title}</h3>
                {data.fields.onHoverOwner.fields.text}
              </div>
            )}
          </GridChild>
          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 2,
                start: 10
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            {isHovered6 && (
              <div className="hoverDiv">
                <h3>{data.fields.onHoverFavo.fields.title}</h3>
                {data.fields.onHoverFavo.fields.text}
              </div>
            )}
          </GridChild>
        </Grid>

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
