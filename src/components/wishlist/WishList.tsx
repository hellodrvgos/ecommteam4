import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import WishItem from "./WishItem";
import { Product } from "../../types/type";

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Box } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function WishList() {

  let localStorageWishList: Product[] = JSON.parse(localStorage.getItem("favoriteList") || "null");
  if(localStorageWishList == null) localStorageWishList = [];

  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const navigate = useNavigate();

  const navigateIcon = () => {
    navigate("/products");
  };

  return (
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
      <Box sx={{ flexGrow: 1, width: "100%", margin: "0px auto", marginBottom: "20px" }}>
        <Grid container >

          <Grid item xs={12} >
            <Item sx={{ height: "100%"}}>
            <Typography variant="h5" sx={{fontWeight: "900"}}>This is your Wishlist</Typography>
            </Item>
          </Grid>

        </Grid>
      </Box>

      {localStorageWishList.map((item) => (
        <WishItem setOpen={setOpen} key={item.id} product={item} />
      ))}

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Product removed from Wishlist !
        </Alert>
      </Snackbar>
    </Box>
  );
}
