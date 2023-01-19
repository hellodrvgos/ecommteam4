import React, { useState } from "react";
import { Container, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { AlertTitle } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

import { RootState } from "../../redux/store";
import { Box } from "@mui/system";
import WishItem from "./WishItem";

import { Product } from "../../types/type";

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function WishList() {
  let localStorageWishList: Product[] = JSON.parse(localStorage.getItem("favoriteList") || "null");
  if(localStorageWishList == null) localStorageWishList = [];
  
  // const wishList = useSelector((state: RootState) => state.wish.wishList);
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
    // <div>
    //   <Container
    //     sx={{ display: "flex", flexWrap: "wrap" }}
    //     style={{
    //       width: "100%",
    //       margin: "auto",
    //       height: "100%",
    //       marginBlock: "100px",
    //     }}
    //     component={Paper}
    //   >
    //     <Box style={{ marginTop: "20px" }}>
    //       <IconButton
    //         aria-label="back to products' page"
    //         onClick={navigateIcon}
    //       >
    //         <ArrowBackIosIcon />
    //       </IconButton>
    //     </Box>
    //     {localStorageWishList.map((item) => (
    //       <WishItem setOpen={setOpen} key={item.id} product={item} />
    //     ))}
    //     <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
    //       <Alert onClose={handleClose} severity="success">
    //         <AlertTitle>Success</AlertTitle>
    //         Item removed from favorites
    //       </Alert>
    //     </Snackbar>
    //   </Container>
    // </div>

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
          <AlertTitle>Success</AlertTitle>
          Item removed from favorites
        </Alert>
      </Snackbar>

    </Box>

    
  );
}
