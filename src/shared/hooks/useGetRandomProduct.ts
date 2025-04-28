import { useMemo } from "react";

import { IProduct } from "@/entities/IProduct";
import API from "@/api";
import useGetData from "./useGetData";

const useGetRandomProduct = (): IProduct | undefined => {
    const randomId: number = useMemo(() => {
        return Math.floor(Math.random() * 194) + 1;
    }, []);
    const { data } = useGetData<IProduct>(API.SINGLE_PRODUCT(randomId), 'randomProduct', randomId);
    return data;
};
 
export default useGetRandomProduct;