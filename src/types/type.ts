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
}

export type ProductDetail = {
    product: Product;
}