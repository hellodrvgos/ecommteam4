import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";

import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

import { AppDispatch } from "../../redux/store";
import { Product } from "../../types/type";
import { Box } from "@mui/system";
import { wishActions } from "../../redux/slice/wishList";

type Prop = {
  product: Product;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function WishItem({ product, setOpen }: Prop) {
  const dispatch = useDispatch<AppDispatch>();

  const removeFav = () => {
    dispatch(wishActions.removeFav(product.id));
    setOpen(true);
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
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography>{product.caterogy}</Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <Box>{product.rating.rate}</Box>
          <CardActions>
            <DeleteIcon
              color="action"
              aria-label="removeFav"
              onClick={removeFav}
            />
          </CardActions>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default WishItem;
