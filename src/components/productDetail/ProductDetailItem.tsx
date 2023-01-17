import React from "react";

import {ProductDetail} from "../../types/type";


export default function ProductDetailItem({product}: ProductDetail){
    
      return (
        <div> 
            <div className="image"><img src={product.image} width="100px" height="150px"/></div>
            <div className="name-description">
                <div>{product.title}</div>
                <div>{product.price}</div>
                <div>{product.description}</div>
                <div><button>Add to cart</button></div>
            </div>
        </div>
       );
}