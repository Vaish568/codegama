import React from "react";

export default function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: [...action.payload],
      };
    default:
      break;
  }
}
