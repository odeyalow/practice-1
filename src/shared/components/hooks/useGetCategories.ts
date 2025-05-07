import API from '@/api';
import useGetData from './useGetData';
import ICategory from '@/entities/ICategory';
import { useMemo } from 'react';

function useGetCategories(limit: number): ICategory[] | undefined {
    const { data } = useGetData<ICategory[]>(API.PRODUCTS_CATEGORIES, 'categories', limit);
    const categories = useMemo(() => {
        return limit > 0 ? data && data.slice(0, limit) : data;
    }, [data, limit])

    return categories;
}
 
export default useGetCategories;