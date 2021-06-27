import {Button as BaseButton, View} from '@fower/taro';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './index.scss';

const Button = ({variant, size, className, children, ...props}) => {
  return (
    <BaseButton className={clsx(
      'mx-btn',
      variant && ('mx-btn-' + variant),
      size && ('mx-btn-' + size),
      className,
    )} {...props}>
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
  className: PropTypes.string,
  children: PropTypes.node,
};

ButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
export {Button, ButtonGroup};
