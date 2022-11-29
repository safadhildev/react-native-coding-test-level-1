import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { constants } from '../../components';

const ListItem = ({ data }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onViewDetails = () => {
    navigation.push(constants.routes.PokemonDetails, { name: data?.name, url: data?.url });
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.text}>{data?.name}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.buttonContainer} onPress={onViewDetails}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>View</Text>
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
  text: { textTransform: 'uppercase', fontWeight: '500', fontSize: 30, color: '#FFFFFF' },
  buttonContainer: {
    backgroundColor: '#F0F0F0',
    borderTopWidth: 10,
    borderColor: '#222225',
    padding: 10,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { fontWeight: '400', fontSize: 24 },
});

export default ListItem;
