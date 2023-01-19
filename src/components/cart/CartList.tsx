import React, {useState} from "react";
import { Button, Snackbar, Alert, Stack } from "@mui/material";
import { useSelector} from "react-redux"

import { RootState } from "../../redux/store"
import CartItem from "./CartItem"
import { Link } from "react-router-dom";
import { Product } from "../../types/type";

import { Box } from "@mui/system";

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

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
                <Box
                  style={{
                    marginTop: "70px"
                  }}
                >
                  <h2>Your cart is empty...</h2>
                  <h2>Check out our <Link to="/products">collection!</Link></h2>
                  {/* <Link to="/products"><Button>Go</Button></Link> */}
                </Box>
            );
        }
    return (
        // <div>
    <Box
    display="flex"
    flexWrap="wrap"
    style={{
      width: "90%",
      marginTop: "70px",
      marginInline: "auto",
      marginBottom: "100px",
    }}
    >
      <Box sx={{ flexGrow: 1, width: "100%", margin: "0px auto", marginBottom: "50px" }}>
        <Grid container >

          <Grid item xs={12} >
            <Item sx={{ height: "100%"}}>
            <Typography variant="h5" sx={{fontWeight: "900"}}>This is your Shopping Cart</Typography>
            </Item>
          </Grid>

        </Grid>
      </Box>

      <Stack direction={"column"} spacing={4} sx={{margin: "0 auto"}}>
      {
        cartList.map((cart)=> {
          return <CartItem key={cart.id} product={cart}/>
        })
      }
      </Stack>

      <Box sx={{ flexGrow: 1, width: "100%", margin: "10px auto"}}>
        <Grid container >

          <Grid item xs={12} >
            <Item sx={{ height: "100%"}}>
            <Typography variant="h5" sx={{fontWeight: "900"}}>Total: $ {total.toFixed(2)}</Typography>
            </Item>
          </Grid>

        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, width: "100%", margin: "10px auto"}}>
      <Button variant="contained"  onClick={() => {handleClick()}}>Check Out</Button>
      </Box>

      {/* <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Success</AlertTitle>
          Item removed from favorites
        </Alert>
      </Snackbar> */}

      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            This is a success message!!
          </Alert>
      </Snackbar>

    </Box>


        //     {/* <h1>Your Cart</h1>
        //     <div>
        //         {
        //          cartList.map((cart)=> {
        //             return <CartItem key={cart.id} product={cart}/>
        //          }
        //         )
        //         }
        //     </div>
        //     <div>
        //         <h1>Total:- &nbsp;{total.toFixed(2)}</h1>
        //     </div>
        //     <div>
        //         <Button onClick={() => {handleClick()}}>Check Out</Button>
        //     </div>
        //     <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        //        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        //           This is a success message!!
        //         </Alert>
        //     </Snackbar>
        // </div> */}
    )
}