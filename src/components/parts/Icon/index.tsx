import { IconSize, getStyle } from './styles';

type Props = {
  // FIXME: iconNameは定数を作成する
  iconName: string;
  size?: IconSize;
};

const Icon: React.FC<Props> = ({ iconName, size = 'm' }) => {
  const style = getStyle(size);
  // FIXME: iconを追加する
  return <p css={style.icon}>{iconName}</p>;
};

export default Icon;
