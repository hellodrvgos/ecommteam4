import { detailActions } from '../slice/productdetails';
import { AppDispatch } from "../store";

export default function fetchProductDetailData(productId: string | undefined){
    const url = `https://fakestoreapi.com/products/${productId}`;
    return (dispatch: AppDispatch) => {
        fetch(url)
        .then((res)=> res.json())
        .then((data)=> dispatch(detailActions.getDetailData(data)));
    }
}