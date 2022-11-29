import { useIsFocused } from '@react-navigation/native';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import {
  View,
  ActivityIndicator,
  ScrollView,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Header, LoadingOverlay, Text } from '../../components';

import { getPokemonDetails } from '../../redux/actions/pokemon';

import { boolToString } from '../../utils/functions';

const CardView = ({ label, value, customContainerStyle }) => {
  return (
    <View style={[{ marginVertical: 20, marginHorizontal: 10, flex: 1 }, customContainerStyle]}>
      <View style={{}}>
        <Text style={styles.subTitle}>{label}</Text>
      </View>
      <Text style={styles.textAnswer}>{value}</Text>
    </View>
  );
};

const TableView = ({ label, value }) => {
  return (
    <View style={styles.tableWrapper}>
      <View style={{}}>
        <Text>{label}</Text>
      </View>
      <Text style={{ marginHorizontal: 5 }}>:</Text>
      <View style={{ flex: 1, minWidth: 100 }}>
        <Text>{value}</Text>
      </View>
    </View>
  );
};

const Ability = ({ data = null }) => {
  return (
    <View style={styles.gridWrapper}>
      <TableView label="Name" value={data?.ability?.name} />
      <TableView label="Is Hidden?" value={boolToString(data?.is_hidden)} />
      <TableView label="Slot" value={data?.slot} />
    </View>
  );
};

const GameIndex = ({ data = null }) => {
  return (
    <View style={styles.gridWrapper}>
      <TableView label="Game Index" value={data?.game_index} />
      <TableView label="Version" value={data?.version?.name} />
    </View>
  );
};

const PokeType = ({ data = null }) => {
  return (
    <View style={styles.gridWrapper}>
      <TableView label="Slot" value={data?.slot} />
      <TableView label="Type" value={data?.type?.name} />
    </View>
  );
};

const Stats = ({ data = null }) => {
  return (
    <View style={styles.gridWrapper}>
      <TableView label="Stat" value={data?.stat?.name} />
      <TableView label="Base Stat" value={data?.base_stat} />
      <TableView label="Effort" value={data?.effort} />
    </View>
  );
};

const Species = ({ data = null }) => {
  return (
    <View style={styles.gridWrapper}>
      <TableView label="Name" value={data?.name} />
      <TableView label="URL" value={data?.url} />
    </View>
  );
};

const HeldItem = ({ data = null }) => {
  console.log(data);
  return (
    <View style={styles.gridWrapper}>
      <TableView label="Name" value={data?.item?.name} />
    </View>
  );
};

const Move = ({ data = null }) => {
  return (
    <View style={styles.gridWrapper}>
      <Text style={{ textTransform: 'capitalize' }}>{data?.move?.name}</Text>
    </View>
  );
};

