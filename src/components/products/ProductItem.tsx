import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { red } from "@mui/material/colors";
import Snackbar from "@mui/material/Snackbar";
import { AlertTitle } from "@mui/material";

import Alert from "@mui/material/Alert";

import { AppDispatch, RootState } from "../../redux/store";

import { ProductDetail } from "../../types/type";
import "./ProductItem.css";
import { Box } from "@mui/system";
import { productActions } from "../../redux/slice/products";

export default function ProductItem({ product }: ProductDetail) {
  const dispatch = useDispatch<AppDispatch>();
  const wishList = useSelector(
    (state: RootState) => state.products.productList
  );
  const isDuplicated = wishList.some(
    (wishItem) =>
      wishItem.title.toLocaleLowerCase() === product.title.toLocaleLowerCase()
  );
  const isFavorite = wishList.some((element) => element.id === product.id);

  const [open, setOpen] = useState(false);
  const [add, setAdd] = useState(false);

  const handleAdd = () => {
    setAdd(true);
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setAdd(false);
  };

  return (
    <Box style={{ margin: "auto" }}>
      <Card
        sx={{
          width: 300,
          height: 500,
          marginInline: "1rem",
          marginBlock: "1rem",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography>{product.category}</Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <Box>{product.rating.rate}</Box>
          <FavoriteBorderIcon
            aria-label="addWish"
            sx={{ color: isFavorite ? red[500] : "#474444" }}
            onClick={() => {
              isDuplicated
                ? handleClick()
                : dispatch(productActions.addWish(product)) && handleAdd();
            }}
          />
        </CardActionArea>
      </Card>
      <Snackbar open={add} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Success</AlertTitle>
          Item added to favorites
        </Alert>
      </Snackbar>

      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          The country is already inside favorite list!
        </Alert>
      </Snackbar>
    </Box>
  );
}
