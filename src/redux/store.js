import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./slices/notesSlices/tastingSlice";
const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});
export default store;
