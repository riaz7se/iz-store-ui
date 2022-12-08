import { nanoid } from "@reduxjs/toolkit";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItemAdd } from "../cart/cartSlice";
import { fetchItems, fetchStoreItems } from "./myStoreSlice";

const MyStore = () => {
  const isFetchStoreItems = useRef(true);
  const dispatch =  useDispatch();
  const {storeItems, loading} = useSelector((state) => state);

  useEffect(() => {
    if (isFetchStoreItems.current) {
      isFetchStoreItems.current = false 
      dispatch(fetchStoreItems);
    }
  }, []);

  const addItemToCart = (item) => {
    dispatch(
      cartItemAdd({
        cartId: nanoid(),
        ...item
      })
    )
  }

  const itemsList = storeItems.allItems.map((item, index) => {
    return (
      <ul key={index}>
        <li>{item.title} [{item.price}]
            <button onClick={() => addItemToCart(item)}>
                +
            </button>
        </li>
      </ul>
    );
  });

  return (
    <div className="my-store-items">
      <h2>My Store Items: {storeItems.allItems.length}</h2>
      <span>
        List of Items
        {storeItems.allItems && 
            <div>{itemsList}</div>
        }
      </span>
    </div>
  );
};

export default MyStore;
