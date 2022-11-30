import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowRightCircled, FastArrowRight, ArrowRight } from 'iconoir-react-native';
import { useDispatch } from 'react-redux';
import { constants } from '../../components';
import colors from '../../components/colors';

const ListItem = ({ data }) => {
  const navigation = useNavigation();

  const onViewDetails = () => {
    navigation.navigate(constants.routes.CatalogDetails, { name: data?.name, url: data?.url });
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.text}>{data?.name}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.buttonContainer} onPress={onViewDetails}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>View</Text>
          <View style={styles.iconWrapper}>
            <ArrowRight color={colors.black} width={20} height={20} strokeWidth={3} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 200,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  main: {
    backgroundColor: '#F00902',
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFFFFF',
    fontStyle: 'italic',
  },
  buttonContainer: {
    backgroundColor: '#F0F0F0',
    borderTopWidth: 10,
    borderColor: '#222225',
    padding: 10,
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { fontWeight: '400', fontSize: 24 },
  iconWrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});

export default ListItem;
