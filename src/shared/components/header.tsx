import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import routes from '@/app/routes';
import IRoute from '@/entities/IRoutes';

const Header = () => {
    return (
        <Navbar data-bs-theme="dark" expand="sm" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">TECHNO.com</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {
                        routes.map(({ path, name, isNotPage }: IRoute) => {
                            if ( !isNotPage ) {
                                return  <Nav.Link
                                            as={Link}
                                            to={path}
                                            key={path}>
                                            {name}
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