import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tastingColor: null,
  brewingColor: null,
  fermentationColor: null,
  bottlingColor: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    // Set color for a specific category
    setCategoryColor: (state, action) => {
      const { category, color } = action.payload;
      switch (category) {
        case "tasting":
          state.tastingColor = color;
          break;
        case "brewing":
          state.brewingColor = color;
          break;
        case "fermentation":
          state.fermentationColor = color;
          break;
        case "bottling":
          state.bottlingColor = color;
          break;
        default:
          break;
      }
    },

    // Reset color for a specific category
    resetCategoryColor: (state, action) => {
      const { category } = action.payload;
      switch (category) {
        case "tasting":
          state.tastingColor = null;
          break;
        case "brewing":
          state.brewingColor = null;
          break;
        case "fermentation":
          state.fermentationColor = null;
          break;
        case "bottling":
          state.bottlingColor = null;
          break;
        default:
          break;
      }
    },
  },
});

// Action creators
export const { setCategoryColor, resetCategoryColor } = notesSlice.actions;

// Reducer
export default notesSlice.reducer;
