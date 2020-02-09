import React from 'react';
import Style from './style';
import Grid from 'components/UI/Grid';
import GridChild from 'components/UI/GridChild';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import logo from 'assets/images/logoHumble.png';
import Arrow from 'assets/icons/upArrow.png';
import Linkedin from 'assets/icons/linkedin.png';
import Facebook from 'assets/icons/facebook.png';
import Insta from 'assets/icons/insta.png';

const Footer = () => {
  return (
    <Style>
      <Grid width="100%" columns={[{ columns: 1 }, { columns: 10, break: breakpoints.desktop }]}>
        <div className="footer"></div>
        <GridChild
          columnSpan={[
            { start: 1 },
            {
              break: breakpoints.desktop,
              columns: 3,
              start: 2
            },
            {
              break: breakpoints.mobile,
              columns: 1,
              start: 1
            }
          ]}
        >
          <p className="text" style={{ fontWeight: 'bold', fontSize: '24px' }}>
            Get in touch
          </p>
        </GridChild>
        <GridChild
          columnSpan={[
            { start: 1 },
            {
              break: breakpoints.desktop,
              columns: 3,
              start: 2
            },
            {
              break: breakpoints.mobile,
              columns: 1,
              start: 1
            }
          ]}
        >
          <div className="row">
            <a href="/">Home</a>
            <a className="showOnMobile" href="/aboutus">
              About us
            </a>
            {/* <a href="/">Customer Service and feedback</a> */}
            <a href="/login1">Log In</a>

            <a href="/">Terms</a>

            <div className="social">
              <a href="https://www.instagram.com/joinimpactful/">
                <img src={Insta} />
              </a>
              <a href="https://www.facebook.com/joinimpactful/">
                <img src={Facebook} />
              </a>
              <a href="https://www.linkedin.com/company/joinimpactful/about/">
                <img src={Linkedin} />
              </a>
            </div>
          </div>
        </GridChild>
        <GridChild
          columnSpan={[
            { start: 1 },
            {
              break: breakpoints.desktop,
              columns: 3,
              start: 7
            },
            {
              break: breakpoints.mobile,
              columns: 1,
              start: 1
            }
          ]}
        >
          <div className="row2">
            <a href="/knowledgebox">Knowledge box</a>

            <a href="/projects">Investments</a>

            <a href="/aboutus">How it works</a>
            <br />

            <a href="mailto:impactful@humblebee.se">impactful@humblebee.se</a>
            {/* <p style={{ margin: '0' }}>+12345678</p> */}
          </div>
        </GridChild>
        <GridChild
          columnSpan={[
            { start: 1 },
            {
              break: breakpoints.desktop,
              columns: 3,
              start: 2
            },
            {
              break: breakpoints.mobile,
              columns: 1,
              start: 1
            }
          ]}
        >
          <div className="poweredBy">
            <p>
              Powered by&nbsp; <img src={logo} />
            </p>
          </div>
        </GridChild>
        <GridChild
          columnSpan={[
            { start: 1 },
            {
              break: breakpoints.desktop,
              columns: 3,
              start: 10
            },
            {
              break: breakpoints.mobile,
              columns: 1,
              start: 1
            }
          ]}
        >
          <img className="arrow" src={Arrow} />
        </GridChild>
      </Grid>
    </Style>
  );
};

export default Footer;
