import {View} from '@fower/taro';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './theme.scss';

// @experimental 可能重命名，移到其他包
const ButtonTheme = ({variant = 'pill', className, children, ...props}) => {
  // TODO 读取主题，显示不同的按钮主题
  return (
    <View className={clsx('mx-btn-theme', variant && ('mx-btn-theme-' + variant), className)} {...props}>
      {children}
    </View>
  );
};

ButtonTheme.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ButtonTheme;
