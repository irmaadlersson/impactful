import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import Nav from 'components/Nav';
import ProtectedRoute from './ProtectedRoute';
import Footer from 'components/Footer';

import firebase from '../components/firebase';

import { AuthProvider } from '../Auth';
import { FavoritesProvider } from '../contexts/FavoritesContext';

import PrivateRoute from '../routes/PrivateRoute';
/**
 * Use @loadable/component for route-based code-splitting
 * @NOTE: full-dynamic import only work with relative paths at the moment
 */
const LoadableView = loadable(props => import(`../views/${props.view}`));

/**
 * Main application router
 * You WANT to keep that component stateless!
 *
 * If you need to inject props to a specific route, use the context API
 * If you need to fetch data (like content for instance), load it from the view itself using componentDidMount()
 *
 * @see https://reacttraining.com/react-router/web/guides/quick-start
 */
export default function AppRouter() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
    });
  });

  return firebaseInitialized !== false ? (
    <div
      style={{
        // boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
        maxWidth: '1440px',
        margin: '0 auto'
      }}
    >
      <AuthProvider>
        {/* <FavoritesProvider> */}
        {/* <Route exact path="/" render={() => <LoadableView view="CoomingSoonView" />} /> */}
        <Nav />
        <Switch>
          <Route exact path="/homeview" render={() => <LoadableView view="HomeView" />} />

          <Route exact path="/login1" render={() => <LoadableView view="LoginView1" />} />
          <Route exact path="/signup" render={() => <LoadableView view="SignUpView" />} />
          <Route exact path="/knowledgebox" render={() => <LoadableView view="KnowledgeView" />} />
          <Route exact path="/aboutus" render={() => <LoadableView view="AboutUsView" />} />
          <Route exact path="/account" render={() => <LoadableView view="AccountView" />} />
          <Route exact path="/projects" render={() => <LoadableView view="ProjectsView" />} />
          <Route exact path="/terms" render={() => <LoadableView view="TermsView" />} />

          <Route
            exact
            path="/whatis"
            render={() => <LoadableView view="WhatIsImpactInvestments" />}
          />
          <Route
            exact
            path="/whois"
            render={() => <LoadableView view="WhoIsMakingImpactInvestments" />}
          />
          <Route
            exact
            path="/whyimpact"
            render={() => <LoadableView view="WhyImpactInvestments" />}
          />

          <Route exact path="/" render={() => <LoadableView view="LandingPageView" />} />
          {/* <Route exact path="/" render={() => <LoadableView view="LandingPageView" />} /> */}

          <PrivateRoute
            exact
            path="/logout"
            redirectTo="/"
            render={() => <LoadableView view="LogoutView" />}
          />

          {/* <PrivateRoute
          exact
          path="/knowledgebox"
          render={() => <LoadableView view="KnowledgeView" />}
        /> */}
          {/* <PrivateRoute
          exact
          path="/projects"
          render={() => <LoadableView view="ProjectsView" />}
        /> */}

          <PrivateRoute exact path="/private" render={() => <LoadableView view="PrivateView" />} />
          {/* <Route render={() => <LoadableView view="NotFoundView" />} /> */}
        </Switch>
        {/* </FavoritesProvider> */}
      </AuthProvider>

      <Footer />
    </div>
  ) : (
    <div>Loading...</div>
  );
}
