import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CartIcon from '@/resources/icons/cart-icon';
import WishlistIcon from '@/resources/icons/wishlist-icon';
import { IProduct } from '@/entities/IProduct';
import useWishlistActions from '@/features/wishlist/useWishlistActions';
import useCartActions from '@/features/cart/useCartActions';

const ProductCard = ({ product }: { product: IProduct }) => {
    const { toggleWishlist, wishlist } = useWishlistActions();
    const { onAdd, cart } = useCartActions();

    const formattedProductName = product.title.toLowerCase().replace(/\s+/g, '-');
    const splittedPrice = product.price.toString().split(".");

    return (
        <>
            <Card as={Link} to={`/products/${formattedProductName}/${product.id}`} className='my-3' style={{ width: '15rem', height: '90%', textDecoration: 'none' }}>
            <Card.Img className='mx-auto mt-3' variant="top" style={{ width: '10rem' }} src={product.thumbnail} />
            <Card.Body className='d-flex justify-content-end' style={{ flexDirection: 'column' }}>
                <Card.Title>{product.title}</Card.Title>
                <Container className='d-flex justify-content-end align-items-end pb-2'>
                    <h4 className='text-end m-0'>{splittedPrice[0]}</h4>
                    <h6 className='text-end m-0'>.{splittedPrice[1]}$</h6>
                </Container>
                <Container>
                    <Row className='d-flex justify-content-between'>
                        <Col sm={9} className='p-0'>
                            <Button
                            disabled={cart.some((item: IProduct) => item.id === product.id)}
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.preventDefault();
                                onAdd(product);
                            }}
                            className='w-100 h-100 d-flex justify-content-center align-items-center gap-1'
                            variant="dark">
                                Add to cart
                                <CartIcon size={20}/>
                            </Button>
                        </Col>
                        <Col sm={2} className='p-0'>
                            <Button
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.preventDefault();
                                toggleWishlist(product);
                            }}
                            className='w-100 px-0 h-100 d-flex justify-content-center align-items-center'
                            variant="danger">
                                <WishlistIcon fill={wishlist.some((item: IProduct) => item.id === product.id)} size={20}/>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            </Card>
        </>
    );
}
 
export default ProductCard;