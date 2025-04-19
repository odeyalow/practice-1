import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Need to add limit for category button when will work with API
const CategoriesList:React.FC = () => {
    return (
        <Row className='justify-content-center mb-2'>
            <Col className="my-1 px-1" xs="auto">
                <Link to="/categories/name">
                    <Button variant='secondary' size='lg' active>All</Button>
                </Link>
            </Col>
            <Col className="my-1 px-1" xs="auto">
                <Link to="/categories/name">
                    <Button variant='outline-secondary' size='lg'>Category</Button>
                </Link>
            </Col>
            <Col className="my-1 px-1" xs="auto">
                <Link to="/categories/name">
                    <Button variant='outline-secondary' size='lg'>Category</Button>
                </Link>
            </Col>
            <Col className="my-1 px-1" xs="auto">
                <Link to="/categories/name">
                    <Button variant='outline-secondary' size='lg'>Category</Button>
                </Link>
            </Col>
            <Col className="my-1 px-1" xs="auto">
                <Link to="/categories/name">
                    <Button variant='outline-secondary' size='lg'>Category</Button>
                </Link>
            </Col>
            <Col className="my-1 px-1" xs="auto">
                <Link to="/categories/name">
                    <Button variant='outline-secondary' size='lg'>Category</Button>
                </Link>
            </Col>
            <Col className="my-1 px-1" xs="auto">
                <Link to="/categories/name">
                    <Button variant='outline-secondary' size='lg'>Category</Button>
                </Link>
            </Col>
            <Col className="my-1 px-1" xs="auto">
                <Link to="/categories/name">
                    <Button variant='outline-secondary' size='lg'>Category</Button>
                </Link>
            </Col>
            <Col className="my-1 px-1" xs="auto">
                <Link to="/categories/name">
                    <Button variant='outline-secondary' size='lg'>Category</Button>
                </Link>
            </Col>
        </Row>
    );
}
 
export default CategoriesList;