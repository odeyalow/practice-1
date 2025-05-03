import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Badge } from 'react-bootstrap';

import Search from './search';
import routes from '@/app/routes';
import IRoute from '@/entities/IRoutes';
import useWishlistActions from '@/features/wishlist/useWishlistActions';
import useCartActions from '@/features/cart/useCartActions';

const Header = () => {
    const { wishlist } = useWishlistActions();
    const { cart } = useCartActions();
    return (
        <Navbar data-bs-theme="light" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">AnyMarket.com</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Search />
                    <Nav className="ms-auto">
                        {
                            routes.map(({ path, name, isNotPage }: IRoute) => {
                                if ( !isNotPage ) {
                                    return  <Nav.Link
                                                className="d-flex gap-1"
                                                as={Link}
                                                to={path}
                                                key={path}>
                                                {name}
                                                {name === 'Cart' && 
                                                <Badge bg="primary" className='h-100'>
                                                    {cart.length > 0 && cart.length}
                                                </Badge>}
                                                {name === 'Wishlist' &&
                                                <Badge bg="danger" className='h-100'>
                                                    {wishlist.length > 0 && wishlist.length}
                                                </Badge>}
                                            </Nav.Link>
                                    
                                }
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default Header;