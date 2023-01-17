import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import {Params, useParams} from "react-router-dom"

import { AppDispatch, RootState } from "../../redux/store";
import fetchProductDetailData from "../../redux/thunk/productDetail";
import ProductDetailItem from "./ProductDetailItem";

export default function CountryDetail(){
    const productDetail = useSelector((state: RootState)=> state.productDetail.productDetail);
    const dispatch = useDispatch<AppDispatch>();
    const {productId} = useParams<Params>();
    useEffect(()=>{
        dispatch(fetchProductDetailData(productId));
    }, [dispatch, productId])
    return (
        <div className="country-detail">
            {
             productDetail.map((item)=>{
                return <ProductDetailItem key={item.id} item={item}/>
             })
            }
        </div>
    );
}