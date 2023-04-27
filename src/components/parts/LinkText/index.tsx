import Link from 'next/link';

import { Color } from '@/theme/colors';
import { FontSize } from '@/theme/fontSizes';
import { FontWeight } from '@/theme/fontWeights';
import { LineHeight } from '@/theme/lineHeights';

import { getStyle } from './styles';

type Props = {
  children: React.ReactNode;
  lineHeight?: LineHeight;
  backgroundColor?: Color;
  size?: FontSize;
  weight?: FontWeight;
  color?: Color;
};

const LinkText: React.FC<Props> = ({
  children,
  lineHeight = 'm',
  backgroundColor = 'transparent',
  size = 'm',
  weight = 'normal',
  color = 'black',
}) => {
  const style = getStyle({
    lineHeight,
    backgroundColor,
    size,
    weight,
    color,
  });
  return (
    <Link css={style.linkText} href="/">
      {children}
    </Link>
  );
};

export default LinkText;
