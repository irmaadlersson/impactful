/* Service Worker Set-up (PWA) */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('/sw.js', {
        updateViaCache: 'imports'
      })
      .then(function(registration) {
        /* eslint-disable-next-line no-console */
        console.info('Service Worker successfully registered.');

        registration.addEventListener('updatefound', function() {
          var worker = registration.installing;

          worker.addEventListener('statechange', function() {
            switch (worker.state) {
              case 'installed':
                if (navigator.serviceWorker.controller) {
                  worker.postMessage({
                    action: 'skipWaiting'
                  });
                }
                break;
            }
          });
        });
      })
      .catch(function(error) {
        /* eslint-disable-next-line no-console */
        console.warn('Error registering Service Worker:', error.message);
      });

    var isRefreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', function() {
      if (!isRefreshing) {
        isRefreshing = true;

        // Dispatch an event for the App to listen to.
        window.dispatchEvent(
          new CustomEvent('sw.updated', {
            detail: {
              message: function() {
                return 'Your application is up-to-date.';
              }
            }
          })
        );
      }
    });
  });
}
