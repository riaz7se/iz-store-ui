import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";


const initialState = {
  cartItems: [],
};

//Slice will divide global state
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //actions
    cartItemAdd(state, action) {
      state.cartItems.push(action.payload);
    },
    cartItemDelete(state, action) {
        
        return {  
            cartItems: produce(state.cartItems, draft => {
                const index = draft.findIndex(item => item.cartId == action.payload.cartId)
                if (index !== -1) draft.splice(index, 1)
            })
        }
      console.log(res);
      return res;
    },
  },
});

//export actions. createSlice will automatically creates action generator function with same name as cartItemAdd, cartItemDelet
export const { cartItemAdd, cartItemDelete } = cartSlice.actions;

export const cartItemsState = (state) => state.cart;

//export reducer to store
export default cartSlice.reducer;
