import { Carousel, Container } from 'react-bootstrap';

import RandomProduct from "./randomProduct";

const RandomProductsCarousel = () => {
    return (
        <Carousel variant='dark' style={{ background: '#E0E0E0', borderRadius: '10px' }} className='pt-4 pb-5'>
            <Carousel.Item>
                <Container className='d-flex gap-2 justify-content-center'>
                    <RandomProduct />
                    <RandomProduct />
                    <RandomProduct />
                    <RandomProduct />
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container className='d-flex gap-2 justify-content-center'>
                    <RandomProduct />
                    <RandomProduct />
                    <RandomProduct />
                    <RandomProduct />
                </Container>
            </Carousel.Item>
        </Carousel>
    );
}
 
export default RandomProductsCarousel;