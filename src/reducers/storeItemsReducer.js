import {
  STORE_ADD_ITEM,
  STORE_VIEW_ITEM,
} from "../actionTypes/ConstActionTypes";

const initialState = {
  allItems: [
    {
      id: 1,
      itemName: "Mac M1",
      price: "90,000",
    },
    {
      id: 2,
      itemName: "IPhone 14 Pro",
      price: "60,000",
    },
  ],
};

export const storeItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_ADD_ITEM:
      return {
        ...state,
        allItems: [...state.allItems, action.payload],
      };
    case STORE_VIEW_ITEM:
      return {
        ...state,
        allItems,
      };
    default:
      return state;
  }
};
