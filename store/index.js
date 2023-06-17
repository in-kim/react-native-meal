import {configureStore} from '@reduxjs/toolkit'
import favoriteReducer from './favoriteStore';
export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteReducer,
  }
});