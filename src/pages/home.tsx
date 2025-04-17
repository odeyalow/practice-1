import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import CarouselItem from '@/shared/components/carouselItem';
import RandomProduct from '@/shared/components/randomProduct';
import ProductsGrid from '@/shared/components/productsGrid';

const Home = () => {
    return (
        <Container>
            <Row className='my-5 align-items-stretch'>
                <Col sm={4} className='d-flex'>
                    <RandomProduct />
                </Col>
                <Col sm={8} className="d-flex">
                    <CarouselItem />
                </Col>
            </Row>
            <Row className='justify-content-center mb-2'>
                <Col xs="auto">
                    <Button variant='primary' size='lg' active>All</Button>
                </Col>
                <Col xs="auto">
                    <Button variant='outline-primary' size='lg'>Category</Button>
                </Col>
                <Col xs="auto">
                    <Button variant='outline-primary' size='lg'>Category</Button>
                </Col>
                <Col xs="auto">
                    <Button variant='outline-primary' size='lg'>Category</Button>
                </Col>
                <Col xs="auto">
                    <Button variant='outline-primary' size='lg'>Category</Button>
                </Col>
                <Col xs="auto">
                    <Button variant='outline-primary' size='lg'>Category</Button>
                </Col>
                <Col xs="auto">
                    <Button variant='outline-primary' size='lg'>Category</Button>
                </Col>
            </Row>
            <Row gap={1}>
                <ProductsGrid />
            </Row>
        </Container>
    );
}
 
export default Home;