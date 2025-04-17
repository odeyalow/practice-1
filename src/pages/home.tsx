import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

import CarouselItem from '@/shared/components/carouselItem';
import PlaceholderCarousel from '@/resources/placeholder-carousel.png';

const Home = () => {
    return (
        <Container>
            <Row className='my-5'>
                <Col sm={4}>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={8}>
                    <CarouselItem />
                </Col>
            </Row>
            <Row>
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
            </Row>
        </Container>
    );
}
 
export default Home;