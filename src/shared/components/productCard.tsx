import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import CartIcon from '@/resources/icons/cart-icon';

const ProductCard = () => {
    return (
        <Card className='my-3' style={{ width: '15rem' }}>
            <Card.Img className='mx-auto' variant="top" style={{ width: '10rem' }} src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button className='w-100' variant="dark">
                    Add to cart
                    <CartIcon fill={false} size={20}/>
                </Button>
            </Card.Body>
        </Card>
    );
}
 
export default ProductCard;