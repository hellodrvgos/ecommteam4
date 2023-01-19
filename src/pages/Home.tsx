import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import backpack from "../assets/backpack.jpg";
import jacket from "../assets/jacket.jpg";
import wristband from "../assets/wristband.jpg";
import ring from "../assets/ring.jpg";
import drive from "../assets/drive.jpg";
import backgroundImg from "../assets/legs.jpg";
import { fetchProductData } from "../redux/thunk/products";
import { RootState, AppDispatch } from "../redux/store";
// import Carousel from "react-material-ui-carousel";
import Carousel from "react-multi-carousel";

import "../App.css";
import { Box, Card, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import CarouselProduct from "../components/products/CarouselProduct";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const styles = {
  background: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundColor: "#c4cbd1",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center ",
    height: "50vh",
    paddingTop: "100px",
  },
};

export default function Home() {
  const productCarousel = useSelector(
    (state: RootState) => state.products.productList
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <Box style={{ width: "100%" }}>
      <Box style={styles.background}>
        <Typography
          style={{
            width: "300px",
            height: "150px",
            margin: "auto",
          }}
          className="title-box"
        >
          <p className="title-home">Online </p>
          <p className="subTitle">BOUTIQUE</p>
        </Typography>
        <Box
          className="box-btn"
          style={{
            width: "100px",
            margin: "auto",
            marginTop: "30px",
            fontFamily: "serif",
          }}
        >
          <Link
            className="link-style"
            style={{
              textDecoration: "none",
              fontWeight: 600,
            }}
            to="/products"
          >
            {" "}
            Shop now{" "}
          </Link>
        </Box>
      </Box>
      <Box className="sub_home">
        <h2>Meet the essentials</h2>
        {/* <p>We offer a variety of products for every style</p> */}
      </Box>
      <Box
        style={{
          marginBottom: "50px",
          height: "auto",
          width: "90%",
          margin: "auto",
          border: "1px solid black",
          // display: "inline-flex",
        }}
      >
        <Carousel responsive={responsive}>
          {productCarousel.map((product) => (
            <CarouselProduct key={product.id} product={product} />
          ))}
        </Carousel>
      </Box>

      {/* <Box className="clothes_card">
        <img
          className="clothes_img"
          height="150px"
          width="150px"
          src={backpack}
          alt="backpack"
        />
        <img
          className="clothes_img"
          height="150px"
          width="150px"
          src={jacket}
          alt="jacket"
        />
        <img
          className="clothes_img"
          height="150px"
          width="150px"
          src={wristband}
          alt="wristband"
        />
        <img
          className="clothes_img"
          height="150px"
          width="150px"
          src={ring}
          alt="ring"
        />
        <img
          className="clothes_img"
          height="150px"
          width="150px"
          src={drive}
          alt="drive"
        />
      </Box> */}
    </Box>
  );
}
