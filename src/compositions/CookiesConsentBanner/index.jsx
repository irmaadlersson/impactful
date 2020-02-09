import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { LegalContext } from 'contexts/LegalContext';

import Alert from 'components/UI/Alert';
import Button from 'components/UI/Button';

const CookiesConsentBanner = ({ buttonLabel, children, ...props }) => {
  const { isConsentGiven, giveConsent } = useContext(LegalContext);

  return !isConsentGiven ? (
    <Alert {...props}>
      {children}
      <Button onClick={giveConsent}>{buttonLabel}</Button>
    </Alert>
  ) : null;
};

CookiesConsentBanner.propTypes = {
  buttonLabel: PropTypes.any /* eslint-disable-line react/forbid-prop-types */,
  children: PropTypes.any /* eslint-disable-line react/forbid-prop-types */
};

CookiesConsentBanner.defaultProps = {
  buttonLabel: 'I agree',
  children: (
    <span>
      By using this app/site you are agreeing to our Integrity Policy and our use of cookies and
      similar technologies.
      <a href="/terms">Read More</a>
    </span>
  ),
  placement: 'bottom',
  position: 'fixed',
  size: 'small',
  status: 'info'
};

export default CookiesConsentBanner;
