import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProductCard from './productCard';

const ProductsGrid = () => {
    return (
        <Container>
            <Row md="auto">
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
}
 
export default ProductsGrid;