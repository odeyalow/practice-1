import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import CarouselItem from '@/shared/components/carouselItem';
import RandomProduct from '@/shared/components/randomProduct';
import ProductsCollection from '@/shared/components/productsCollection';
import PagePagination from '@/shared/components/pagePagination';

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
                <Col className="my-1 px-1" xs="auto">
                    <Button variant='secondary' size='lg' active>All</Button>
                </Col>
                <Col className="my-1 px-1" xs="auto">
                    <Button variant='outline-secondary' size='lg'>Category</Button>
                </Col>
                <Col className="my-1 px-1" xs="auto">
                    <Button variant='outline-secondary' size='lg'>Category</Button>
                </Col>
                <Col className="my-1 px-1" xs="auto">
                    <Button variant='outline-secondary' size='lg'>Category</Button>
                </Col>
                <Col className="my-1 px-1" xs="auto">
                    <Button variant='outline-secondary' size='lg'>Category</Button>
                </Col>
                <Col className="my-1 px-1" xs="auto">
                    <Button variant='outline-secondary' size='lg'>Category</Button>
                </Col>
                <Col className="my-1 px-1" xs="auto">
                    <Button variant='outline-secondary' size='lg'>Category</Button>
                </Col>
            </Row>
            <Row gap={1} className='mx-auto'>
                <ProductsCollection placement='grid'/>
            </Row>
            <PagePagination />
        </Container>
    );
}
 
export default Home;