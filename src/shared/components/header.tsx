import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import Search from './search';
import routes from '@/app/routes';
import IRoute from '@/entities/IRoutes';

const Header = () => {
    return (
        <Navbar data-bs-theme="light" expand="sm" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">TECHNO.com</Navbar.Brand>
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
                                                {name === 'Cart' && <Badge bg="primary" className='h-100'>3</Badge>}
                                                {name === 'Wishlist' && <Badge bg="danger" className='h-100'>3</Badge>}
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