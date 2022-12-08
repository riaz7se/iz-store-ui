import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import cartReducer from "./features/cart/cartSlice";
import myStoreReducer from "./features/items/myStoreSlice";
import thunk from "redux-thunk";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// const persistConfig = {
//     key: 'root',
//     storage
// }

// const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// const store = configureStore({
//     reducer: {
//         storeItems: myStoreReducer,
//         cart: persistedCartReducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
// });

/// other method to persist
const reducers = combineReducers({
  storeItems: myStoreReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
