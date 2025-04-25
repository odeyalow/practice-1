import { useState, useMemo, useEffect } from "react";

import useGetData from "./useGetData";
import { IProductResponse } from '@/entities/IProduct';
import API from "@/api";

type UseProductsPaginationReturn = {
    pageNumber: number;
    totalPagesArray: number[];
    getPreviousPage: () => void;
    getNextPage: () => void;
    setPageNumber: (pageNumber: number) => void;
    skipValue: number;
    data: IProductResponse | undefined;
}

const useProductsPagination = (limit: number): UseProductsPaginationReturn => {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [skipValue, setSkipValue] = useState<number>(0);
    
    useEffect(() => setSkipValue(pageNumber * limit), [pageNumber]);

    const { data } = useGetData<IProductResponse>(API.ALL_PRODUCTS(limit, skipValue), 'products', pageNumber);

    const getPreviousPage = ():void => setPageNumber(prev => prev - 1);
    const getNextPage = ():void => setPageNumber(prev => prev + 1);
    const totalPages = useMemo(() => data && Math.ceil((data.total / limit)), [data])
    const totalPagesArray = useMemo(() => {
        return totalPages ? Array.from({ length: totalPages }, (_, i) => i + 1) : [ 1 ];
    }, [totalPages])

    return { getNextPage, getPreviousPage, setPageNumber, pageNumber, totalPagesArray, data, skipValue };
}
 
export default useProductsPagination;