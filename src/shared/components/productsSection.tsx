import PagePagination from "./pagePagination";
import ProductsCollection from "./productsCollection";
import useProductsPagination from "../hooks/useProductsPagination";

interface ProductsSectionProps {
    productsPlacement: string;
}

const ProductsSection:React.FC<ProductsSectionProps> = ({ productsPlacement }) => {
    const { getNextPage,
            getPreviousPage,
            setPageNumber,
            pageNumber,
            totalPagesArray,
            data } = useProductsPagination(30);
    
    return (
        <>
            <ProductsCollection
            placement={productsPlacement}
            products={data ? data.products : null}/>

            <PagePagination 
            getNextPage={getNextPage}
            getPreviousPage={getPreviousPage}
            setPageNumber={setPageNumber}
            pageNumber={pageNumber}
            totalPagesArray={totalPagesArray}/>
        </>
    );
}
 
export default ProductsSection;