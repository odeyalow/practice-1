import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CartIcon from '@/resources/icons/cart-icon';
import WishlistIcon from '@/resources/icons/wishlist-icon';

const ProductCard = () => {
    return (
        <Card className='my-3' style={{ width: '15rem' }}>
            <Card.Img className='mx-auto' variant="top" style={{ width: '10rem' }} src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" />
            <Card.Body>
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
 
export default ProductCard;