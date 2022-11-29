import { TouchableOpacity, StyleSheet } from 'react-native';
import _ from 'lodash';
import Text from './Text';

import styles from './styles';

const buttonStyle = (variant) =>
  _.isEqual(variant, 'outlined') ? styles.outlinedButton : styles.button;
const buttonTextStyle = (variant) =>
  _.isEqual(variant, 'outlined') ? styles.outlinedButtonText : styles.buttonText;

const Button = ({ variant = 'outlined', text = '', disabled, onPress = () => {}, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      onPress={onPress}
      style={[buttonStyle(variant), disabled && styles.buttonDisabled]}
      activeOpacity={0.8}
    >
      <Text style={buttonTextStyle(variant)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
