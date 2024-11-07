import { configureStore } from "@reduxjs/toolkit";
import Reducers from "./slices/notesSlices";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { UserAuth } from "./apis/UserAuth";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, Reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(UserAuth.middleware),
});

export const persistor = persistStore(store);
