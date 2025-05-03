import { Card, Row, Col, Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import BinIcon from '@/resources/icons/bin-icon';
import { IProduct } from '@/entities/IProduct';
import useCartActions from '@/features/cart/useCartActions';

const ProductCartCard = ({ product }: { product: IProduct }) => {
    const { toggleCheckout, onRemove } = useCartActions();
    const formattedProductName = product.title.toLowerCase().replace(/\s+/g, '-');
    const splittedPrice = product.price.toString().split(".");

    return (
        <Card as={Link} to={`/products/${formattedProductName}/${product.id}`} className="my-3" border='secondary' style={{ textDecoration: 'none' }}>
            <Row className="gap-0">
                <Col sm={2} className='my-auto d-flex'>
                    <Card.Img
                    src={product.thumbnail}
                    alt="Example"
                    style={{ width: '8rem', margin: '0 auto' }}
                    />
                </Col>
                <Col>
                    <Card.Body>
                        <Container className='d-flex justify-content-between px-0'>
                            <Card.Title>{product.title}</Card.Title>
                            <Container className='d-flex justify-content-end align-items-end pb-2'>
                                <h4 className='text-end m-0'>{splittedPrice[0]}</h4>
                                <h6 className='text-end m-0'>.{splittedPrice[1]}$</h6>
                            </Container>
                        </Container>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Col className='d-flex align-items-center'>
                            <Form.Check
                                label="Add"
                                name="radio"
                                type="checkbox"
                                checked={product.isInCheckout}
                                onChange={() => toggleCheckout(product.id)}
                                onClick={(e: React.MouseEvent<HTMLInputElement>) => e.stopPropagation()}
                            />
                            <Button
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.preventDefault();
                                onRemove(product.id);
                            }}
                            className='px-1 h-100 d-flex justify-content-center align-items-center ms-auto'
                            variant="danger">
                                    <BinIcon size={20}/>
                            </Button>
                        </Col>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}
 
export default ProductCartCard;