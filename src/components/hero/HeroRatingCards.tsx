import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { Product } from "../../types/type";
import { Box } from "@mui/system";

type Props = {
  product: Product;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

function HeroRatingCards({ product }: Props) {
  return (
    <Box style={{ width: "100%" }}>
      <Card sx={{ maxWidth: 345 }}>
        <Item
          sx={{
            boxShadow: 1,
            width: "95%",
            margin: "0 auto",
            paddingTop: 3,
            paddingBottom: 5,
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt="green iguana"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <Typography
            style={{ paddingBottom: 5, paddingTop: 15, height: "100px" }}
            gutterBottom
            variant="body1"
            component="div"
            fontWeight={900}
          >
            {product.title}
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
            $ {product.price}
          </Typography>
          <Button variant="contained" component={Link} to="/products/3">
            View Product
          </Button>
        </Item>
      </Card>
    </Box>
  );
}

export default HeroRatingCards;
