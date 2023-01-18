import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { RootState, AppDispatch } from "../../redux/store";
import { fetchProductData } from "../../redux/thunk/products";
import ProductItem from "./ProductItem";

import { Box } from "@mui/material";

import SearchBar from "../search/SearchBar";
import SortForm from "../sort/SortForm";
import Loading from "../loading/Loading";
import { productActions } from "../../redux/slice/products";

export default function ProductList() {
  const productList = useSelector(
    (state: RootState) => state.products.productList
  );
  const loading = useSelector((state: RootState) => state.products.loading);
  const dispatch = useDispatch<AppDispatch>();
  const dispatchLoading = useDispatch();

  useEffect(() => {
    dispatchLoading(productActions.toggleLoading(true));
    dispatch(fetchProductData());
    setTimeout(() => {
      dispatchLoading(productActions.toggleLoading(false));
    }, 2000);
  }, [dispatch, dispatchLoading]);

  const searchResultList = useSelector(
    (state: RootState) => state.searchresults.searchResultList
  );

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
          }}
        >
          <Box style={{ width: "100%" }}>
            <SortForm />
          </Box>
          {loading ? (
            <Box style={{ position: "absolute", top: "50%", left: "50%" }}>
              <Loading />
            </Box>
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
    <Box style={{ color: "grey" }}>
      <SearchBar />

      {searchResultList.length > 0 ? showSearchResultList() : showProductList()}
    </Box>
  );
}
