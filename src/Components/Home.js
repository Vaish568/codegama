import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
import { Products } from "./Products";

export default function Home() {
  const state = useSelector((state) => state.product);
  return (
    <div>
      {/* <div>
        <input name="Men's Clothes" type={"checkbox"}></input>
        <input name="Women's Clothes" type={"checkbox"}></input>
        <input name="Electronics" type={"checkbox"}></input>
        <input name="Jwellery" type={"checkbox"}></input>
      </div> */}
      <div className="allProducts">
        {state.products.map((e) => (
          <Products
            key={e.id}
            imageUrl={e.image}
            price={e.price}
            title={e.title}
            id={e.id}
          />
        ))}
      </div>
    </div>
  );
}
