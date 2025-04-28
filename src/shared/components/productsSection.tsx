import PagePagination from "./pagePagination";
import ProductsCollection from "./productsCollection";
import useProductsPagination from "../hooks/useProductsPagination";

const ProductsSection = ({ productsPlacement }: { productsPlacement: string }) => {
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