import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
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

export const { cartItemAdd, cartItemDelete } = cartSlice.actions;
export default cartSlice.reducer;
