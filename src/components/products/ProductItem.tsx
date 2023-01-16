import { ProductDetail } from "../../types/type";
import "./ProductItem.css"

export default function ProductItem({product}: ProductDetail) {
    return (
        <div>
            This is Product Item
            <p>Id: {product.id}</p>
            <p>Name: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>Category: {product.caterogy}</p>
            <img className="product_image" src={product.image} />
            <p>Rating: {product.rating.rate}</p>
        </div>
    )
}