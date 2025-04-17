import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

import CartIcon from '@/resources/icons/cart-icon';

const RandomProduct = () => {
    return (
        <Card style={{ width: '20rem' }} className='w-100 h-100'>
            <Card.Img variant="top" src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
            style={{ objectFit: 'cover' }}/>
            <Card.Body className="d-flex flex-column">
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
 
export default RandomProduct;