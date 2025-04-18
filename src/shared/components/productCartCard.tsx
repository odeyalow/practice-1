import { Card, Row, Col, Button } from 'react-bootstrap';


const ProductCartCard = () => {
    return (
        <Card className="my-3">
            <Row className="gap-4">
                <Col md={1}>
                    <Card.Img
                    src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
                    alt="Example"
                    style={{ width: '8rem' }}
                    />
                </Col>
                <Col md={8}>
                    <Card.Body>
                    <Card.Title>Заголовок</Card.Title>
                    <Card.Text>
                        Это пример текста, находящегося сбоку от картинки. Можно разместить здесь описание, детали и прочее.
                    </Card.Text>
                    <Col sm={2} className='p-0'>
                        <Button className='w-100 px-0 h-100 d-flex justify-content-center align-items-center' variant="danger">

                        </Button>
                    </Col>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}
 
export default ProductCartCard;