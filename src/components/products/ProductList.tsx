import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { RootState, AppDispatch } from "../../redux/store";
import { fetchProductData } from "../../redux/thunk/products";
import ProductItem from "./ProductItem";
import SearchBar from "../search/SearchBar";
import SortForm from "../sort/SortForm";
import Loading from "../loading/Loading";
import { productActions } from "../../redux/slice/products";

import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));


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
        <Box
          display="flex"
          flexWrap="wrap"
          style={{
            width: "90%",
            marginInline: "auto",
            marginBottom: "100px",
          }}
        >
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
    );
  };

  const showSearchResultList = () => {
    return (
      <Box
      display="flex"
      flexWrap="wrap"
      style={{
        width: "90%",
        marginInline: "auto",
        marginBottom: "100px",
      }}
      >
        {
          searchResultList.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        }
      </Box>
    )
  }

  return (
    <Box style={{ color: "grey" }}>
      <Box sx={{ flexGrow: 1, width: "80%", margin: "70px auto", marginBottom: "50px" }}>
        <Grid container spacing={2} >
          <Grid item xs={2}>
            <Item sx={{textAling: "left", boxShadow: 1, height: "100%"}}>
            <SortForm />
            </Item>
          </Grid>
          <Grid item xs={10} >
            <Item sx={{textAling: "left", boxShadow: 1, height: "100%"}}>
            <SearchBar />
            </Item>
          </Grid>
        </Grid>
      </Box>
      {searchResultList.length > 0 ? showSearchResultList() : showProductList()}
    </Box>
  );
}
