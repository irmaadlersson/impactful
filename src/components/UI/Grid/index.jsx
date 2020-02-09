import React from 'react';
import PropTypes from 'prop-types';

import spacing from 'tokens/spacing.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

import { StyledGrid } from './style';

const spaces = Object.keys(spacing);

const Grid = ({ childPadding, className, children, ...props }) => (
  <StyledGrid className={`Grid ${className}`.trim()} {...props}>
    {React.Children.map(children, child =>
      React.cloneElement(child, {
        padding: childPadding
      })
    )}
  </StyledGrid>
);

Grid.propTypes = {
  align: PropTypes.oneOf(['stretch', 'flex-start', 'center']),
  childPadding: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.any]),
  columnGap: PropTypes.oneOfType([PropTypes.oneOf(spaces), PropTypes.number]),
  columns: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        break: PropTypes.string,
        columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
      })
    ),
    PropTypes.number,
    PropTypes.oneOf(['auto-fit', 'auto-fill'])
  ]),
  margins: PropTypes.string,
  maxWidth: PropTypes.string,
  minColumnWidth: PropTypes.string,
  rowGap: PropTypes.oneOfType([PropTypes.oneOf(spaces), PropTypes.number])
};

Grid.defaultProps = {
  align: 'center',
  childPadding: '',
  className: '',
  columnGap: 30,
  columns: [{ columns: 4 }, { break: breakpoints.maxMobile, columns: 6 }],
  margins: '0 auto',
  maxWidth: `1440px`,
  // maxWidth: `${breakpoints.maxPageWidth}px`,
  rowGap: 0
};

export default Grid;
