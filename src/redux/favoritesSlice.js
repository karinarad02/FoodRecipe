import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const existingIndex = state.favoriterecipes.findIndex(
        (recipe) => recipe.idFood === action.payload.idFood
      );

      if (existingIndex >= 0) {
        // If found, remove the recipe from favorites
        state.favoriterecipes.splice(existingIndex, 1);
      } else {
        // If not found, add the recipe to favorites
        state.favoriterecipes.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
