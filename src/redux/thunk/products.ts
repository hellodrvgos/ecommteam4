import { productActions } from "../slice/products";
import { AppDispatch } from "../store";

const url = "https://fakestoreapi.com/products";

export function fetchProductData() {
    return async (dispatch: AppDispatch) => {
        const response = await fetch(url);
        const productData = await response.json();
        dispatch(productActions.getProductData(productData));
    }
}