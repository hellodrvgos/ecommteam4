import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { RootState, AppDispatch } from "../../redux/store";
import { fetchProductData } from "../../redux/thunk/products";
import ProductItem from "./ProductItem";
import { Box } from "@mui/material";

export default function ProductList() {
  const productList = useSelector(
    (state: RootState) => state.products.productList
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      style={{ width: "90%", marginInline: "auto", border: "1px solid red" }}
    >
      {productList.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </Box>
  );
}
