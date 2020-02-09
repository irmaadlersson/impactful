import styled, { css } from 'styled-components';

import spacing from 'tokens/spacing.mjs';

export const StyledGrid = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: ${({ align }) => align};
  column-gap: ${({ columnGap }) =>
    typeof columnGap === 'number' ? `${columnGap}px` : spacing[columnGap]};
  justify-content: ${({ center }) => (center ? 'center' : 'initial')};
  justify-items: ${({ align }) => (align === 'flex-start' ? 'stretch' : align)};
  margin: ${({ margins }) => margins};
  max-width: ${({ maxWidth }) => maxWidth};
  row-gap: ${({ rowGap }) => (typeof rowGap === 'number' ? `${rowGap}px` : spacing[rowGap])};

  ${({ columns, minColumnWidth }) =>
    Array.isArray(columns)
      ? columns
          .map(breakpoint =>
            breakpoint.break
              ? `@media all and (min-width: ${breakpoint.break}) {
                grid-template-columns: repeat(${breakpoint.columns}, minmax(0, 1fr));
              }`
              : `grid-template-columns: repeat(${breakpoint.columns}, minmax(0, 1fr));`
          )
          .join('\n')
      : css`
          grid-template-columns: repeat(
            ${columns},
            ${minColumnWidth ? `minmax(${minColumnWidth}, 1fr)` : 'minmax(0, 1fr)'}
          );
        `};
`;
