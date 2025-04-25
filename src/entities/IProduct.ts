export interface IProductResponse {
    limit: number;
    skip: number;
    total: number;
    products: IProduct[];
}

export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    rating: number;
    stock: number;
    brand: string;
    images: IProductImg[];
    thumbnail: string
}

export interface IProductImg {
    img: string;
}