import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CarouselItem from '@/shared/components/carouselItem';
import RandomProduct from '@/shared/components/randomProduct';
import ProductsCollection from '@/shared/components/productsCollection';
import PagePagination from '@/shared/components/pagePagination';
import CategoriesList from '@/shared/components/categoriesList';

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
            <CategoriesList />
            <Row className='d-flex justify-content-center'>
                <ProductsCollection placement='grid'/>
            </Row>
            <PagePagination />
        </Container>
    );
}
 
export default Home;