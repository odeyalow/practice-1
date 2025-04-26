import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CartIcon from '@/resources/icons/cart-icon';
import WishlistIcon from '@/resources/icons/wishlist-icon';
import useGetRandomProduct from '../hooks/useGetRandomProduct';

interface RandomProductProps {
    fullSize?: boolean,
}

const RandomProduct:React.FC<RandomProductProps> = ({ fullSize }) => {
    const data = useGetRandomProduct();
    const formattedProductName = data ? data.title.toLowerCase().replace(/\s+/g, '-') : '';
    const splittedPrice = data ? data.price.toString().split(".") : '';

    return (
        data && <Card as={Link} className={ !fullSize ? '' : 'w-100' } to={`/products/${formattedProductName}/${data.id}`} style={{ textDecoration: 'none', width: !fullSize ? '15rem' : '' }}>
            <Card.Img variant="top" src={data.thumbnail}
            style={{ objectFit: 'cover'}}/>
            <Card.Body className='d-flex justify-content-end' style={{ flexDirection: 'column' }}>
                <Card.Title style={{ fontSize: fullSize ? '2rem' : '' }}>{data.title}</Card.Title>
                <Container className='d-flex justify-content-end align-items-end pb-2 px-0'>
                    <h4 className='text-end m-0'>{splittedPrice[0]}</h4>
                    <h6 className='text-end m-0'>.{splittedPrice[1]}$</h6>
                </Container>
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