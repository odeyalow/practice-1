import { Container, Row, Col, Stack } from 'react-bootstrap';

import ProductCard from './productCard';
import ProductCartCard from './productCartCard';
import { IProduct } from '@/entities/IProduct';
import CardPlaceholderCollection from './placeholders/cardPlaceholderCollection';

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
                        products ? products.map((product: IProduct) => {
                            return <Col key={product.id}><ProductCard product={product}/></Col>
                        }) : <CardPlaceholderCollection />
                    }
                </Row>
            </Container>
        );
    } else if ( placement === 'list' ) {
        return (
            <Stack>
                {
                    products && products.map((product: IProduct) => {
                        return <ProductCartCard  key={product.id} product={product}/>
                    })
                }
            </Stack>
        );
    }
    
}
 
export default ProductsCollection;