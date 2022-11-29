import _ from 'lodash';
import { GET_POKEMON } from '../constants';

// export const getPokemon = (params) => ({
//   type: GET_POKEMON.REQUEST,
//   payload: params,
// });

export const getPokemon = ({ url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10' }) => {
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
