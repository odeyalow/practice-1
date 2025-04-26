import ContentWrapper from "./contentWrapper";
import ProductsCollection from "./productsCollection";
import useGetData from "../hooks/useGetData";
import { IProductResponse } from "@/entities/IProduct";
import API from "@/api";
import { useParams } from "react-router";
import { useLocation } from "react-router";

const SingleCategegory = () => {
    const { name } = useParams<string>();
    const location = useLocation();
    const { data } = useGetData<IProductResponse>(API.CATEGORY_PRODUCTS(name), 'category', name);

    return (
        <ContentWrapper title={location.state.title} description={`Here are all the products in the ${location.state.title} category.`}>
            <ProductsCollection products={data ? data.products : null} placement="grid"/>
        </ContentWrapper>
    );
}
 
export default SingleCategegory;