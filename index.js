import {Button as BaseButton, View} from '@fower/taro';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Taro from '@tarojs/taro';
import './index.scss';

const Button = ({variant, size, href, className, children, ...props}) => {
  return (
    <BaseButton
      className={clsx(
        'mx-btn',
        variant && ('mx-btn-' + variant),
        size && ('mx-btn-' + size),
        className,
      )}
      onClick={href ? () => Taro.navigateTo({url: href}) : null}
      {...props}
    >
      {children}
    </BaseButton>
  );
};

const ButtonGroup = ({className, children, ...props}) => {
  return (
    <View className={clsx('mx-btn-group', className)} {...props}>{children}</View>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

ButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
export {Button, ButtonGroup};
