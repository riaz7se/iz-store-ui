import { CART_ADD_ITEM } from "../actionTypes/ConstActionTypes";

export const addItem = () => {
  return {
    type: CART_ADD_ITEM,
  };
};

export const deleteItem = () => {
  return {
    type: CART_DELETE_ITEM,
  };
};
