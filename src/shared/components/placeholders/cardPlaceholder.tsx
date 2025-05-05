import { Card, Container, Row, Col, Placeholder } from 'react-bootstrap';

import PlaceholderImage from '@/resources/placeholder-image.png';

const CardPlaceholder = () => {
    return (
        <>
            <Card className='my-3' style={{ width: '15rem', height: '100%', textDecoration: 'none' }}>
            <Card.Img className='mx-auto mt-3' variant="top" style={{ width: '10rem' }} src={PlaceholderImage} />
            <Card.Body className='d-flex justify-content-end gap-3' style={{ flexDirection: 'column' }}>
                <Placeholder as={Card.Title}></Placeholder>
                <Placeholder as={Container} className='d-flex justify-content-end align-items-end pb-2'>
                    <Placeholder as={Card.Text}/>
                </Placeholder>
                <Container>
                    <Row className='d-flex justify-content-between'>
                        <Col sm={9} className='p-0'>
                            <Placeholder.Button
                            className='w-100 h-100 d-flex justify-content-center align-items-center gap-1'
                            variant="dark" />
                        </Col>
                        <Col sm={2} className='p-0'>
                            <Placeholder.Button
                            className='w-100 px-0 h-100 d-flex justify-content-center align-items-center'
                            variant="danger" />
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            </Card>
        </>
    );
}
 
export default CardPlaceholder;