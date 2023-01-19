import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

import { productActions } from "../../redux/slice/products";
import { AppDispatch } from "../../redux/store";
import { fetchProductData } from "../../redux/thunk/products";

function SortForm() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ color: "grey", textTransform: "capitalize" }}
      >
        Filter by
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          style={{ color: "grey" }}
          onClick={() => {
            dispatch(productActions.sortByTitle());
            handleClose();
          }}
        >
          Title
        </MenuItem>
        <MenuItem
          style={{ color: "grey" }}
          onClick={() => {
            dispatch(productActions.sortByPrice());
            handleClose();
          }}
        >
          Price
        </MenuItem>
        <MenuItem
          style={{ color: "grey" }}
          onClick={() => {
            dispatch(productActions.sortByCategory());
            handleClose();
          }}
        >
          Category
        </MenuItem>
      </Menu>
    </div>
  );
}

export default SortForm;
