import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import tastingSlice from "./tastingSlice";
const Reducers = combineReducers({
  Auth: AuthSlice,
  notes: tastingSlice,
});
export default Reducers;
