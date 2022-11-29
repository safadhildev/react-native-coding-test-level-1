import { GET_POKEMON } from '../constants';
const initialState = {
  data: null,
  loading: true,
  error: null,
};
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_POKEMON.SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_POKEMON.REQUEST:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default pokemonReducer;
