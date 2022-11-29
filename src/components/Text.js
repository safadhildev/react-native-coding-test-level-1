import { Text as RNText } from 'react-native';
import styles from './styles';

const Text = ({ children, style, ...props }) => {
  return (
    <RNText {...props} allowFontScaling={false} style={[styles.text, style]}>
      {children}
    </RNText>
  );
};

export default Text;
