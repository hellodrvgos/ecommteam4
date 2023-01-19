import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { red } from "@mui/material/colors";
import Snackbar from "@mui/material/Snackbar";
import { AlertTitle } from "@mui/material";

import Alert from "@mui/material/Alert";

import { AppDispatch, RootState } from "../../redux/store";

import { Product, ProductDetail } from "../../types/type";
import "./ProductItem.css";
import { Box } from "@mui/system";
import { wishActions } from "../../redux/slice/wishList";

import { Link } from "react-router-dom";
import { cartActions } from "../../redux/slice/cartList";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductItem({ product }: ProductDetail) {
  let localStorageWishList: Product[] = JSON.parse(localStorage.getItem("favoriteList") || "null");
  if(localStorageWishList == null) localStorageWishList = [];
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const dispatch = useDispatch<AppDispatch>();
  const wishList = useSelector((state: RootState) => state.wish.wishList);
  const isDuplicated = localStorageWishList.some(
    (wishItem) =>
      wishItem.title.toLocaleLowerCase() === product.title.toLocaleLowerCase()
  );
  const isFavorite = localStorageWishList.some((element) => element.id === product.id);

  const updateProduct = {...product, quantity: 1}
  const cartList = useSelector((state: RootState)=> state.cart.cartList);
  const isInCart= cartList.some((item)=> 
    item.id === product.id
  );
  const [openFavorite, setOpenFavorite] = useState(false);
  const [addFavorite, setAddFavorite] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [addCart, setAddCart]= useState(false)
  const handleClickFavorite = () => {
    setOpenFavorite(true);
  };
  const handleClickCart = () => {
    setOpenCart(true);
  }
  const handleAddFavorite = () => {
    setAddFavorite(true);
  };
  const handleAddCart = ()=>{
    setAddCart(true);
  }
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenFavorite(false);
    setAddFavorite(false);
    setOpenCart(false);
    setAddCart(false);
  };
  return (
    <Box style={{width:"500px", margin: "0 auto" }}>
      <Card
        sx={{
          width: 500,
          margin: "0 auto",
          height: "auto",
          // marginInline: "1rem",
          marginBlock: "1rem",
        }}
      >
        <CardActionArea component={Link} to={`/products/${product.id}`}>
        <Typography sx={{paddingTop: "20px"}}>{product.category.toLocaleUpperCase()}</Typography>
          <CardMedia
            component="img"
            height="200"
            image={product.image}
            alt="green iguana"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent>
            <Typography
              style={{ height: "100px" }}
              gutterBottom
              variant="h6"
              component="div"
              fontWeight={900}
            >
              {product.title}
            </Typography>
            <Rating name="read-only" value={product.rating.rate} readOnly sx={{marginBottom: "40px"}}/>
            <Typography variant="h5" sx={{ fontWeight: "900"}}>$ {product.price}</Typography>
          </CardContent>
          </CardActionArea>

          <Box sx={{width: "100px", margin: "20px auto"}}>
          <Stack direction={"row"} spacing={2}>
            <IconButton
            aria-label="addWish"
            sx={{ color: isFavorite ? red[500] : "#474444" }}
            onClick={() => {
              isDuplicated
                ? handleClickFavorite()
                : dispatch(wishActions.addFav(product)) && handleAddFavorite();
            }}
            >
            <FavoriteBorderIcon />
            </IconButton>
            <IconButton
              aria-label="addCart"
              onClick={() => {
                isInCart
                  ? handleClickCart()
                  : dispatch(cartActions.addToCart(updateProduct)) && handleAddCart();
              }}
            >
              <ShoppingCartOutlinedIcon sx={{ color: isInCart ? red[500] : "#474444" }}/>
            </IconButton>
          </Stack>
          </Box>
          {/* <Typography>Description</Typography>
        <ExpandMore
          style={{}}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Collapse
          style={{
            position: "absolute",
            width: 300,
            height: "auto",
            zIndex: 1,
            backgroundColor: "#e9e6e6",
            paddingBottom: "100px",
          }}
          in={expanded}
          timeout="auto"
          unmountOnExit
        >
          <Typography> {product.description}</Typography>
        </Collapse> */}
      </Card>
      <Snackbar open={addFavorite} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Success</AlertTitle>
          Item added to favorites!!
        </Alert>
      </Snackbar>

      <Snackbar open={openFavorite} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          The product is already inside favorite list!
        </Alert>
      </Snackbar>
      <Snackbar open={addCart} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Success</AlertTitle>
          Item added to your cart!!
        </Alert>
      </Snackbar>

      <Snackbar open={openCart} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          The product is already in your cart!!
        </Alert>
      </Snackbar>
    </Box>
  );
}
