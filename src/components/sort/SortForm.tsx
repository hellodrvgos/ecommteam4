import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { productActions } from "../../redux/slice/products";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductData } from "../../redux/thunk/products";
import { Product } from "../../types/type";

function SortForm() {
  //   let productList = useSelector(
  //     (state: RootState) => state.products.productList
  //   );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">filter</InputLabel>
        <Select labelId="demo-simple-select-helper-label" label="Age">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem onClick={() => dispatch(productActions.sortByTitle())}>
            sortByTitle
          </MenuItem>
          <MenuItem onClick={() => dispatch(productActions.sortByPrice())}>
            sortByPrice
          </MenuItem>
          <MenuItem onClick={() => dispatch(productActions.sortByCategory())}>
            sortByCategory
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SortForm;
