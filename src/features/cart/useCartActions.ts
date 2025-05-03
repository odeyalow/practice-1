import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

import { RootState, AppDispatch } from "@/app/store";
import { ADD, REMOVE, CLEAR, ToggleCheckout, SetCheckoutAll, RemoveCheckoutAll } from './cartSlice';
import { IProduct } from '@/entities/IProduct';

const useCartActions = () => {
    const cart = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch<AppDispatch>();

    const onAdd = (product: IProduct): void => {
        const newItem: IProduct = {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            thumbnail: product.thumbnail,
            isInCheckout: true
        }
        dispatch(ADD(newItem));
    }

    const onRemove = (id: number) => dispatch(REMOVE(id));
    const onClear = () => dispatch(CLEAR());
    const toggleCheckout = (id: number) => dispatch(ToggleCheckout(id));
    const setCheckoutAll = () => dispatch(SetCheckoutAll());
    const removeCheckoutAll = () => dispatch(RemoveCheckoutAll());

    return { cart, onAdd, onRemove, onClear, toggleCheckout, setCheckoutAll, removeCheckoutAll };
}
 
export default useCartActions;