import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CartIcon from '@/resources/icons/cart-icon';
import WishlistIcon from '@/resources/icons/wishlist-icon';
import { IProduct } from '@/entities/IProduct';

interface ProductCardProps {
    product: IProduct;
}

const ProductCard:React.FC<ProductCardProps> = ({ product }) => {
    const formattedProductName = product.title.toLowerCase().replace(/\s+/g, '-');
    return (
        <Card as={Link} to={`/products/${formattedProductName}/${product.id}`} className='my-3' style={{ width: '15rem', height: '90%', textDecoration: 'none' }}>
            <Card.Img className='mx-auto mt-3' variant="top" style={{ width: '10rem' }} src={product.thumbnail} />
            <Card.Body className='d-flex justify-content-end' style={{ flexDirection: 'column' }}>
                <Card.Title>{product.title}</Card.Title>
                <Container>
                    <Row className='d-flex justify-content-between'>
                        <Col sm={9} className='p-0'>
                            <Button className='w-100 h-100 d-flex justify-content-center align-items-center gap-1' variant="dark">
                                Add to cart
                                <CartIcon size={20}/>
                            </Button>
                        </Col>
                        <Col sm={2} className='p-0'>
                            <Button className='w-100 px-0 h-100 d-flex justify-content-center align-items-center' variant="danger">
                                <WishlistIcon size={20}/>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}
 
export default ProductCard;