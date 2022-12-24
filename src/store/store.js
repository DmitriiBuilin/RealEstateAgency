import { applyMiddleware} from "@reduxjs/toolkit";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./reducers/rootReducer";

const persistConfig = {
    key: 'realty',
    storage,
    // blacklist: ['anyName']
  }
  
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;