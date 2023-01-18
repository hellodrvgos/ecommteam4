import React, {useState} from "react";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Collapse from "@mui/material/Collapse";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Alert, AlertTitle, Rating, Snackbar } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import { red } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import { Product } from "../../types/type";
import { wishActions } from "../../redux/slice/wishList";
import { cartActions } from "../../redux/slice/cartList";

type Prop = {
  product: Product;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

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

function WishItem({ product, setOpen }: Prop) {
  const dispatch = useDispatch<AppDispatch>();
  const removeFav = () => {
    dispatch(wishActions.removeFav(product.id));
    setOpen(true);
  };
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const cartList = useSelector((state: RootState)=> state.cart.cartList);
  const updateProduct = {...product, quantity: 1}
  const isInCart= cartList.some((item)=> 
      item.id === product.id
    );
  const [openCart, setOpenCart] = useState(false);
  const [addCart, setAddCart]= useState(false)
  const handleClickCart = () => {
        setOpenCart(true);
    }
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
        setOpenCart(false);
        setAddCart(false);
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
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ height: 100 }}
          >
            {product.title}
          </Typography>

          <Typography>{product.category}</Typography>
        </CardContent>

        <Rating name="read-only" value={product.rating.rate} readOnly />
        <CardActions>
          <IconButton
              aria-label="addToCart"
              onClick={() => {
                isInCart
                  ? handleClickCart()
                  : dispatch(cartActions.addToCart(updateProduct)) && handleAddCart();
              }}
            >
              <ShoppingCartOutlinedIcon sx={{ color: isInCart ? red[500] : "#474444" }}/>
          </IconButton>
        </CardActions>
        <CardActions>
          <DeleteIcon
            color="action"
            aria-label="removeFav"
            onClick={removeFav}
          />
        </CardActions>
        <Typography>Description</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography> {product.description}</Typography>
        </Collapse>
      </Card>
      <Snackbar open={addCart} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
              <AlertTitle>Success</AlertTitle>
                Item added to your cart!!
          </Alert>
      </Snackbar>
      <Snackbar open={openCart} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
                The product is already in your cart!!
          </Alert>
      </Snackbar>
    </Box>
  );
}

export default WishItem;
