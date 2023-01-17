export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
    }
    quantity: number;
}

export type ProductDetail = {
  product: Product;
};
