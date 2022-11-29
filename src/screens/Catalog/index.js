import _ from 'lodash';
import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header } from '../../components';
import { getPokemon } from '../../redux/actions/pokemon';
import pokemonReducer from '../../redux/reducers/pokemonReducer';

const initialURL = 'https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10';

const Catalog = ({ navigation }) => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => ({
    data: state.pokemon.data,
  }));

  console.log('[DEBUG] :: ', { data });

  const getPokemonData = () => {
    dispatch(getPokemon({ url: initialURL }));
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="Catalog" />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
});

const mapStateToProps = (state) => ({
  count: state.count,
});

const ActionCreators = Object.assign({}, getPokemon);
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
