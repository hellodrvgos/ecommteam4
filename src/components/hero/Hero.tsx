import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import homehero from "../../assets/homehero.png";
import Carousel from "react-multi-carousel";
import { fetchProductData } from "../../redux/thunk/products";
import { RootState, AppDispatch } from "../../redux/store";
import HeroRatingCards from "./HeroRatingCards";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

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

export default function Hero() {
  const productCarousel = useSelector(
    (state: RootState) => state.products.productList
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "1024px",
        margin: "70px auto",
        height: "1250px",
      }}
    >
      <Box sx={{ marginBottom: "25px" }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item
              sx={{
                textAlign: "left",
                height: "600px",
                paddingTop: "120px",
                paddingLeft: "25px",
              }}
            >
              <Stack direction="column" spacing={1}>
                <Typography
                  style={{ paddingBottom: 1 }}
                  gutterBottom
                  variant="h3"
                  component="div"
                  fontWeight={900}
                >
                  50% Off For Your
                  <br /> First Order
                </Typography>
                <Typography
                  style={{ paddingBottom: 25 }}
                  gutterBottom
                  variant="h6"
                  component="div"
                  fontWeight={900}
                >
                  We're offering 50% off for your first order. Use code
                  INTEGRIFY at checkout to redeem!
                </Typography>
                <Button
                  variant="contained"
                  sx={{ width: "200px" }}
                  component={Link}
                  to="/products"
                >
                  Shop Now
                </Button>
              </Stack>
            </Item>
          </Grid>

          <Grid item xs={4}>
            <Item sx={{ textAlign: "right", height: "600px" }}>
              <img src={homehero} height={550} />
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item
            sx={{
              textAlign: "left",
              marginBottom: "25px",
              borderBottom: "1px solid",
            }}
          >
            <Typography variant="h6" fontWeight={900}>
              Top rated products
            </Typography>
          </Item>
        </Grid>
      </Grid>

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
            <HeroRatingCards key={product.id} product={product} />
          ))}
        </Carousel>
      </Box>

      {/* <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item
            sx={{
              boxShadow: 1,
              width: "95%",
              margin: "0 auto",
              paddingTop: 3,
              paddingBottom: 5,
            }}
          >
            <img
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              height="150px"
            />
            <Typography
              style={{ paddingBottom: 5, paddingTop: 15, height: "100px" }}
              gutterBottom
              variant="body1"
              component="div"
              fontWeight={900}
            >
              Mens Cotton Jacket
            </Typography>
            <Rating
              name="read-only"
              value={5}
              readOnly
              style={{ paddingBottom: 25, height: "50px" }}
            />
            <Typography
              style={{ paddingBottom: 25, height: "50px" }}
              gutterBottom
              variant="body1"
              component="div"
              fontWeight={900}
            >
              $ 55.99
            </Typography>
            <Button variant="contained" component={Link} to="/products/3">
              View Product
            </Button>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item
            sx={{
              boxShadow: 1,
              width: "95%",
              margin: "0 auto",
              paddingTop: 3,
              paddingBottom: 5,
            }}
          >
            <img
              src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
              height="150px"
            />
            <Typography
              style={{ paddingBottom: 5, paddingTop: 15, height: "100px" }}
              gutterBottom
              variant="body1"
              component="div"
              fontWeight={900}
            >
              Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost
              SATA III 2.5
            </Typography>
            <Rating
              name="read-only"
              value={5}
              readOnly
              style={{ paddingBottom: 25, height: "50px" }}
            />
            <Typography
              style={{ paddingBottom: 25, height: "50px" }}
              gutterBottom
              variant="body1"
              component="div"
              fontWeight={900}
            >
              $ 109
            </Typography>
            <Button variant="contained" component={Link} to="/products/11">
              View Product
            </Button>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item
            sx={{
              boxShadow: 1,
              width: "95%",
              margin: "0 auto",
              paddingTop: 3,
              paddingBottom: 5,
            }}
          >
            <img
              src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
              height="150px"
            />
            <Typography
              style={{ paddingBottom: 5, paddingTop: 15, height: "100px" }}
              gutterBottom
              variant="body1"
              component="div"
              fontWeight={900}
            >
              John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain
              Bracelet
            </Typography>
            <Rating
              name="read-only"
              value={5}
              readOnly
              style={{ paddingBottom: 25, height: "50px" }}
            />
            <Typography
              style={{ paddingBottom: 25, height: "50px" }}
              gutterBottom
              variant="body1"
              component="div"
              fontWeight={900}
            >
              $ 695
            </Typography>
            <Button variant="contained" component={Link} to="/products/5">
              View Product
            </Button>
          </Item>
        </Grid>
      </Grid> */}
    </Box>
  );
}
