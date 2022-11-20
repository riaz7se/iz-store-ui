import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    allItems: [
        {id: 1, itemName: 'Mac M1', price: 90000},
        {id: 2, itemName: 'IPhone SE', price: 60000}
    ]
};

export const myStoreSlice = createSlice({
    name: 'mystore',
    initialState,
    reducers: {

    }
});

export default myStoreSlice.reducer