import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

import { RootState, AppDispatch } from "@/app/store";
import { ADD, REMOVE } from './wishlistSlice';
import { IProduct } from '@/entities/IProduct';

const useWishlistActions = () => {
    const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);
    const dispatch = useDispatch<AppDispatch>();

    const toggleWishlist = (product: IProduct): void => {
        const newItem: IProduct = {
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
        }
        dispatch(wishlist.some((item: IProduct) => item.id === product.id) ? REMOVE(product.id) : ADD(newItem));
    }

    return { wishlist, toggleWishlist };
}
 
export default useWishlistActions;