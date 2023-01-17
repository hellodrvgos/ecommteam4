export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    caterogy: string;
    image: string;
    rating: {
        rate: number;
    }
    quantity: number;
}

export type ProductDetail = {
    product: Product;
}