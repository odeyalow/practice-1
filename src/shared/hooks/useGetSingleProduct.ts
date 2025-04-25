import useGetData from "./useGetData";
import API from "@/api";
import { IProduct } from "@/entities/IProduct";

const useGetSingleProduct = (productID: number): IProduct | undefined => {
    const { data } = useGetData<IProduct>(API.SINGLE_PRODUCT(productID), 'product', productID);
    return data;
}
 
export default useGetSingleProduct;