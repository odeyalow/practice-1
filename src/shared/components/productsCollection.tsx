import { Container, Row, Col, Stack } from 'react-bootstrap';

import ProductCard from './productCard';
import ProductCartCard from './productCartCard';
import { IProduct } from '@/entities/IProduct';

interface ProductsCollectionProps {
    products: IProduct[] | null;
    placement: string;
}

const ProductsCollection:React.FC<ProductsCollectionProps> = ({ placement, products }) => {
    if ( placement === 'grid' ) {
        return (
            <Container>
                <Row md="auto" className='d-flex justify-content-center'>
                    {
                        products && products.map((product: IProduct) => {
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