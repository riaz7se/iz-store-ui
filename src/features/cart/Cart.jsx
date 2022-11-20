import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItemDelete } from "./cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

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
          {item.itemName} [{item.price}]
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
