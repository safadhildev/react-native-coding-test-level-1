import _ from 'lodash';
import DataService from '../../services/DataService';
import { GET_POKEMON, GET_POKEMON_DETAILS } from '../constants';

export const resetPokemonDetails = () => ({
  type: GET_POKEMON_DETAILS.RESET,
});

export const getPokemon = ({ url }) => {
  console.log('[DEBUG] :: ', { url });
  try {
    return async (dispatch) => {
      const response = await DataService.getData(url);

      if (_.isEqual(response.status, 200)) {
        const result = await response.json();

        dispatch({
          type: GET_POKEMON.SUCCESS,
          payload: result,
        });
      }
    };
  } catch (err) {
    dispatch({
      type: GET_POKEMON.ERROR,
      payload: err,
    });
  }
};

export const getPokemonDetails = ({ url }) => {
  try {
    return async (dispatch) => {
      const response = await DataService.getData(url);

      if (_.isEqual(response.status, 200)) {
        const result = await response.json();

        dispatch({
          type: GET_POKEMON_DETAILS.SUCCESS,
          payload: result,
        });
      }
    };
  } catch (err) {
    dispatch({
      type: GET_POKEMON_DETAILS.ERROR,
      payload: err,
    });
  }
};
