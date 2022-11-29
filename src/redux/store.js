import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './reducers/pokemonReducer';

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default store;
