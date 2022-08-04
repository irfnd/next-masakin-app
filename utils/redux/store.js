import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import rootReducers from "@/utils/redux/slices";
import storage from "@/utils/redux/storage";

const persistConfig = {
	key: "resip!-app",
	version: 1,
	whitelist: ["auth"],
	storage,
};

const persistedReducers = persistReducer(persistConfig, rootReducers);

export const store = configureStore({ reducer: persistedReducers, middleware: [thunk] });
export const persistor = persistStore(store);
