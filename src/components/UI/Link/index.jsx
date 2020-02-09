import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from './style';

/**
 * Styled link component, to use for internal or external links:
 * <Link as={RouterLink} to="/">Go to home page</Link>
 * <Link external to="https://some.where.el.se">Go somewhere else</Link>
 */
const Link = ({ external, to, ...props }) =>
  external ? (
    <StyledLink href={to} rel="noreferrer noopener" target="_blank" {...props} />
  ) : (
    <StyledLink to={to} {...props} />
  );

Link.propTypes = {
  external: PropTypes.bool,
  to: PropTypes.string
  //.isRequired
};

Link.defaultProps = {
  external: false
};

export default Link;
