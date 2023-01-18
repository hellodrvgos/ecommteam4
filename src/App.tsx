import React from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";

import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MyWishList from "./pages/MyWishList";
import Products from "./pages/Products";

import ProductList from "./components/products/ProductList";
import Footer from "./components/footer/Footer";
import ProductDetail from "./components/productDetail/ProductDetail";

import { createTheme, ThemeProvider } from "@mui/material";

import { useState } from "react";

const light = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    fontSize: 16,
  },
});

const dark = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    fontSize: 16,
  },
});
// localStorage.clear();
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <Box className="App">
        <NavBar changeTheme={changeTheme} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shoppingCart" element={<Cart />}></Route>
          <Route path="/myWishList" element={<MyWishList />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route
            path="/products/:productId"
            element={<ProductDetail />}
          ></Route>
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
