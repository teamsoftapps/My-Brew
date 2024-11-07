import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
const Reducers = combineReducers({
  Auth: AuthSlice,
});
export default Reducers;
