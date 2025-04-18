import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import ContentWrapper from '@/shared/components/contentWrapper';

const Categories = () => {
    return (
        <ContentWrapper
        title='Categories'
        description='Looking for something specific?'>
            <Col className='my-2' md="auto"><Button variant="outline-dark">Category</Button></Col>
            <Col className='my-2' md="auto"><Button variant="outline-dark">Category</Button></Col>
            <Col className='my-2' md="auto"><Button variant="outline-dark">Category</Button></Col>
            <Col className='my-2' md="auto"><Button variant="outline-dark">Category</Button></Col>
            <Col className='my-2' md="auto"><Button variant="outline-dark">Category</Button></Col>
            <Col className='my-2' md="auto"><Button variant="outline-dark">Category</Button></Col>
        </ContentWrapper>
    );
}
 
export default Categories;