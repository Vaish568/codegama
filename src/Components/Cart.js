import { useSelect } from "@mui/base";
import { Satellite } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHref, useNavigate } from "react-router-dom";
import {
  addToCart,
  emptyCart,
  removeFromCart,
  updateOrders,
} from "../features/productSlice";
import "./Cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const state = useSelector((state) => state.product.cart);
  console.log(state);
  const handleOrder = () => {
    dispatch(updateOrders({ state }));
    dispatch(emptyCart());
    Navigate("/Orders");
  };
  return (
    <div className="Cart">
      <div className="Cart_left">
        {state?.map((e) => (
          <CartProduct
            title={e.title}
            price={e.price}
            image={e.image}
            id={e.id}
          />
        ))}
      </div>
      <div className="Cart_right">
        <h1>Billing</h1>
        <div className="total">
          <span className="item">Total({state.length} item(s))</span>
          <span className="item">₹{getProductTotal(state)}</span>
        </div>
        {state.length > 0 && (
          <button className="orderbtn" onClick={handleOrder}>
            Place order
          </button>
        )}
      </div>
    </div>
  );
}

export function CartProduct({ title, price, image, id, msg }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    if (msg) {
      dispatch(
        addToCart({
          id: id,
          title: title,
          price: price,
          image: image,
        })
      );
    } else dispatch(removeFromCart({ id: id }));
  };
  return (
    <div className="card">
      <div className="Cart_image">
        <img className="cart_img" src={image}></img>
      </div>
      <div className="Cart_detail">
        <span className="Cart_title">{title}</span>
        <span className="Cart_price">₹ {price}</span>
        <button className="Cart_Remove" onClick={handleRemove}>
          {msg ? msg : "Remove from cart"}
        </button>
      </div>
    </div>
  );
}

const getProductTotal = (state) => {
  let total = state.reduce((e, c) => c.price + e, 0);
  return total;
};
