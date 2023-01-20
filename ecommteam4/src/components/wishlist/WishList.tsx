import React, { useState } from "react";
import { Container, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

import { RootState } from "../../redux/store";
// import FavItem from "./FavItem";
import { Box } from "@mui/system";
import WishItem from "./WishItem";

export default function WishList() {
  const list = useSelector((state: RootState) => state.products.productList);
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
    navigate("/countries");
  };
  return (
    <div>
      <Container
        sx={{ display: "flex", flexWrap: "wrap" }}
        style={{
          width: "100%",
          margin: "auto",
          height: "100%",
          marginBlock: "50px",
        }}
        component={Paper}
      >
        <Box style={{ marginTop: "20px" }}>
          <IconButton
            aria-label="back to products' page"
            onClick={navigateIcon}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </Box>
        {list.map((item) => (
          <WishItem setOpen={setOpen} key={item.id} product={item} />
        ))}
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Product removed from Wishlist !
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
}
