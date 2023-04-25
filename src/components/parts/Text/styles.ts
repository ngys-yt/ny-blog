import { css } from '@emotion/react';
import lineHeights, { LineHeight } from '@/theme/lineHeights';
import colors, { Color } from '@/theme/colors';
import fontSizes, { FontSize } from '@/theme/fontSizes';
import { FontWeight } from '@/theme/fontWeights';

type Args = {
  lineHeight: LineHeight;
  backgroundColor: Color;
  size: FontSize;
  weight: FontWeight;
};

export const getStyle = ({
  lineHeight,
  backgroundColor,
  size,
  weight,
}: Args) => {
  const getBackgroundColor = backgroundColor && {
    backgroundColor: colors[backgroundColor],
  };

  return {
    text: css({
      width: 'fit-content',
      lineHeight: lineHeights[lineHeight],
      fontSize: fontSizes[size],
      fontWeight: weight,
      ...getBackgroundColor,
    }),
  };
};
