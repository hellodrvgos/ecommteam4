import React, {useState} from "react";
import { Button, Snackbar, Alert } from "@mui/material";
import { useSelector} from "react-redux"

import { RootState } from "../../redux/store"
import CartItem from "./CartItem"
import { Link } from "react-router-dom";

export default function CartList() {
        const cartList = useSelector((state: RootState) => state.cart.cartList)
        const [open, setOpen] = useState(false);
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
        };
        let total = cartList.reduce<number>((sum: number, value) => {
            return sum + value.price
          }, 0);
        if (cartList.length === 0){
            return(
                <div>
                <h2>Your cart is empty...</h2>
                <h2>Check out our collection!!!</h2>
                <Link to="/products"><Button>Go</Button></Link>
                </div>
            );            
        }
    return (
        <div>
            <h1>Your Cart</h1>
            <div>
                {
                 cartList.map((cart)=> {
                    return <CartItem key={cart.id} product={cart}/>
                 }
                )
                }
            </div>
            <div>
                <h1>Total:- &nbsp;{total.toFixed(2)}</h1>
            </div>
            <div>
                <Button onClick={() => {handleClick()}}>Check Out</Button>
            </div>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
               <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                  This is a success message!!
                </Alert>
            </Snackbar>
        </div>
    )
}