const PokemonDetails = ({ navigation, route }) => {
  const name = route?.params?.name || '';
  const url = route?.params?.url || '';

  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { result } = useSelector((state) => ({
    result: state.pokemon.details.data,
  }));

  useEffect(() => {
    if (!_.isEmpty(result)) {
      setTimeout(() => {
        setData(result);
        setLoading(false);
      }, 1000);
    }
  }, [result]);

  useEffect(() => {
    dispatch(getPokemonDetails({ url }));
  }, [url]);

  useEffect(() => {
    console.log(isFocused);
  }, [isFocused]);

  if (loading) {
    return loading && <LoadingOverlay />;
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title={name} />
        {!_.isEmpty(data) && (
          <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
            <View
              style={{
                height: 300,
                flex: 1,
                backgroundColor: '#CCCCCC',
                marginHorizontal: 20,
                borderRadius: 10,
              }}
            >
              {!_.isNull(data?.sprites?.other?.['official-artwork']?.front_default) && (
                <Image
                  source={{ uri: data?.sprites?.other?.['official-artwork']?.front_default }}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="contain"
                />
              )}
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}
            >
              <CardView label="ID" value={data?.id} />
              <CardView label="Order" value={data?.order} />
            </View>

            {/* Name */}
            <CardView
              label="Name"
              value={data?.name}
              customContainerStyle={{ marginHorizontal: 20 }}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}
            >
              <CardView label="Height (m)" value={data?.height} />
              <CardView label="Weight (kg)" value={data?.weight} />
            </View>

            {/* IS DEFAULT */}
            <CardView
              label="Is Default"
              value={boolToString(data?.is_default)}
              customContainerStyle={{ marginHorizontal: 20 }}
            />

            {/* ENCOUNTER */}
            <CardView
              label="Location area encounter"
              value={data?.location_area_encounters}
              customContainerStyle={{ marginHorizontal: 20 }}
            />

            {/* ABILITIES */}
            <View style={styles.section}>
              <View style={styles.wrapper}>
                <Text style={styles.subTitle}>Abilities</Text>
              </View>
              <FlatList
                numColumns={2}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsHorizontalScrollIndicator={false}
                data={data?.abilities}
                keyExtractor={(item, index) => `${index}-${item?.ability?.name}`}
                renderItem={({ item }) => <Ability data={item} />}
              />
            </View>

            {/* SPECIES */}
            <CardView
              label="Species"
              value={data?.species?.url}
              customContainerStyle={{ marginHorizontal: 20 }}
            />

            {/* BASE EXP */}
            <CardView
              label="Base Experience"
              value={data?.base_experience}
              customContainerStyle={{ marginHorizontal: 20 }}
            />

            {/* Types */}
            <View style={styles.section}>
              <View style={styles.wrapper}>
                <Text style={styles.subTitle}>Types</Text>
              </View>
              <FlatList
                scrollEnabled={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsHorizontalScrollIndicator={false}
                data={data?.types}
                keyExtractor={(item, index) => `${index}-${item?.type?.name}`}
                renderItem={({ item }) => <PokeType data={item} />}
                numColumns={2}
              />
            </View>

            {/* STATS */}
            <View style={styles.section}>
              <View style={styles.wrapper}>
                <Text style={styles.subTitle}>Stats</Text>
              </View>
              <FlatList
                scrollEnabled={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsHorizontalScrollIndicator={false}
                data={data?.stats}
                keyExtractor={(item, index) => `${index}-${item?.stat?.name}`}
                renderItem={({ item }) => <Stats data={item} />}
                numColumns={2}
              />
            </View>

            {/* HELD ITEMS */}
            {!_.isEmpty(data?.held_items) && (
              <View style={styles.section}>
                <View style={styles.wrapper}>
                  <Text style={styles.subTitle}>Held Items</Text>
                </View>
                <FlatList
                  scrollEnabled={false}
                  contentContainerStyle={{ paddingHorizontal: 15 }}
                  showsHorizontalScrollIndicator={false}
                  data={data?.held_items}
                  keyExtractor={(item, index) => `${index}-${item?.item?.name}`}
                  renderItem={({ item }) => <HeldItem data={item} />}
                  numColumns={2}
                />
              </View>
            )}

            {/* GAME INDICES */}
            <View style={styles.section}>
              <View style={styles.wrapper}>
                <Text style={styles.subTitle}>Moves</Text>
              </View>
              <FlatList
                scrollEnabled={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsHorizontalScrollIndicator={false}
                data={data?.moves}
                keyExtractor={(item, index) => `${index}-${item?.move?.name}`}
                renderItem={({ item }) => <Move data={item} />}
                numColumns={2}
              />
            </View>

            {/* GAME INDICES */}
            <View style={styles.section}>
              <View style={styles.wrapper}>
                <Text style={styles.subTitle}>Game Indices</Text>
              </View>
              <FlatList
                scrollEnabled={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsHorizontalScrollIndicator={false}
                data={data?.game_indices}
                keyExtractor={(item, index) => `${index}-${item?.ability?.name}`}
                renderItem={({ item }) => <GameIndex data={item} />}
                numColumns={2}
              />
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  gridWrapper: {
    alignItems: 'flex-start',
    flex: 1,
    marginHorizontal: 5,
    marginTop: 5,
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 10,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 20,
  },
  subTitle: {
    flex: 1,
    fontWeight: '500',
    backgroundColor: '#D32F2F',
    color: '#FFFFFF',
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomColor: '#212121',
    borderBottomWidth: 3,
  },
  tableWrapper: {
    minWidth: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textAnswer: {
    fontWeight: '600',
    backgroundColor: '#E0E0E0',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingHorizontal: 10,
  },
});

export default PokemonDetails;
