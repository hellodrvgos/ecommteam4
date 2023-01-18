import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { productActions } from "../../redux/slice/products";
import { AppDispatch } from "../../redux/store";
import { fetchProductData } from "../../redux/thunk/products";

function SortForm() {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  const handleClose = () => {
    setClick(true);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Filter by
        </InputLabel>
        <Select
          value={click}
          onClick={handleClose}
          labelId="demo-simple-select-helper-label"
          label="Age"
        >
          <MenuItem
            onClick={() =>
              dispatch(productActions.sortByTitle()) && handleClose()
            }
          >
            Title
          </MenuItem>
          <MenuItem
            onClick={() =>
              dispatch(productActions.sortByPrice()) && handleClose()
            }
          >
            Price
          </MenuItem>
          <MenuItem
            onClick={() =>
              dispatch(productActions.sortByCategory()) && handleClose()
            }
          >
            Category
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SortForm;
