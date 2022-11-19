import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartItemsReducer } from "./reducers/cartItemsReducer";
import { storeItemsReducer } from "./reducers/storeItemsReducer";


export const rootReducer = combineReducers({
    storeReducer: storeItemsReducer,
    cartReducer: cartItemsReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;