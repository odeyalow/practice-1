import { useSelector } from 'react-redux';

import ContentWrapper from "@/shared/components/contentWrapper";
import ProductsCollection from "@/shared/components/productsCollection";
import { RootState } from '@/app/store';
import useGetData from '@/shared/hooks/useGetData';
import { IProductResponse } from '@/entities/IProduct';
import API from '@/api';
import { useMemo } from 'react';
import { useParams } from 'react-router';

const SearchResultsPage = () => {
    const searchQuery = useSelector((state: RootState) => state.search.searchQuery);
    const { data } = useGetData<IProductResponse>(API.SEARCH_PRODUCTS(searchQuery), 'searchResult', searchQuery, true);
    const { query } = useParams();

    const render = useMemo(() => {
        return data &&  <ContentWrapper title={`Search results for "${searchQuery}"`}>
                        <ProductsCollection placement="grid" products={data?.products}/>
                    </ContentWrapper>
    }, [query])

    return render;
}
 
export default SearchResultsPage;