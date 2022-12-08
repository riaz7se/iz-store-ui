import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItemDelete, cartItemsState } from "./cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(cartItemsState);

  console.log(cart);
  const deleteItemFromCart = (item) => {
    dispatch(
      cartItemDelete(item)
    )
  }
  const itemsList = cart.cartItems.map((item, index) => {
    return (
      <ul key={index}>
        <li>
          {item.title} [{item.price}]
          <button onClick={() => deleteItemFromCart(item)}>-</button>
        </li>
      </ul>
    );
  });

  return (
    <div className="cart">
      <h2>Cart Items: </h2>
      {itemsList && <div>{itemsList}</div>}
    </div>
  );
};

export default Cart;
