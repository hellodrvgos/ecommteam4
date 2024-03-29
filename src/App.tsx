import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MyWishList from "./pages/MyWishList";
import Products from "./pages/Products";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import ProductDetailItem from "./components/productDetail/ProductDetailItem";

import { createTheme, ThemeProvider, Box, Typography } from "@mui/material";

const light = createTheme({
  palette: {
    mode: "light",

    background: {
      default: "#FFFFFF",
    },

    primary: {
      main: "#5f869b",
    },

    text: {
      primary: "#3e3f40",
    },
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    fontSize: 16,
  },
});

const dark = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#1e1e1e",
    },
    text: {
      primary: "#e1e4e7",
    },
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    fontSize: 16,
  },
});

function App() {
  
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <Box className="App" sx={{display: { md: 'none', lg: "block" }}}>
        <NavBar changeTheme={changeTheme} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shoppingCart" element={<Cart />}></Route>
          <Route path="/myWishList" element={<MyWishList />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route
            path="/products/:productId"
            element={<ProductDetailItem />}
          >
          </Route>
        </Routes>
        <Footer />
      </Box>
      <Box sx={{display: { xs: "flex", lg: "none" }, height: "50vh", justifyContent: "center", alignItems: "center", bgcolor: "white"}}>
          <Typography variant="h6" sx={{fontWeight: "normal"}}>Website is not optimized yet for mobile & tablet screen resolutions. <br/> Please view it on a resolution higher than 1200px.</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
