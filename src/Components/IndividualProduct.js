import { useSelect } from "@mui/base";
import { Key } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../features/productSlice";
import "./IndividualProduct.css";
export const IndividualProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [state] = useSelector((state) =>
    state.product.products?.filter((e) => e.id == id)
  );

  console.log(state);

  const handleCart = () => {
    dispatch(
      addToCart({
        id: state.id,
        title: state.title,
        price: state.price,
        image: state.image,
      })
    );
    toast.success("Product added to the cart", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="IndividualProduct">
      <div className="indi_image">
        <img src={state?.image}></img>
      </div>
      <div className="indi_details">
        <div>
          <span className="title">{state?.title}</span>
          <div className="rating">
            {Array(Math.round(state?.rating?.rate))
              .fill()
              .map((i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
          <span className="price">₹{state?.price}</span>
        </div>
        <p className="decription">{state?.description}</p>
        <button className="btn" onClick={handleCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
