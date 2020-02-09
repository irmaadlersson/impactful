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
          <div>
            <h1>Cookie Policy for Impactful</h1>

            <p>This is the Cookie Policy for Impactful, accessible from www.impactful.se</p>

            <p>
              <strong>What Are Cookies</strong>
            </p>

            <p>
              As is common practice with almost all professional websites this site uses cookies,
              which are tiny files that are downloaded to your computer, to improve your experience.
              This page describes what information they gather, how we use it and why we sometimes
              need to store these cookies. We will also share how you can prevent these cookies from
              being stored however this may downgrade or 'break' certain elements of the sites
              functionality.
            </p>

            <p>
              For more general information on cookies see the Wikipedia article on HTTP Cookies.
            </p>

            <p>
              <strong>How We Use Cookies</strong>
            </p>

            <p>
              We use cookies for a variety of reasons detailed below. Unfortunately in most cases
              there are no industry standard options for disabling cookies without completely
              disabling the functionality and features they add to this site. It is recommended that
              you leave on all cookies if you are not sure whether you need them or not in case they
              are used to provide a service that you use.
            </p>

            <p>
              <strong>Disabling Cookies</strong>
            </p>

            <p>
              You can prevent the setting of cookies by adjusting the settings on your browser (see
              your browser Help for how to do this). Be aware that disabling cookies will affect the
              functionality of this and many other websites that you visit. Disabling cookies will
              usually result in also disabling certain functionality and features of the this site.
              Therefore it is recommended that you do not disable cookies.
            </p>

            <p>
              <strong>The Cookies We Set</strong>
            </p>

            <ul>
              <li>
                <p>Account related cookies</p>
                <p>
                  If you create an account with us then we will use cookies for the management of
                  the signup process and general administration. These cookies will usually be
                  deleted when you log out however in some cases they may remain afterwards to
                  remember your site preferences when logged out.
                </p>
              </li>

              <li>
                <p>Login related cookies</p>
                <p>
                  We use cookies when you are logged in so that we can remember this fact. This
                  prevents you from having to log in every single time you visit a new page. These
                  cookies are typically removed or cleared when you log out to ensure that you can
                  only access restricted features and areas when logged in.
                </p>
              </li>

              <li>
                <p>Email newsletters related cookies</p>
                <p>
                  This site offers newsletter or email subscription services and cookies may be used
                  to remember if you are already registered and whether to show certain
                  notifications which might only be valid to subscribed/unsubscribed users.
                </p>
              </li>

              <li>
                <p>Surveys related cookies</p>
                <p>
                  From time to time we offer user surveys and questionnaires to provide you with
                  interesting insights, helpful tools, or to understand our user base more
                  accurately. These surveys may use cookies to remember who has already taken part
                  in a survey or to provide you with accurate results after you change pages.
                </p>
              </li>
            </ul>

            <p>
              <strong>Third Party Cookies</strong>
            </p>

            <p>
              In some special cases we also use cookies provided by trusted third parties. The
              following section details which third party cookies you might encounter through this
              site.
            </p>

            <ul>
              <li>
                <p>
                  This site uses Google Analytics which is one of the most widespread and trusted
                  analytics solution on the web for helping us to understand how you use the site
                  and ways that we can improve your experience. These cookies may track things such
                  as how long you spend on the site and the pages that you visit so we can continue
                  to produce engaging content.
                </p>
                <p>
                  For more information on Google Analytics cookies, see the official Google
                  Analytics page.
                </p>
              </li>

              <li>
                <p>
                  Third party analytics are used to track and measure usage of this site so that we
                  can continue to produce engaging content. These cookies may track things such as
                  how long you spend on the site or pages you visit which helps us to understand how
                  we can improve the site for you.
                </p>
              </li>

              <li>
                <p>
                  From time to time we test new features and make subtle changes to the way that the
                  site is delivered. When we are still testing new features these cookies may be
                  used to ensure that you receive a consistent experience whilst on the site whilst
                  ensuring we understand which optimisations our users appreciate the most.
                </p>
              </li>

              <li>
                <p>
                  As we sell products it's important for us to understand statistics about how many
                  of the visitors to our site actually make a purchase and as such this is the kind
                  of data that these cookies will track. This is important to you as it means that
                  we can accurately make business predictions that allow us to monitor our
                  advertising and product costs to ensure the best possible price.
                </p>
              </li>

              <li>
                <p>
                  We also use social media buttons and/or plugins on this site that allow you to
                  connect with your social network in various ways. For these to work the following
                  social media sites including; Instagram, Facebook, LinkedIn will set cookies
                  through our site which may be used to enhance your profile on their site or
                  contribute to the data they hold for various purposes outlined in their respective
                  privacy policies.
                </p>
              </li>
            </ul>

            <p>
              <strong>More Information</strong>
            </p>

            <p>
              Hopefully that has clarified things for you and as was previously mentioned if there
              is something that you aren't sure whether you need or not it's usually safer to leave
              cookies enabled in case it does interact with one of the features you use on our site.
              This Cookies Policy was created with the help of the{' '}
              <a href="https://www.cookiepolicygenerator.com">Cookies Policy Template Generator</a>{' '}
              and the <a href="https://www.webterms.org">WebTerms Generator</a>.
            </p>

            <p>
              However if you are still looking for more information then you can contact us through
              one of our preferred contact methods:
            </p>

            <ul>
              <li>Email: lisanordgren@humblebee.se</li>
            </ul>
          </div>
        </GridChild>
      </Grid>
    </Style>
  );
};

export default index;
