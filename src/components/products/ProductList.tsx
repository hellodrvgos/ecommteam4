import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";

import { RootState, AppDispatch } from "../../redux/store"
import { fetchProductData } from "../../redux/thunk/products";
import ProductItem from "./ProductItem";

export default function ProductList() {

    const productList = useSelector((state: RootState) => state.products.productList);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchProductData())
    }, [dispatch]);

    return (
            <div>
                This is ProductList
                {
                productList.map((product) => {
                    return <ProductItem key={product.id} product={product} />
                })
            }
            </div>

    )
}