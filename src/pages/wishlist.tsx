import useWishlistActions from "@/features/wishlist/useWishlistActions";
import ContentWrapper from "@/shared/components/contentWrapper";
import ProductsCollection from "@/shared/components/productsCollection";

const Wishlist = () => {
    const { wishlist } = useWishlistActions();
    return (
        <ContentWrapper title="Wishlist">
            <ProductsCollection placement='grid' products={wishlist} />
        </ContentWrapper>
    );
}
 
export default Wishlist;