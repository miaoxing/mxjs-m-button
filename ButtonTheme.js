import {View} from '@fower/taro';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './theme.scss';
import {useTheme} from '@mxjs/theme';

// @experimental 可能重命名，移到其他包
const ButtonTheme = ({variant, className, children, ...props}) => {
  const theme = useTheme();

  return (
    <View
      className={clsx(
        'mx-btn-theme',
        'mx-btn-theme-' + (variant || theme?.components?.ButtonTheme?.variant || 'pill'),
        className,
      )}
      {...props}
    >
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
