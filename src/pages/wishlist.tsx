import ContentWrapper from "@/shared/components/contentWrapper";
import ProductsCollection from "@/shared/components/productsCollection";

const Wishlist = () => {
    return (
        <ContentWrapper title="Wishlist">
            <ProductsCollection placement='grid'/>
        </ContentWrapper>
    );
}
 
export default Wishlist;