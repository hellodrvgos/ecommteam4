import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { RootState, AppDispatch } from "../../redux/store";
import { fetchProductData } from "../../redux/thunk/products";
import ProductItem from "./ProductItem";

import { Box } from "@mui/material";

import SearchBar from "../search/SearchBar";
import SortForm from "../sort/SortForm";
import Loading from "../loading/Loading";

export default function ProductList() {
  const productList = useSelector(
    (state: RootState) => state.products.productList
  );
  const loading = useSelector((state: RootState) => state.products.loading);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  const searchResultList = useSelector(
    (state: RootState) => state.searchresults.searchResultList
  );

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  const showProductList = () => {
    return (
      <>
        <Box
          display="flex"
          flexWrap="wrap"
          style={{
            width: "90%",
            marginInline: "auto",
            marginBottom: "100px",
            height: "auto",
          }}
        >
          <Box style={{ width: "100%" }}>
            <SortForm />
          </Box>
          {loading ? (
            <Loading />
          ) : (
            productList.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          )}
        </Box>
      </>
    );
  };

  const showSearchResultList = () => {
    return searchResultList.map((product) => (
      <ProductItem key={product.id} product={product} />
    ));
  };

  return (
    <div>
      <SearchBar />

      {searchResultList.length > 0 ? showSearchResultList() : showProductList()}
    </div>
  );
}
