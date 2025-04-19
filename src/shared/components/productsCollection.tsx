import { Container, Row, Col, Stack } from 'react-bootstrap';

import ProductCard from './productCard';
import ProductCartCard from './productCartCard';

interface ProductsCollectionProps {
    placement: string;
    // products: [];
}

const ProductsCollection:React.FC<ProductsCollectionProps> = ({ placement }) => {
    if ( placement === 'grid' ) {
        return (
            <Container>
                <Row md="auto" className='d-flex justify-content-center'>
                    <Col><ProductCard /></Col>
                    <Col><ProductCard /></Col>
                    <Col><ProductCard /></Col>
                    <Col><ProductCard /></Col>
                    <Col><ProductCard /></Col>
                    <Col><ProductCard /></Col>
                    <Col><ProductCard /></Col>
                    <Col><ProductCard /></Col>
                    <Col><ProductCard /></Col>
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