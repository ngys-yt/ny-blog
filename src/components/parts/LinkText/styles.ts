import { css } from '@emotion/react';

import colors, { Color } from '@/theme/colors';
import fontSizes, { FontSize } from '@/theme/fontSizes';
import { FontWeight } from '@/theme/fontWeights';
import lineHeights, { LineHeight } from '@/theme/lineHeights';

type Args = {
  lineHeight: LineHeight;
  backgroundColor: Color;
  size: FontSize;
  weight: FontWeight;
  color: Color;
};

export const getStyle = ({
  lineHeight,
  backgroundColor,
  size,
  weight,
  color,
}: Args) => {
  const getBackgroundColor = backgroundColor && {
    backgroundColor: colors[backgroundColor],
  };

  return {
    linkText: css({
      color,
      width: 'fit-content',
      lineHeight: lineHeights[lineHeight],
      fontSize: fontSizes[size],
      fontWeight: weight,
      ...getBackgroundColor,
      transitionProperty: 'opacity',
      transitionDuration: '0.4s',
      ':hover': {
        opacity: 0.5,
      },
    }),
  };
};
