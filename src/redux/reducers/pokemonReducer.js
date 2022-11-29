import { GET_POKEMON, GET_POKEMON_DETAILS } from '../constants';
const initialState = {
  list: {
    data: null,
    loading: true,
    error: null,
    status: null,
  },
  details: {
    data: null,
    loading: true,
    error: null,
    status: null,
  },
};
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON.REQUEST:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
          error: null,
          status: null,
          data: null,
        },
      };
    case GET_POKEMON.SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          data: action.payload,
          loading: false,
          error: null,
          status: 'OK',
        },
      };
    case GET_POKEMON.ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: action.payload,
          status: 'ERROR',
        },
      };
    case GET_POKEMON_DETAILS.RESET: {
      return {
        ...state,
        details: {
          ...state.details,
        },
      };
    }
    case GET_POKEMON_DETAILS.REQUEST:
      return {
        ...state,
        details: {
          ...state.details,
          loading: true,
          error: null,
          status: null,
          data: null,
        },
      };
    case GET_POKEMON_DETAILS.SUCCESS:
      return {
        ...state,
        details: {
          ...state.details,
          data: action.payload,
          loading: false,
          error: null,
          status: 'OK',
        },
      };
    case GET_POKEMON_DETAILS.ERROR:
      return {
        ...state,
        details: {
          ...state.details,
          loading: false,
          error: action.payload,
          status: 'ERROR',
        },
      };
    default:
      return state;
  }
};
export default pokemonReducer;
