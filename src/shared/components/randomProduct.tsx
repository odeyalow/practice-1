import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CartIcon from '@/resources/icons/cart-icon';
import WishlistIcon from '@/resources/icons/wishlist-icon';

const RandomProduct = () => {
    return (
        <Card as={Link} to='/products/name' style={{ width: '20rem', textDecoration: 'none' }} className='w-100 h-100'>
            <Card.Img variant="top" src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
            style={{ objectFit: 'cover' }}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Container>
                    <Row className='d-flex justify-content-between'>
                        <Col sm={9} className='p-0'>
                            <Button className='w-100 h-100 d-flex justify-content-center align-items-center gap-1' variant="dark">
                                Add to cart
                                <CartIcon fill={false} size={20}/>
                            </Button>
                        </Col>
                        <Col sm={2} className='p-0'>
                            <Button className='w-100 px-0 h-100 d-flex justify-content-center align-items-center' variant="danger">
                                <WishlistIcon fill={false} size={20}/>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}
 
export default RandomProduct;