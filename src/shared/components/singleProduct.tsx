import { Card, Button, Row, Col, Alert } from 'react-bootstrap';

import ContentWrapper from "./contentWrapper";
import CartIcon from '@/resources/icons/cart-icon';
import WishlistIcon from '@/resources/icons/wishlist-icon';

const SingleProduct = () => {
    return (
        <ContentWrapper title="Product name">
            <Card className="my-3" border='secondary'>
                <Row sm="auto" className="gap-0">
                    <Col sm={1} className='mt-2'>
                        <Button active className='my-1' variant='outline-secondary'>
                            <Card.Img
                                src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
                                alt="Example"
                                style={{ width: '5rem' }}
                                />
                        </Button>
                        <Button className='my-1' variant='outline-secondary'>
                            <Card.Img
                                src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
                                alt="Example"
                                style={{ width: '5rem' }}
                                />
                        </Button>
                        <Button className='my-1' variant='outline-secondary'>
                            <Card.Img
                                src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
                                alt="Example"
                                style={{ width: '5rem' }}
                                />
                        </Button>
                    </Col>
                    <Col sm={4} className='my-auto d-flex'>
                        <Card.Img
                        src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
                        alt="Example"
                        style={{ width: '20rem', margin: '0 auto' }}
                        />
                    </Col>
                    <Col sm={7}>
                        <Card.Body className='h-100 d-flex flex-column'>
                            <Card.Text>
                                <h6>Category: Beauty</h6>
                                <h6>In stock: 37</h6>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quibusdam, nulla quas tenetur laboriosam necessitatibus error temporibus distinctio aspernatur ratione.
                            </Card.Text>
                            <Alert variant='secondary' className='d-flex align-items-center justify-content-between'>
                                <h5>Brand Name</h5>
                                <h6>Product rating: 5</h6>
                            </Alert>
                            <Col className='d-flex justify-content-end'>
                            <h2>59</h2>
                            <h6>.99$</h6>
                            </Col>
                            <Row className='mt-auto px-2'>
                                <Col sm={5} className='p-1'>
                                    <Button className='w-100 h-100 d-flex justify-content-center align-items-center gap-1' variant="success">Buy now</Button>
                                </Col>
                                <Col sm={5} className='p-1'>
                                    <Button className='w-100 h-100 d-flex justify-content-center align-items-center gap-1' variant="dark">
                                        Add to cart
                                        <CartIcon size={20}/>
                                    </Button>
                                </Col>
                                <Col sm={2} className='p-1'>
                                    <Button className='w-100 h-100 d-flex justify-content-center align-items-center gap-1' variant="danger">
                                        <WishlistIcon size={20}/>
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </ContentWrapper>
    );
}
 
export default SingleProduct;