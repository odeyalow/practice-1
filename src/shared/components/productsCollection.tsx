import { Container, Row, Col, Stack } from 'react-bootstrap';

import ProductCard from './productCard';
import ProductCartCard from './productCartCard';

import useGetData from '@/shared/hooks/useGetData';
import { IProductResponse, IProduct } from '@/entities/IProduct';
import API from '@/api';

interface ProductsCollectionProps {
    placement: string;
}

const ProductsCollection:React.FC<ProductsCollectionProps> = ({ placement }) => {
    const { data } = useGetData<IProductResponse>(API.ALL_PRODUCTS(), 'products');

    if ( placement === 'grid' ) {
        return (
            <Container>
                <Row md="auto" className='d-flex justify-content-center'>
                    { 
                        data && data.products.map((product: IProduct) => {
                            return <Col key={product.id}><ProductCard product={product}/></Col>
                        })
                    }
                </Row>
            </Container>
        );
    } else if ( placement === 'list' ) {
        return (
            <Stack>
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
            </Stack>
        );
    }
    
}
 
export default ProductsCollection;