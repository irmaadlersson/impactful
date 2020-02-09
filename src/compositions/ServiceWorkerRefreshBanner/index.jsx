import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Alert from 'components/UI/Alert';
import Button from 'components/UI/Button';

const ServiceWorkerRefreshBanner = ({
  children,
  dismissButtonLabel,
  eventName,
  refreshButtonLabel,
  promptBeforeReloading,
  ...props
}) => {
  const [showRefreshBanner, setShowRefreshBanner] = useState(false);
  const reload = () => {
    if (window) {
      window.location.reload();
    }
  };

  useEffect(() => {
    const onServiceWorkerUpdated = () => {
      if (promptBeforeReloading) {
        setShowRefreshBanner(true);
      } else {
        reload();
      }
    };

    window.addEventListener(eventName, onServiceWorkerUpdated);

    return () => {
      window.removeEventListener(eventName, onServiceWorkerUpdated);
    };
  }, [eventName, promptBeforeReloading]);

  return showRefreshBanner ? (
    <Alert {...props}>
      {children}
      <div>
        <Button onClick={reload}>{refreshButtonLabel}</Button>
        <Button onClick={() => setShowRefreshBanner(false)}>{dismissButtonLabel}</Button>
      </div>
    </Alert>
  ) : null;
};

ServiceWorkerRefreshBanner.propTypes = {
  children: PropTypes.node,
  dismissButtonLabel: PropTypes.node,
  eventName: PropTypes.string.isRequired,
  refreshButtonLabel: PropTypes.node,
  // Display the banner to prompt user for reload, or reload directly
  promptBeforeReloading: PropTypes.bool
};

ServiceWorkerRefreshBanner.defaultProps = {
  children: <span>Update available</span>,
  dismissButtonLabel: 'Dismiss',
  placement: 'top',
  position: 'fixed',
  promptBeforeReloading: false,
  refreshButtonLabel: 'Refresh',
  size: 'small',
  status: 'info'
};

export default ServiceWorkerRefreshBanner;
