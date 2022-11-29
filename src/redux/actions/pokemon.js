import _ from 'lodash';
import { GET_POKEMON, GET_POKEMON_DETAILS } from '../constants';

export const resetPokemonDetails = () => ({
  type: GET_POKEMON_DETAILS.RESET,
});

export const getPokemon = ({ url }) => {
  try {
    return async (dispatch) => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

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
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

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
