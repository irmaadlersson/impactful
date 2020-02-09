import React, { useEffect, useState } from 'react';
import Grid from 'components/UI/Grid';
import GridChild from 'components/UI/GridChild';
import Loader from 'compositions/Loader';
import getDataByEntry from 'data/getDataByEntry.js';
import Style from './style';
import Create from 'assets/icons/create.png';
import Learn from 'assets/icons/learn.png';
import Find from 'assets/icons/find.png';
import Invest from 'assets/icons/invest.png';
import Impact from 'assets/icons/impactRating.png';
import Monitor from 'assets/icons/monitor.png';
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
                columns: 6,
                start: 4
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <h1 className="h1">How it works</h1>

            <p className="textAboutUs">
              Impactful is a collaborative investment platform that brings together impact
              investment opportunities and investors. Our vision is to establish a new normal where
              making an impact and profit becomes the new standard in investment behavior.
            </p>
          </GridChild>

          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 4,
                start: 3
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <div className="col1Desktop">
              <div className="box">
                <h1 className="h1Step">Create account</h1>
                <img className="imgAboutUs" src={Create} />

                <p className="pStep">
                  Start your Impactful journey by creating your account with us and get unlimited
                  access to our knowledge box and investment list.
                </p>
              </div>

              <div className="boxHeight">
                <h1 className="h1Step">Find your investment</h1>
                <img className="imgAboutUs" src={Find} />
                <p className="pStep">
                  Impactful gathers all impact investment options to make it easy for you to make
                  the right choice. You can create a list of your favorites or know more about each
                  investment.{' '}
                </p>
              </div>

              <div className="box">
                <h1 className="h1Step">Monitor (upcoming)</h1>
                <img className="imgAboutUs" src={Monitor} />
                <p className="pStep">
                  Keeping track of your impact investments can be difficult. Impactful is working on
                  creating a portfolio manager that allows you to monitor all your investments in
                  one place.
                </p>
              </div>
            </div>
          </GridChild>

          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 4,
                start: 7
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <div className="col2Desktop">
              <div className="box">
                <h1 className="h1Step">Learn about impact investing</h1>
                <img className="imgAboutUs" src={Learn} />
                <p className="pStep">
                  Investing is complex and not always easy to understand. Impactful provides the
                  right mix of education, research, news and blogs in the Knowledge Box.
                </p>
              </div>

              <div className="boxHeight">
                <h1 className="h1Step">Invest & repayment </h1>
                <img className="imgAboutUs" src={Invest} />
                <p className="pStep">
                  When you’ve found an investment option you want to invest in, you need to go to
                  our partners websites and invest directly through them. Your investment will fund
                  a loan to a company working with distributing renewable energy in exposed areas.
                  If the company succeeds to pay back the loan with interest to our partner, you
                  will get back your investment plus profit!
                </p>
              </div>

              <div className="box">
                <h1 className="h1Step">Impact rating (upcoming)</h1>
                <img className="imgAboutUs" src={Impact} />
                <p className="pStep">
                  We are working on inventing a standardized rating system to help you make the
                  right choice
                </p>
              </div>
            </div>
          </GridChild>

          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 6,
                start: 4
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <div className="wrapper">
              <h1 className="h1">{data.fields.title}</h1>
              <p className="textAboutUs">{data.fields.text}</p>
            </div>
          </GridChild>

          {/*MEMBER MAPPNING */}
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
            <div>
              {data.fields.member &&
                data.fields.member.map((item, id, index) => {
                  // console.log(`members`, item, index);
                  return (
                    <div key={`${id}`} className="wrapper-member">
                      <img className="imgMember" src={item.fields.img.fields.file.url} />
                      <p className="name">{item.fields.name}</p>
                      <p className="role">{item.fields.role}</p>
                    </div>
                  );
                })}
            </div>
          </GridChild>

          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 6,
                start: 4
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <div className="wrapper">
              <h1 className="h1">Our partners</h1>
              <p className="textAboutUs">
                All investment opportunities on Impactful come from our carefully chosen partners
                that all are investment platforms specialized in impact investing.
              </p>
            </div>
          </GridChild>

          {/*PARTNERS MAPPNING */}

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
            <div>
              <div className="flexbox">
                {data.fields.partner &&
                  data.fields.partner.map((item, id, index) => {
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
              <div className="textAboutUs">
                <p>Interested in becoming one of our partners? </p>
                <a className="clickHere" href="mailto:impactful@humblebee.se">
                  Click here!
                </a>
              </div>
            </div>
          </GridChild>
        </Grid>
      </Style>
    );
  }
};

export default index;
