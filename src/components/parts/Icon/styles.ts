import { css } from '@emotion/react';

const ICON_SIZE = {
  s: {
    height: '16px',
    width: '16px',
  },
  m: {
    height: '32px',
    width: '32px',
  },
  l: {
    height: '48px',
    width: '48px',
  },
};

export type IconSize = keyof typeof ICON_SIZE;

export const getStyle = (size: IconSize) => {
  return {
    icon: css(ICON_SIZE[size]),
  };
};
