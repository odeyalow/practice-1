import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CarouselItem from '@/shared/components/carouselItem';
import RandomProduct from '@/shared/components/randomProduct';
import CategoriesList from '@/shared/components/categoriesList';
import ProductsSection from '@/shared/components/productsSection';

const Home = () => {
    return (
        <Container>
            <Row className='my-5 align-items-stretch flex-row flex-row  -reverse'>
                <Col md={4} className='d-flex'>
                    <RandomProduct fullSize/>
                </Col>
                <Col md={8} className="d-flex">
                    <CarouselItem />
                </Col>
            </Row>
            <CategoriesList limit={7} enableVariantAll/>
            <Row className='d-flex justify-content-center'>
                <ProductsSection productsPlacement='grid'/>
            </Row>
        </Container>
    );
}
 
export default Home;