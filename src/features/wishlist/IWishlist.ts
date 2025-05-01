import { IProduct } from "@/entities/IProduct";

export interface IWishlist {
    wishlist: WishlistItem[];
}

export type WishlistItem = Pick<IProduct, 'id' | 'title' | 'price' | 'thumbnail'>;