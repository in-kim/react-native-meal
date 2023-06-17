import {createSlice} from '@reduxjs/toolkit'
export const favoriteStore = createSlice({
  name: 'favorite',
  initialState: {
    ids:[],
  },
  reducers:{
    addFavorite: (state, context) => {
      state.ids.push(context.payload);
    },
    removeFavorite: (state, context) => {
      state.ids = state.ids.filter(mealId => mealId !== context.payload)
    },
  }
});

export const {addFavorite, removeFavorite, } = favoriteStore.actions;
export default favoriteStore.reducer;