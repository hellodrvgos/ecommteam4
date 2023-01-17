import React from "react";

import {Product} from "../../types/type";

type Prop ={
    item: Product
}
export default function ProductDetailItem({item}: Prop){
    
      return (
        <div> 
            <div className="image"><img src={item.image} width="100px" height="150px"/></div>
            <div className="name-description">
                <div>{item.title}</div>
                <div>{item.price}</div>
                <div>{item.description}</div>
                <div><button>Add to cart</button></div>
            </div>
        </div>
       );
}