import { Card, Row, Col, Alert, Container, Placeholder } from 'react-bootstrap';

import PlaceholderImage from '@/resources/placeholder-image.png';
import ContentWrapper from '../contentWrapper';

const SingleProductPlaceholder = () => {
    return (
        <>
            {
               <ContentWrapper title='...'>
                    <Card className="my-3" border='secondary'>
                        <Row sm="auto" className="gap-0">
                            <Col sm={1} className='mt-2'>
                                <Placeholder.Button disabled className='mb-2' variant='outline-secondary'>
                                    <Card.Img
                                        src={PlaceholderImage}
                                        alt="Example"
                                        style={{ width: '5rem' }}
                                        />
                                </Placeholder.Button>
                                <Placeholder.Button disabled className='mb-2' variant='outline-secondary'>
                                    <Card.Img
                                        src={PlaceholderImage}
                                        alt="Example"
                                        style={{ width: '5rem' }}
                                        />
                                </Placeholder.Button>
                                <Placeholder.Button disabled className='mb-2' variant='outline-secondary'>
                                    <Card.Img
                                        src={PlaceholderImage}
                                        alt="Example"
                                        style={{ width: '5rem' }}
                                        />
                                </Placeholder.Button>
                            </Col>
                            <Col sm={4} className='my-auto d-flex'>
                                <Card.Img
                                src={PlaceholderImage}
                                alt="Example"
                                style={{ width: '20rem', margin: '0 auto' }}
                                />
                            </Col>
                            <Col sm={7}>
                                <Card.Body className='h-100 d-flex flex-column'>
                                    <Placeholder as={Container} className='px-0 mb-5'>
                                        <Placeholder as={Card.Text}/>
                                        <Placeholder as={Card.Text}/>
                                        <Placeholder as={Card.Text}/>
                                    </Placeholder>
                                    <Placeholder as={Alert} variant='secondary' className='d-flex align-items-center justify-content-between'>
                                        <Placeholder as={Card.Text}/>
                                        <Placeholder as={Card.Text}/>
                                    </Placeholder>
                                    <Col className='d-flex justify-content-end'>
                                        <Placeholder as={Card.Text}/>
                                    </Col>
                                    <Row className='mt-auto px-2'>
                                        <Col sm={5} className='p-1'>
                                            <Placeholder.Button className='w-100 h-100 d-flex justify-content-center align-items-center gap-1' variant="success"></Placeholder.Button>
                                        </Col>
                                        <Col sm={5} className='p-1'>
                                            <Placeholder.Button
                                            className='w-100 h-100 d-flex justify-content-center align-items-center gap-1'
                                            variant="dark"></Placeholder.Button>
                                            </Col>
                                        <Col sm={2} className='p-1'>
                                            <Placeholder.Button
                                            className='w-100 h-100 d-flex justify-content-center align-items-center gap-1'
                                            variant="dark"></Placeholder.Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </ContentWrapper>
            }
        </>
    );
}
 
export default SingleProductPlaceholder;