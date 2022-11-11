import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./Components/Header";
import axios from "axios";
import cartReducer from "./Reducer/cartReducer";
import { Products } from "./Components/Products";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "./features/productSlice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IndividualProduct } from "./Components/IndividualProduct";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { Orders } from "./Components/Orders";

function App() {
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();

  console.log(state, "Form toolkit");
  const fetchProuct = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch(addProducts(data));
  };
  useEffect(() => {
    fetchProuct();
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Products/:id" element={<IndividualProduct />}></Route>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Orders" element={<Orders />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
