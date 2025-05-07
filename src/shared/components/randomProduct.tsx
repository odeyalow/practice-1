import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CartIcon from '@/resources/icons/cart-icon';
import WishlistIcon from '@/resources/icons/wishlist-icon';
import useGetRandomProduct from '../hooks/useGetRandomProduct';
import { IProduct } from '@/entities/IProduct';
import useWishlistActions from '@/features/wishlist/useWishlistActions';
import useCartActions from '@/features/cart/useCartActions';
import RandomCardPlaceholder from './placeholders/randomCardPlaceholder';

const RandomProduct = ({ fullSize }: { fullSize?: boolean }) => {
    const data = useGetRandomProduct();
    const formattedProductName = data ? data.title.toLowerCase().replace(/\s+/g, '-') : '';
    const splittedPrice = data ? data.price.toString().split(".") : '';
    const { wishlist, toggleWishlist } = useWishlistActions();
    const { cart, onAdd } = useCartActions();

    return (
        data ? <Card as={Link} className={ !fullSize ? '' : 'w-100' } to={`/products/${formattedProductName}/${data.id}`} style={{ textDecoration: 'none', width: !fullSize ? '15rem' : '' }}>
            <Card.Img variant="top" src={data.thumbnail}
            style={{ objectFit: 'cover'}}/>
            <Card.Body className='d-flex justify-content-end' style={{ flexDirection: 'column' }}>
                <Card.Title className='fs-4 fs-xxl-6' style={{ fontSize: fullSize ? '2rem' : '' }}>{data.title}</Card.Title>
                <Container className='d-flex justify-content-end align-items-end pb-2 px-0'>
                    <h4 className='text-end m-0'>{splittedPrice[0]}</h4>
                    <h6 className='text-end m-0'>.{splittedPrice[1]}$</h6>
                </Container>
                <Container>
                    <Row className='d-flex justify-content-between gap-2'>
                        <Col sm={9} className='p-0'>
                            <Button
                            disabled={cart.some((item: IProduct) => item.id === data.id)}
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.preventDefault();
                                onAdd(data);
                            }}
                            className='w-100 h-100 d-flex justify-content-center align-items-center gap-1'
                            variant="dark">
                                Add to cart
                                <CartIcon fill={false} size={20}/>
                            </Button>
                        </Col>
                        <Col sm={2} className='p-0'>
                            <Button
                            className='w-100 px-0 h-100 d-flex justify-content-center align-items-center'
                            variant="danger"
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.preventDefault();
                                toggleWishlist(data);
                            }}>
                                <WishlistIcon fill={wishlist.some((item: IProduct) => item.id === data.id)} size={20}/>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card> : <RandomCardPlaceholder fullSize/>
    );
}
 
export default RandomProduct;