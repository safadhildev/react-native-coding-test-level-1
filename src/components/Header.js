import { View } from 'react-native';
import Text from './Text';
import styles from './styles';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, disableBackAction = false }) => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      {!disableBackAction && (
        <View style={{ marginRight: 10 }}>
          <Button text="Back" onPress={onBack} />
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
