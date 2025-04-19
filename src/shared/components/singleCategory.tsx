import ContentWrapper from "./contentWrapper";
import ProductsCollection from "./productsCollection";

const SingleCategegory = () => {
    return (
        <ContentWrapper title="Category name" description="Here are all the products in the Beauty category.">
            <ProductsCollection placement="grid"/>
        </ContentWrapper>
    );
}
 
export default SingleCategegory;