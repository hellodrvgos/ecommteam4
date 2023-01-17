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
import { wishActions } from "../../redux/slice/wishList";

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
  // expanded mode
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const dispatch = useDispatch<AppDispatch>();
  const wishList = useSelector((state: RootState) => state.wish.wishList);
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
          height: "auto",
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
            <Typography
              style={{ height: 160 }}
              gutterBottom
              variant="h6"
              component="div"
            >
              {product.title}
            </Typography>
            <Typography>{product.caterogy}</Typography>
            <Typography>{product.price}$</Typography>
          </CardContent>
          <Rating name="read-only" value={product.rating.rate} readOnly />

          <FavoriteBorderIcon
            aria-label="addWish"
            sx={{ color: isFavorite ? red[500] : "#474444" }}
            onClick={() => {
              isDuplicated
                ? handleClick()
                : dispatch(wishActions.addFav(product)) && handleAdd();
            }}
          />
          <Typography>Description</Typography>
          <ExpandMore
            style={{}}
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActionArea>
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
        </Collapse>
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
