import { Card, Row, Col, Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import BinIcon from '@/resources/icons/bin-icon';

const ProductCartCard = () => {
    return (
        <Card as={Link} to='/products/name' className="my-3" border='secondary' style={{ textDecoration: 'none' }}>
            <Row className="gap-0">
                <Col sm={2} className='my-auto d-flex'>
                    <Card.Img
                    src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
                    alt="Example"
                    style={{ width: '8rem', margin: '0 auto' }}
                    />
                </Col>
                <Col>
                    <Card.Body>
                        <Container className='d-flex justify-content-between px-0'>
                            <Card.Title>Title</Card.Title>
                            <h5>599.99$</h5>
                        </Container>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quibusdam, nulla quas tenetur laboriosam necessitatibus error temporibus distinctio aspernatur ratione.
                        </Card.Text>
                        <Col className='d-flex align-items-center'>
                            <Form.Check
                                label="Add"
                                name="radio"
                                type="checkbox"
                            />
                            <Button className='px-1 h-100 d-flex justify-content-center align-items-center ms-auto' variant="danger">
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