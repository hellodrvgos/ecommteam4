import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";

import { RootState, AppDispatch } from "../../redux/store"
import { fetchProductData } from "../../redux/thunk/products";
import ProductItem from "./ProductItem";
import SearchBar from "../search/SearchBar";

export default function ProductList() {

    const productList = useSelector((state: RootState) => state.products.productList);

    const dispatch = useDispatch<AppDispatch>();

    const searchResultList =  useSelector((state: RootState) => state.searchresults.searchResultList);

    useEffect(() => {
        dispatch(fetchProductData())
    }, [dispatch]);

    const showProductList = () => {
        return (
            productList.map((product) => (
                <ProductItem key={product.id} product={product}/>
            ))
        )
    }

    const showSearchResultList = () => {
        return (
            searchResultList.map((product) => (
                <ProductItem key={product.id} product={product}/>
            ))
        )
    }

    return (
            <div>
                This is ProductList
                <SearchBar/>
                {
                    searchResultList.length > 0 ?
                    showSearchResultList() :
                    showProductList()
                }
            </div>
    )
}