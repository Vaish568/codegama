import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
export const Products = ({ imageUrl, price, title, id }) => {
  return (
    <div className="Products">
      <Link to={`/Products/${id}`}>
        <div className="Products_image">
          <img className="image" src={imageUrl}></img>
        </div>
      </Link>
      <div className="details">
        <span className="Products_title">{title}</span>
        <span className="Products_Price">₹{price}</span>
      </div>
    </div>
  );
};
