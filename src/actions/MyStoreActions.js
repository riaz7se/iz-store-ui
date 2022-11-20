import {
  CART_ADD_ITEM,
  CART_DELETE_ITEM,
  STORE_ADD_ITEM,
} from "../actionTypes/ConstActionTypes";

export const addItemToCart = (payload) => {
  return {
    type: CART_ADD_ITEM,
    payload,
  };
};

export const deleteItemToCart = (payload) => {
  return {
    type: CART_DELETE_ITEM,
    payload,
  };
};
