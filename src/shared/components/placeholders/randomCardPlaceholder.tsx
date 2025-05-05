import { Card, Container, Row, Col, Placeholder } from 'react-bootstrap';

import PlaceholderImage from '@/resources/placeholder-image.png';

const RandomCardPlaceholder = ({ fullSize = false }: { fullSize?: boolean }) => {
    return (
        <Card className={ !fullSize ? '' : 'w-100' } style={{ textDecoration: 'none', width: !fullSize ? '15rem' : '' }}>
            <Card.Img className='mx-auto' variant="top" style={{ width: fullSize ? '20rem' : '10rem', marginTop: fullSize ? '8rem' : '' }} src={PlaceholderImage} />
            <Card.Body className='d-flex justify-content-end' style={{ flexDirection: 'column' }}>
                <Placeholder style={{ fontSize: fullSize ? '2rem' : '' }} as={Card.Title}></Placeholder>
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
    );
}
 
export default RandomCardPlaceholder;