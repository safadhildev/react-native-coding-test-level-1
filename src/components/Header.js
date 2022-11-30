import { TouchableOpacity, View } from 'react-native';
import Text from './Text';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'iconoir-react-native';
import colors from './colors';

const Header = ({ title, disableBackAction = false }) => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      {!disableBackAction && (
        <View style={{ marginRight: 10 }}>
          <TouchableOpacity activeOpacity={0.8} onPress={onBack}>
            <ArrowLeft color={colors.black} height={28} width={28} strokeWidth={3} />
          </TouchableOpacity>
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
