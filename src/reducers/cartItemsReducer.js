import {
  CART_ADD_ITEM,
  CART_DELETE_ITEM,
  CART_VIEW_ITEM,
} from "../actionTypes/ConstActionTypes";

const initialState = {
  cartItems: [],
};

export const cartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        cartItems: [
          ...state.cartItems,
          { ...action.payload, cartItemId: state.cartItems.length },
        ],
      };
    case CART_DELETE_ITEM:
      return {
        cartItems: [
          ...state.cartItems.filter((item) => {
            return item.cartItemId !== action.payload.cartItemId;
          }),
        ],
      };
    default:
      return state;
  }
};
