import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Alert, AlertTitle, Rating, Snackbar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import { red } from "@mui/material/colors";
import { CardActionArea, Stack } from "@mui/material";

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
            // sx={{ color: isFavorite ? red[500] : "#474444" }}
            onClick={removeFav}
            >
            <DeleteIcon />
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
      </Card>
      <Snackbar open={addCart} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Product added in Shopping Cart !
        </Alert>
      </Snackbar>
      <Snackbar open={openCart} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        Product is already in Shopping Cart !
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default WishItem;
