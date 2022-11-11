import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filter: "none",
  mensclothes: [],
  womensclothes: [],
  jwellery: [],
  electronics: [],
  orders: [],
  cart: [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts(state, action) {
      state.products = action.payload;
    },
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      let index = state.cart.findIndex((e) => e.id === action.payload.id);
      state.cart.splice(index, 1);
    },
    emptyCart(state) {
      state.cart = [];
    },
    updateOrders(state, action) {
      state.orders = action.payload.state;
      console.log("Orders", state.orders);
    },
    getMensClothes(state) {
      state.mensclothes = state.products.filter(
        (e) => e.category === "men's clothing"
      );
    },
    getWomenClothes(state) {
      state.womensclothes = state.products.filter(
        (e) => e.category === "women's clothing"
      );
    },
    getJewelery(state) {
      state.jwellery = state.products.filter((e) => e.category === "jewelery");
    },
    getElectronics(state) {
      state.electronics = state.products.filter(
        (e) => e.category === "electronics"
      );
    },
  },
});
export const {
  addProducts,
  addToCart,
  removeFromCart,
  emptyCart,
  updateOrders,
  getElectronics,
  getJewelery,
  getMensClothes,
  getWomenClothes,
} = productSlice.actions;
export default productSlice.reducer;
