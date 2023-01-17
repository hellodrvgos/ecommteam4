import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { productActions } from "../../redux/slice/products";
import { AppDispatch } from "../../redux/store";
import { fetchProductData } from "../../redux/thunk/products";

function SortForm() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Filter by
        </InputLabel>
        <Select labelId="demo-simple-select-helper-label" label="Age">
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem onClick={() => dispatch(productActions.sortByTitle())}>
            Title
          </MenuItem>
          <MenuItem onClick={() => dispatch(productActions.sortByPrice())}>
            Price
          </MenuItem>
          <MenuItem onClick={() => dispatch(productActions.sortByCategory())}>
            Category
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SortForm;
