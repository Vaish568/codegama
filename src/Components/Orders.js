import React from "react";
import { useSelector } from "react-redux";
import { CartProduct } from "./Cart";

export const Orders = () => {
  const state = useSelector((state) => state.product.orders);
  console.log(state);
  return (
    <div className="orders_main">
      <div className="orders_sub">
        {state.map((e) => (
          <CartProduct
            title={e.title}
            price={e.price}
            image={e.image}
            id={e.id}
            msg="Buy Again"
          />
        ))}
      </div>
    </div>
  );
};
