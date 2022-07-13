import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  // const showCart = useSelector((state) => state.cart.showCart);

  const dispatch = useDispatch();

  return (
    <div className="cartIcon">
      <h3 onClick={() => dispatch(cartActions.setShowCart())}>
        Cart: {quantity} Items
      </h3>
    </div>
  );
};

export default Cart;
