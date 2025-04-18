import ContentWrapper from '@/shared/components/contentWrapper';
import ProductsCollection from '@/shared/components/productsCollection';

const Cart = () => {
    return (
        <ContentWrapper
        title='Сart'
        description='Here are the items in your cart.'>
            <ProductsCollection placement='list'/>
        </ContentWrapper>
    );
}
 
export default Cart;