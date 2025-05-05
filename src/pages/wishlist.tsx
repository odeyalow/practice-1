import { Alert } from "react-bootstrap";

import useWishlistActions from "@/features/wishlist/useWishlistActions";
import ContentWrapper from "@/shared/components/contentWrapper";
import ProductsCollection from "@/shared/components/productsCollection";

const Wishlist = () => {
    const { wishlist } = useWishlistActions();
    return (
        <ContentWrapper title="Wishlist">
            {
                wishlist.length ? <ProductsCollection placement='grid' products={wishlist} /> : <Alert className='my-3'>Your wishlist is empty, look for something that you will like!</Alert>
            }
        </ContentWrapper>
    );
}
 
export default Wishlist;