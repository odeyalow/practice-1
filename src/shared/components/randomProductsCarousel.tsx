import { Carousel, Container } from 'react-bootstrap';

import RandomProduct from "./randomProduct";

const RandomProductsCarousel = () => {
    const renderProductsByAmount = (amount: number): React.ReactElement[] | undefined => {
        const randomProductsCollection: React.ReactElement[] = [];
        for (let i = 0; i < amount; i++) {
            randomProductsCollection.push(
                <Carousel.Item>
                    <Container key={i} className='d-flex gap-2 justify-content-center'>
                        <RandomProduct addParam={false}/>
                        <RandomProduct addParam={false}/>
                        <RandomProduct addParam={false}/>
                        <RandomProduct addParam={false}/>
                    </Container>
                </Carousel.Item>
            );           
        }
        return randomProductsCollection;
    }

    return (
        <Carousel variant='dark' style={{ background: '#E0E0E0', borderRadius: '10px' }} className='pt-4 pb-5'>
            {renderProductsByAmount(2)?.map((collection: React.ReactElement) => {
                    return collection;
            })}
        </Carousel>
    );
}
 
export default RandomProductsCarousel;