import { View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Text } from '../../components';
import colors from '../../components/colors';
import constants from '../../components/constants';

const Main = ({ navigation }) => {
  const onNavigate = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <>
      <View style={styles.container}>
        {/* <StatusBar translucent barStyle="light-content" backgroundColor="transparent" /> */}
        <View style={styles.topContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.touchable}
            onPress={() => {
              onNavigate(constants.routes.ContactUs);
            }}
          >
            <Text style={[styles.text, { color: colors.white }]}>Contact Us</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.border} />
        <View pointerEvents="none" style={styles.middleContainer}>
          <View style={styles.outerRing}>
            <View style={styles.innerRing} />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.touchable}
            onPress={() => {
              onNavigate(constants.routes.Catalog);
            }}
          >
            <Text style={styles.text}>View Catalog</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  border: {
    backgroundColor: colors.black,
    height: 10,
  },
  middleContainer: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  topContainer: {
    flex: 1,
    backgroundColor: colors.red,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  outerRing: {
    position: 'relative',
    borderColor: '#222225',
    borderRadius: 100,
    width: 100,
    height: 100,
    borderWidth: 10,
    backgroundColor: '#F0F0F0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRing: {
    position: 'absolute',
    borderColor: '#222225',
    borderRadius: 100,
    width: 50,
    height: 50,
    borderWidth: 3,
    backgroundColor: '#F0F0F0',
  },
  text: {
    fontSize: 44,
    lineHeight: 50,
    fontWeight: 'bold',
    color: colors.black,
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
