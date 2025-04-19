interface IProduct {
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

type IProductImg = {
    img: string;
}

export default IProduct;