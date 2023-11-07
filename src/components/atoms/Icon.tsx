
import listIcons from './list-icons.svg';

type IconProps = {
  className?: string;
  iconName: string;
} & typeof defaultProps;

const defaultProps = {
  className: '',
};

const Icon = ({ className, iconName }: IconProps) => (
  <svg className={className}>
    <use xlinkHref={`${listIcons}#${iconName}`} href={`${listIcons}#${iconName}`} />
  </svg>
);

Icon.defaultProps = defaultProps;

export default Icon;
