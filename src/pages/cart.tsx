import { Button, Form, Col, Container, Card, Row, Navbar, Alert } from 'react-bootstrap';

import ContentWrapper from '@/shared/components/contentWrapper';
import ProductsCollection from '@/shared/components/productsCollection';
import useCartActions from '@/features/cart/useCartActions';
import { useMemo } from 'react';
import { IProduct } from '@/entities/IProduct';

const Cart = () => {
    const { cart, onClear, setCheckoutAll, removeCheckoutAll } = useCartActions();
    const amountToBePaid = useMemo(() => {
        return cart.reduce((sum, product) => product.isInCheckout ? sum + product.price : sum + 0, 0).toFixed(2);
    }, [cart]);

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
                                checked={cart.every((product: IProduct) => product.isInCheckout)}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    !e.target.checked ? removeCheckoutAll() : setCheckoutAll();
                                }}
                            />
                            <Button
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.preventDefault();
                                onClear();
                            }}
                            variant='danger'
                            className='d-flex justify-content-between align-items-center ms-auto'>
                                Remove all ({cart.length})
                            </Button>
                        </Container>
                        {
                            cart.length ? <ProductsCollection products={cart} placement='list'/> : <Alert className='my-3'>Your cart is empty, add something!</Alert>
                        }
                    </Col>
                    <Col lg={4} >
                        <Navbar sticky='top' className='pt-3'>
                            <Card>
                                <Card.Header>Checkout</Card.Header>
                                <Card.Body>
                                    <Container className='d-flex justify-content-between align-items-end p-0'>
                                        <Card.Title>Amount to be paid: </Card.Title>
                                        <h3>{amountToBePaid}$</h3>
                                    </Container>
                                    <Card.Text>
                                        Total {cart.length} items
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