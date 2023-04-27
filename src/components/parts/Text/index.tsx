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
};

const Text: React.FC<Props> = ({
  children,
  lineHeight = 'm',
  backgroundColor = 'transparent',
  size = 'm',
  weight = 'normal',
}) => {
  const style = getStyle({
    lineHeight,
    backgroundColor,
    size,
    weight,
  });
  return <p css={style.text}>{children}</p>;
};

export default Text;
