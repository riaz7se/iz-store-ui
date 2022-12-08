import {
  applyMiddleware,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const STORE_ITEMS_URL = "";

const initialState = {
  allItems: [],
  loading: false,
  //   allItems: [
  // {id: 1, itemName: 'Mac M1', price: 90000},
  // {id: 2, itemName: 'IPhone SE', price: 60000}
  //   ],
};

//Without createAsyncThunk. here we have to dispach to action to update state
export const fetchItems = () => async (dispatch) => {
  //   try {
  //     const response = await axios.get("https://fakestoreapi.com/products/");
  //     let storeItems = response.data;
  //     dispatch(
  //       storeItemsAdd({
  //         storeItems,
  //       })
  //     );
  //   } catch (err) {
  //     console.log("axios..", err);
  //   }
};

export const fetchStoreItems = createAsyncThunk(
  "mystore/fetchStoreItems",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products/");
    return response.data;
  }
);

export const myStoreSlice = createSlice({
  name: "mystore",
  initialState,
  reducers: {
    storeItemsAdd(state, action) {
      console.log("action...", action);
      state.allItems.push(...action.payload.storeItems);
    },
  },
  extraReducers: {
    [fetchStoreItems.pending]: (state) => {
      state.loading = true;
    },
    [fetchStoreItems.fulfilled]: (state, action) => {
      console.log("fullfilled: ", action.payload);
      state.loading = false;
      state.allItems.push(...action.payload);
    },
    [fetchStoreItems.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { storeItemsAdd } = myStoreSlice.actions;

//state.<xxxx> . xxxx should match to store, reducer name
export const allItems = (state) => state.storeItems;

export const loading = (state) => state.storeItems;

export default myStoreSlice.reducer;
