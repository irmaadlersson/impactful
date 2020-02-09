import React, { useEffect, useState } from 'react';
import Grid from 'components/UI/Grid';
import GridChild from 'components/UI/GridChild';
import Loader from 'compositions/Loader';
import getDataByEntry from 'data/getDataByEntry.js';
import Style from './style';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import Notice from './notice';

const index = () => {
  const [data, setData] = useState(null);

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
            {/* -----------------------mobile--------------------*/}
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
                  Blogs
                </label>
                <div className="tab-content">
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
                    <p className="h1">Blogs</p>
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
                    <div className="rectangle-mobile">
                      <div className="slot">
                        <div className="inline">
                          <p className="h3"></p>
                          <p className="h3"></p>
                        </div>
                        <p className="h2">Why Impactful exists</p>
                        <a
                          className="link"
                          href="https://medium.com/@hannes.marten/why-impactful-exists-d190b5457e9d"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Go to blog
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
                        start: 2
                      },
                      {
                        break: breakpoints.mobile,
                        columns: 1,
                        start: 1
                      }
                    ]}
                  >
                    <div className="rectangle-mobile">
                      <div className="slot">
                        <div className="inline">
                          <p className="h3"></p>
                          <p className="h3"></p>
                        </div>
                        <p className="h2">Echoing Green Blog</p>
                        <a
                          className="link"
                          href="https://echoinggreen.org/news/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Go to blog
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
                        start: 5
                      },
                      {
                        break: breakpoints.mobile,
                        columns: 1,
                        start: 1
                      }
                    ]}
                  >
                    <GridChild
                      columnSpan={[
                        { start: 1 },
                        {
                          break: breakpoints.desktop,
                          columns: 3,
                          start: 5
                        },
                        {
                          break: breakpoints.mobile,
                          columns: 1,
                          start: 1
                        }
                      ]}
                    >
                      <div className="rectangle-mobile">
                        <div className="slot">
                          <div className="inline">
                            <p className="h3"></p>
                            <p className="h3"></p>
                          </div>
                          <p className="h2">Global Impact Investing Network </p>
                          <a
                            className="link"
                            href="https://thegiin.org/research-and-opinions/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Go to blog
                          </a>
                        </div>
                      </div>
                    </GridChild>
                  </GridChild>
                </div>
              </div>

              <div className="tab">
                <input type="radio" name="css-tabs" id="tab-2" className="tab-switch" />
                <label htmlFor="tab-2" className="tab-label">
                  Learn
                </label>
                <div className="tab-content">
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
                    <div className="rectangle-mobile">
                      <div className="slot">
                        <div className="inline">
                          <p className="h3">Impactful |</p>
                          <p className="h3">&nbsp;31 OCT 2019</p>
                        </div>
                        <p className="h2">What is impact investing?</p>
                        <a className="link" href="/whatis">
                          Read more
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
                        start: 5
                      },
                      {
                        break: breakpoints.mobile,
                        columns: 1,
                        start: 1
                      }
                    ]}
                  >
                    <div className="rectangle-mobile">
                      <div className="slot">
                        <div className="inline">
                          <p className="h3">Impactful |</p>
                          <p className="h3">&nbsp;31 OCT 2019</p>
                        </div>
                        <p className="h2">Why impact investing?</p>
                        <a className="link" href="/whyimpact">
                          Read more
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
                        start: 8
                      },
                      {
                        break: breakpoints.mobile,
                        columns: 1,
                        start: 1
                      }
                    ]}
                  >
                    <div className="rectangle-mobile">
                      <div className="slot">
                        <div className="inline">
                          <p className="h3">Impactful |</p>
                          <p className="h3">&nbsp;31 OCT 2019</p>
                        </div>
                        <p className="h2">Who is making impact investments?</p>
                        <a className="link" href="/whois">
                          Read more
                        </a>
                      </div>
                    </div>
                  </GridChild>
                </div>
              </div>

              <div className="tab">
                <input type="radio" name="css-tabs" id="tab-3" className="tab-switch" />
                <label htmlFor="tab-3" className="tab-label">
                  Research
                </label>
                <div className="tab-content">
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
                    <div className="rectangle-mobile">
                      <div className="slot">
                        <div className="inline">
                          <p className="h3">Palgrave Studies in Impact Finance |</p>
                          <p className="h3">&nbsp;2017</p>
                        </div>
                        <p className="h2">Impact investing: Instruments, Mechanisms and Actors</p>
                        <a
                          className="link"
                          href="https://link-springer-com.ezproxy.ub.gu.se/book/10.1007%2F978-3-319-66556-6"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Go to article
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
                        start: 5
                      },
                      {
                        break: breakpoints.mobile,
                        columns: 1,
                        start: 1
                      }
                    ]}
                  >
                    <Notice />
                  </GridChild>
                </div>
              </div>

              <div className="tab">
                <input type="radio" name="css-tabs" id="tab-4" className="tab-switch" />
                <label htmlFor="tab-4" className="tab-label">
                  News
                </label>
                <div className="tab-content">
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
                    <div className="rectangle-mobile">
                      <div className="slot">
                        <div className="inline">
                          <p className="h3">CNBC</p>
                          <p className="h3">&nbsp;OCT 2019</p>
                        </div>
                        <p className="h2">85% of investors are interested CNBC</p>
                        <a
                          className="link"
                          href="https://www.cnbc.com/2019/10/28/how-to-make-your-investments-sustainable.html"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Go to article
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
                        start: 5
                      },
                      {
                        break: breakpoints.mobile,
                        columns: 1,
                        start: 1
                      }
                    ]}
                  >
                    <Notice />
                  </GridChild>
                </div>
              </div>
            </div>

            {/* -----------------------desktop--------------------*/}
          </GridChild>
          {/* blogs */}
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
            <p className="h1">Blogs</p>
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
            <div className="rectangle-left">
              <div className="slot">
                <div className="inline">
                  <p className="h3"></p>
                  <p className="h3"></p>
                </div>
                <p className="h2">Why Impactful exists</p>
                <a
                  className="link"
                  href="https://medium.com/@hannes.marten/why-impactful-exists-d190b5457e9d"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Go to blog
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
                start: 5
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <div className="rectangle-middle">
              <div className="slot">
                <div className="inline">
                  <p className="h3"></p>
                  <p className="h3"></p>
                </div>
                <p className="h2">Echoing Green Blog</p>
                <a
                  className="link"
                  href="https://echoinggreen.org/news/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Go to blog
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
                start: 8
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <div className="rectangle">
              <div className="slot">
                <div className="inline">
                  <p className="h3"></p>
                  <p className="h3"></p>
                </div>
                <p className="h2">Global Impact Investing Network </p>
                <a className="link" href="/signup">
                  Go to blog
                </a>
              </div>
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
            <p className="h1">Understanding impact investing</p>
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
            <div className="rectangle-left" style={{ filter: 'blur(0px)' }}>
              <div className="slot">
                <div className="inline">
                  <p className="h3">Impactful |</p>
                  <p className="h3">&nbsp;31 OCT 2019</p>
                </div>
                <p className="h2">What is impact investing?</p>
                <a className="link" href="/whatis">
                  Read more
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
                start: 5
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <div className="rectangle-middle" style={{ filter: 'blur(0px)' }}>
              <div className="slot">
                <div className="inline">
                  <p className="h3">Impactful |</p>
                  <p className="h3">&nbsp;31 OCT 2019</p>
                </div>
                <p className="h2">Why impact investing?</p>
                <a className="link" href="/whyimpact">
                  Read more
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
                start: 8
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <div className="rectangle" style={{ filter: 'blur(0px)' }}>
              <div className="slot">
                <div className="inline">
                  <p className="h3">Impactful |</p>
                  <p className="h3">&nbsp;31 OCT 2019</p>
                </div>
                <p className="h2">Who is making impact investments?</p>
                <a className="link" href="/whois">
                  Read more
                </a>
              </div>
            </div>
          </GridChild>

          {/* new row */}

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
            <p className="h1">Research</p>
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
            <div className="rectangle-left">
              <div className="slot">
                <div className="inline">
                  <p className="h3">Palgrave Studies in Impact Finance |</p>
                  <p className="h3">&nbsp;2017</p>
                </div>
                <p className="h2">Impact investing: Instruments, Mechanisms and Actors</p>
                <a
                  className="link"
                  href="https://link-springer-com.ezproxy.ub.gu.se/book/10.1007%2F978-3-319-66556-6"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Go to article
                </a>
              </div>
            </div>
          </GridChild>
          <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 7,
                start: 6
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <div className="notice">
              <Notice />
            </div>
          </GridChild>
          {/* <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 3,
                start: 5
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <div className="rectangle-middle">
              <div className="slot">
                <div className="inline">
                  <p className="h3">Journal of Business Ethics |</p>
                  <p className="h3">&nbsp;2014</p>
                </div>
                <p className="h2">
                  What’s in a Name: An Analysis of Impact Investing Understandings by Academics and
                  Practitioners
                </p>
                <a className="link" href="/signup">
                  Go to article
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
                start: 8
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <div className="rectangle">
              <div className="slot">
                <div className="inline">
                  <p className="h3">Journal of Sustainable Finance &amp; Investment |</p>
                  <p className="h3">&nbsp;2013</p>
                </div>
                <p className="h2">
                  Interrogating the theory of change: evaluating impact investing where it matters
                </p>
                <a className="link" href="/signup">
                  Go to article
                </a>
              </div>
            </div>
          </GridChild> */}

          {/* news */}

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
            <p className="h1">News</p>
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
            <div className="rectangle-left">
              <div className="slot">
                <div className="inline">
                  <p className="h3">CNBC</p>
                  <p className="h3">&nbsp;OCT 2019</p>
                </div>
                <p className="h2">85% of investors are interested CNBC</p>
                <a
                  className="link"
                  href="https://www.cnbc.com/2019/10/28/how-to-make-your-investments-sustainable.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Go to article
                </a>
              </div>
            </div>
          </GridChild>
          {/* <GridChild
            columnSpan={[
              { start: 1 },
              {
                break: breakpoints.desktop,
                columns: 3,
                start: 5
              },
              {
                break: breakpoints.mobile,
                columns: 1,
                start: 1
              }
            ]}
          >
            <div className="rectangle-middle">
              <div className="slot">
                <div className="inline">
                  <p className="h3">Gogla |</p>
                  <p className="h3">&nbsp;31 SEP 2019</p>
                </div>
                <p className="h2">Off-grid solar: A power tool for change</p>
                <a className="link" href="/signup">
                  Go to article
                </a>
              </div>
            </div>
          </GridChild> */}
        </Grid>
      </Style>
    );
  }
};

export default index;
