import { useSelector } from 'react-redux';

import ContentWrapper from "@/shared/components/contentWrapper";
import ProductsCollection from "@/shared/components/productsCollection";
import { RootState } from '@/app/store';
import useGetData from '@/shared/hooks/useGetData';
import { IProductResponse } from '@/entities/IProduct';
import API from '@/api';

const SearchResultsPage = () => {
    const searchQuery = useSelector((state: RootState) => state.search.searchQuery);
    const { data } = useGetData<IProductResponse>(API.SEARCH_PRODUCTS(searchQuery), 'searchResult', searchQuery, true);

    return (
        data && <ContentWrapper title={`Search results for "${searchQuery}"`}>
            <ProductsCollection placement="grid" products={data?.products}/>
        </ContentWrapper>
    );
}
 
export default SearchResultsPage;