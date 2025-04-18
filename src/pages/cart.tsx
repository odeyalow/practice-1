import { Button, Form, Col, Container, Card, Row, Navbar } from 'react-bootstrap';

import ContentWrapper from '@/shared/components/contentWrapper';
import ProductsCollection from '@/shared/components/productsCollection';

const Cart = () => {
    return (
        <ContentWrapper
        title='Сart'
        description='Here are the items in your cart.'>
            <Container>
                <Row>
                    <Col lg={8}>
                        <Container className='d-flex align-items-center p-0'>
                            <Form.Check
                                label="Add all"
                                name="radio"
                                type="checkbox"
                            />
                            <Button variant='danger' className='d-flex justify-content-between align-items-center ms-auto'>
                                Remove all (6)
                            </Button>
                        </Container>
                        <ProductsCollection placement='list'/>
                    </Col>
                    <Col lg={4} >
                        <Navbar sticky='top' className='pt-3'>
                            <Card>
                                <Card.Header>Checkout</Card.Header>
                                <Card.Body>
                                    <Container className='d-flex justify-content-between align-items-end p-0'>
                                        <Card.Title>Amount to be paid: </Card.Title>
                                        <h3>170$</h3>
                                    </Container>
                                    <Card.Text>
                                        Total 6 items
                                    </Card.Text>
                                    <Button className='w-100' variant="success">Purchase</Button>
                                    <Card.Text className="text-body-secondary mt-3">
                                        By placing an order, you confirm your agreement with our terms of purchase in the online store
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </ContentWrapper>
    );
}
 
export default Cart;