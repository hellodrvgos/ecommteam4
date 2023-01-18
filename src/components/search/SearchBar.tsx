import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../redux/store";
import { searchActions } from "../../redux/slice/search";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { autoBatchEnhancer } from "@reduxjs/toolkit";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    //   marginLeft: theme.spacing(3),
    width: "80%",
    margin: "0 auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchBar() {
  const [userInput, setUserInput] = useState<string>("");

  const dispatch = useDispatch();

  const productList = useSelector(
    (state: RootState) => state.products.productList
  );

  const resultList = productList.filter((product) =>
    product.title.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
  );

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
    dispatch(searchActions.searchResults(resultList));
    if (event.target.value === "") {
      dispatch(searchActions.searchResults([]));
    }
  };
 
  return (
    <Search>
      <StyledInputBase
        placeholder="Search by Product Name"
        inputProps={{ "aria-label": "search" }}
        onChange={onChangeHandler}
      />
    </Search>
  );
}
