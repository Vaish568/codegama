import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Header() {
  const [expand, setExpand] = useState(false);
  const state = useSelector((state) => state.product.cart);
  console.log(state.length);
  const handleData = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className="header">
      <img
        className="header_image"
        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
      />
      <div className="header_search">
        <input
          className="header_input"
          type="text"
          onKeyUp={handleData}
          placeholder="Search here"
        />
        <SearchIcon className="search" />
      </div>

      <button
        className="header_login  flexbox"
        onClick={() => setExpand((state) => !state)}
      >
        <span className="login">Categories</span>

        <div
          className="dropdown"
          style={{ display: expand ? "block" : "none" }}
        >
          <p> Men's Clothes</p>
          <p>Electronics</p>
          <p>Jewelery</p>
        </div>
      </button>

      <button className="header_login">
        <span className="login">Login</span>
      </button>
      <Link to={"/Orders"} style={{ textDecoration: "none" }}>
        <div className="header_orders">
          <span className="orders_Lineone">Your</span>
          <span className="orders_Linetwo">Orders</span>
        </div>
      </Link>
      <Link to={"/Cart"} style={{ textDecoration: "none" }}>
        <div className="header_cart">
          <ShoppingCartIcon className="cart" />
          {state.length > 0 ? (
            <span className="cart_count">{state.length}</span>
          ) : (
            ""
          )}

          <span className="orders_Linetwo">Cart</span>
        </div>
      </Link>
    </div>
  );
}
