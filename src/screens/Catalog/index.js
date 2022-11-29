import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Header } from '../../components';
import colors from '../../components/colors';
import { getPokemon } from '../../redux/actions/pokemon';
import pokemonReducer from '../../redux/reducers/pokemonReducer';

const initialURL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10';

const ItemCard = ({ data }) => {
  return (
    <View
      style={{
        minHeight: 200,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        overflow: 'hidden',
      }}
    >
      <View
        style={{
          backgroundColor: '#546E7A',
          flex: 1,
          alignItems: 'center',
          paddingTop: 50,
        }}
      >
        <Text
          style={{ textTransform: 'uppercase', fontWeight: '500', fontSize: 30, color: '#FFFFFF' }}
        >
          {data?.name}
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          position: 'absolute',
          backgroundColor: '#FFFFFF',
          borderRadius: 5,
          padding: 10,
          bottom: 10,
          right: 10,
          left: 10,
          zIndex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontWeight: '400', fontSize: 24 }}>View</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Catalog = ({ navigation }) => {
  const dispatch = useDispatch();
  const flatListRef = useRef();
  const [refreshing, setRefreshing] = useState(false);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, status } = useSelector((state) => ({
    data: state.pokemon.list.data,
    loading: state.pokemon.list.loading,
    status: state.pokemon.list.status,
  }));

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(
      getPokemon({
        url: initialURL,
      })
    );
  };

  const onLoadMore = () => {
    if (!_.isNull(data?.next)) {
      console.log('[DEBUG] :: onLoadMore');
      dispatch(
        getPokemon({
          url: data?.next,
        })
      );
    }
  };

  const onNext = () => {
    dispatch(
      getPokemon({
        url: data?.next,
      })
    );
    setCurrentPage(currentPage + 1);
    if (flatListRef && flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  };

  const onPrevious = () => {
    dispatch(
      getPokemon({
        url: data?.previous,
      })
    );
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (_.isNull(data))
      dispatch(
        getPokemon({
          url: initialURL,
        })
      );
  }, []);

  useEffect(() => {
    if (!loading && !_.isEqual(status, 'OK')) {
      setRefreshing(false);
    }
  }, [data]);

  return (
    <View style={styles.container}>
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
            renderItem={({ item, index }) => <ItemCard data={item} />}
            ListFooterComponent={
              <View style={styles.actionWrapper}>
                <View style={styles.buttonWrapper}>
                  {!_.isNull(data?.previous) && <Button text="Previous" />}
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
  //   listWrapper: {
  //     flex: 1,
  //   },
});

const mapStateToProps = (state) => ({
  count: state.count,
});

const ActionCreators = Object.assign({}, getPokemon);
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
