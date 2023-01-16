import React from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";

import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MyWishList from "./pages/MyWishList";
import Products from "./pages/Products";

function App() {
  return (
    <Box className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shoppingCart" element={<Cart />}></Route>
        <Route path="/myWishList" element={<MyWishList />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
