import React, {useState} from "react";
import { Button,Snackbar,Alert, AlertTitle } from "@mui/material";
import { useSelector, useDispatch} from "react-redux";

import {ProductDetail} from "../../types/type";
import { RootState } from "../../redux/store";
import { cartActions } from "../../redux/slice/cartList";

export default function ProductDetailItem({product}: ProductDetail){
    const cartList = useSelector((state: RootState)=> state.cart.cartList);
    const dispatch = useDispatch();
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
        <div> 
            <div className="image"><img src={product.image} width="100px" height="150px"/></div>
            <div className="name-description">
                <div>{product.title}</div>
                <div>{product.price}</div>
                <div>{product.description}</div>
                <div><Button onClick={() =>{
                    isInCart? handleClickCart()
                            : dispatch(cartActions.addToCart(updateProduct)) && handleAddCart();
                    }}>
                            Add to cart
                    </Button>
                </div>
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
            </div>
        </div>
       );
}