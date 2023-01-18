import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductData } from "../../redux/thunk/products";
import { RootState, AppDispatch } from "../../redux/store";
// import Carousel from "react-material-ui-carousel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { Paper, Button } from "@mui/material";
import { Product } from "../../types/type";
import { Box } from "@mui/system";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {
  product: Product;
};

function CarouselProduct({ product }: Props) {
  // const productCarousel = useSelector(
  //   (state: RootState) => state.products.productList
  // );
  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(fetchProductData());
  // }, [dispatch]);

  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt="green iguana"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default CarouselProduct;
