import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, FlatList, RefreshControl, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Header } from '../../components';

import { getPokemon } from '../../redux/actions/pokemon';

import ListItem from './ListItem';

const initialURL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10';

const Catalog = ({ data, loading, status, reduxGetPokemon }) => {
  const flatListRef = useRef();

  const [currentPage, setCurrentPage] = useState(1);

  const onRefresh = () => {
    reduxGetPokemon({
      url: initialURL,
    });
  };

  const onNext = () => {
    reduxGetPokemon({
      url: data?.next,
    });

    setCurrentPage(currentPage + 1);
    if (flatListRef && flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  };

  const onPrevious = () => {
    reduxGetPokemon({
      url: data?.previous,
    });

    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (_.isNull(data)) {
      console.log('[DEBUG] - SHOULD GET DATA');
      reduxGetPokemon({
        url: initialURL,
      });
    } else {
      console.log('[DEBUG] - NO NEED GET DATA');
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="Catalog" />

        {!_.isNull(data) && (
          <FlatList
            ref={flatListRef}
            refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
            style={{ paddingBottom: 50 }}
            contentContainerStyle={{ paddingBottom: 30 }}
            data={data?.results}
            keyExtractor={(item, index) => `${index}-${item?.name}`}
            renderItem={({ item }) => <ListItem data={item} />}
            ListFooterComponent={
              <View style={styles.actionWrapper}>
                <View style={styles.buttonWrapper}>
                  {!_.isNull(data?.previous) && <Button text="Previous" onPress={onPrevious} />}
                </View>
                <View style={styles.countWrapper}>
                  {!_.isNull(data) && (
                    <Text>
                      Page {currentPage}/{Math.floor(data?.count / 10)}
                    </Text>
                  )}
                </View>
                <View style={styles.buttonWrapper}>
                  {!_.isNull(data?.next) && <Button text="Next" onPress={onNext} />}
                </View>
              </View>
            }
          />
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  actionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonWrapper: { flex: 1 },
  countWrapper: { flex: 2, justifyContent: 'center', alignItems: 'center' },
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingBottom: 0 },
  listWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const mapStateToProps = (state) => {
  return {
    data: state.pokemon.list.data,
    loading: state.pokemon.list.loading,
    status: state.pokemon.list.status,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ reduxGetPokemon: getPokemon }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
