import React, {useState} from "react";
import { Button,Snackbar,Alert, AlertTitle } from "@mui/material";
import { useSelector, useDispatch} from "react-redux";

import {ProductDetail} from "../../types/type";
import { cartActions } from "../../redux/slice/cartList";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { AppDispatch, RootState } from "../../redux/store";
import fetchRelatedProductsData from "../../redux/thunk/relatedProducts";
import {Params, useParams} from "react-router-dom"
import { useEffect } from "react";

import RelatedProducts from "./RelatedProduct";
import { ConstructionOutlined } from "@mui/icons-material";

import { wishActions } from "../../redux/slice/wishList";

import { Product } from "../../types/type";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function ProductDetailItem({product}: ProductDetail){
    let localStorageWishList: Product[] = JSON.parse(localStorage.getItem("favoriteList") || "null");
    if(localStorageWishList == null) localStorageWishList = [];
  
    const dispatch = useDispatch<AppDispatch>();

    const cartList = useSelector((state: RootState) => state.cart.cartList);
    const updateProduct = {...product, quantity: 1}
    const isInCart= cartList.some((item)=> 
      item.id === product.id
    );

    const isDuplicated = localStorageWishList.some(
        (wishItem) =>
          wishItem.title.toLocaleLowerCase() === product.title.toLocaleLowerCase()
      );    

    const [openCart, setOpenCart] = useState(false);
    const [addCart, setAddCart]= useState(false)

    const [openFavorite, setOpenFavorite] = useState(false);
    const [addFavorite, setAddFavorite] = useState(false);

    const handleClickFavorite = () => {
        setOpenFavorite(true);
      };

    const handleAddFavorite = () => {
    setAddFavorite(true);
    };
    
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
        setOpenFavorite(false);
        setAddFavorite(false);
        setOpenCart(false);
        setAddCart(false);
    };

    const relatedProducts = useSelector((state: RootState) => state.relatedProducts.relatedProducts);
    const categoryName = product.category;

    useEffect(()=>{
        dispatch(fetchRelatedProductsData(categoryName));
    }, [dispatch, categoryName])

    const relatedProductsCopy = [...relatedProducts];

    const thisProduct = relatedProductsCopy.findIndex((item) => item.id === product.id);

    if (thisProduct !== -1) {
        relatedProductsCopy.splice(thisProduct, 1)
    }

    const firstThreeRelated = relatedProductsCopy.slice(0, 3);

    return (
        <Box>
            <Box sx={{ flexGrow: 1, width: "80%", margin: "70px auto", marginBottom: "100px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item>
                            <img src={product.image} width="350px" />
                        </Item>
                    </Grid>

                    <Grid item xs={6}>
                        <Item sx={{ textAlign: "left" }}>
                            <Typography
                                style={{ paddingBottom: 25 }}
                                gutterBottom
                                variant="h6"
                                component="div"  
                            >
                                {product.category.toUpperCase()}
                            </Typography>
                            <Rating name="read-only" value={product.rating.rate} readOnly style={{ height: 20 }}/>
                            <Typography
                                style={{ paddingBottom: 25 }}
                                gutterBottom
                                variant="h5"
                                component="div"
                                fontWeight={900}
                            >
                                {product.title}
                            </Typography>
                            <Typography
                                style={{ paddingBottom: 50 }}
                                gutterBottom
                                variant="body1"
                                component="div"
                            >
                                {product.description}
                            </Typography>
                                <Typography
                                style={{ paddingBottom: 25 }}
                                gutterBottom
                                variant="h5"
                                component="div"
                                fontWeight={900}
                            >
                                $ {product.price}
                            </Typography>
                            <Stack direction="row" spacing={4}>
                                <Button variant="contained" endIcon={<ShoppingCartIcon />}
                                    onClick={() => {
                                        isInCart
                                            ? handleClickCart()
                                            : dispatch(cartActions.addToCart(updateProduct)) && handleAddCart();
                                        }}
                                  
                                >
                                    Add to Cart
                                </Button>
                                <Button variant="outlined" endIcon={<FavoriteBorderIcon />}
                                    onClick={() => {
                                        isDuplicated
                                            ? handleClickFavorite()
                                            : dispatch(wishActions.addFav(product)) && handleAddFavorite();
                                        }}
                                  >
                                    Add to Wish List
                                </Button>
                            </Stack>
                        </Item>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ flexGrow: 1, width: "80%", margin: "100px auto" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Item sx={{ textAlign: "left", marginBottom: "25px", borderBottom: "1px solid" }}>
                            <Typography variant="h5" fontWeight={900}>RELATED PRODUCTS</Typography>
                        </Item>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    {
                        firstThreeRelated.map((product) => {
                            return <RelatedProducts key={product.id} product={product}/>
                        })
                    }
                </Grid>
            </Box>
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