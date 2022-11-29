import { View, StyleSheet } from 'react-native';
import { Button, Container } from '../../components';
import constants from '../../components/constants';

const styles = StyleSheet.create({
  buttonWrapper: {
    padding: 20,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});

const Main = ({ navigation }) => {
  const onNavigate = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <Container>
      <View style={styles.wrapper}>
        <View style={styles.buttonWrapper}>
          <Button
            text="Contact Us"
            onPress={() => {
              onNavigate(constants.routes.ContactUs);
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            text="View Catalog"
            onPress={() => {
              onNavigate(constants.routes.Catalog);
            }}
          />
        </View>
      </View>
    </Container>
  );
};

export default Main;
