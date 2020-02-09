import React from 'react';

import ErrorBoundary from 'components/ErrorBoundary';
import GlobalStyle from 'components/GlobalStyle';
// import Nav from 'components/Nav';
import InstallBanner from 'compositions/InstallBanner';
import CookiesConsentBanner from 'compositions/CookiesConsentBanner';
import ServiceWorkerRefreshBanner from 'compositions/ServiceWorkerRefreshBanner';
import AppRouter from 'routes';

// Name of the custom event emited by the service worker registration script (register-sw.js)
export const SW_UPDATE_EVENT = 'sw.updated';

const App = () => (
  <ErrorBoundary>
    <GlobalStyle />
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
    <ErrorBoundary>
      <CookiesConsentBanner />
    </ErrorBoundary>
    <ErrorBoundary>
      <InstallBanner />
    </ErrorBoundary>
    <ErrorBoundary>
      <ServiceWorkerRefreshBanner eventName={SW_UPDATE_EVENT} promptBeforeReloading={false} />
    </ErrorBoundary>
  </ErrorBoundary>
);

export default App;
