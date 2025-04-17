import Carousel from 'react-bootstrap/Carousel';

import PlaceholderCarousel from '@/resources/placeholder-carousel.png';

const CarouselItem = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000} className='h-100'>
                <img src={PlaceholderCarousel} className="w-100 h-100"
                  style={{ objectFit: 'cover' }}/>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
 
export default CarouselItem;