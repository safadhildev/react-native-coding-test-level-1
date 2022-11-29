import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './reducers/pokemonReducer';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default store;
