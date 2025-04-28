import { Card, Button, Row, Col, Alert, Container, Carousel, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import PlaceholderCarouselImg from '@/resources/placeholder-carousel.png';
import ContentWrapper from "./contentWrapper";
import CartIcon from '@/resources/icons/cart-icon';
import WishlistIcon from '@/resources/icons/wishlist-icon';
import useGetSingleProduct from '../hooks/useGetSingleProduct';
import { IProductImg } from '@/entities/IProduct';

const SingleProduct = () => {
    const { id } = useParams<string>();
    const data = useGetSingleProduct(Number(id));
    const [mainImage, setMainImage] = useState<string>(data?.images[0].toString() || PlaceholderCarouselImg);
    const [showImages, setShowImages] = useState<boolean>(false);
    
    useEffect(() => {
        window.scrollTo({ top: 0 })
        if (data?.images?.length) {
          setMainImage(data.images[0].toString());
        }
      }, [data]);

    return (
        <>
            {
                data && 
                <ContentWrapper title={data.title}>
                    <Card className="my-3" border='secondary'>
                        <Row sm="auto" className="gap-0">
                            <Col sm={1} className='mt-2'>
                                {
                                    data && data?.images?.map((img: IProductImg, index: number) => {
                                        return  <Button 
                                                key={index}
                                                onClick={() => setMainImage(img.toString())}
                                                active={img.toString() === mainImage}
                                                className='my-1'
                                                onDoubleClick={() => setShowImages(true)}
                                                variant='outline-secondary'>
                                                    <Card.Img
                                                        src={img.toString()}
                                                        alt="Example"
                                                        style={{ width: '5rem' }}
                                                        />
                                                </Button>
                                    })
                                }
                            </Col>
                            <Col sm={4} className='my-auto d-flex'>
                                <Card.Img
                                src={mainImage}
                                alt="Example"
                                style={{ width: '20rem', margin: '0 auto' }}
                                onClick={() => setShowImages(true)}
                                />
                            </Col>
                            <Col sm={7}>
                                <Card.Body className='h-100 d-flex flex-column'>
                                    <Card.Text as={Container} className='px-0 mb-5'>
                                        <h6 style={{ textTransform: 'capitalize' }}>Category: {data.category}</h6>
                                        <h6>In stock: {data.stock}</h6>
                                        {data.description}
                                    </Card.Text>
                                    <Alert variant='secondary' className='d-flex align-items-center justify-content-between'>
                                        <h5>{data.brand ? data.brand : 'Manufacturer not specified'}</h5>
                                        <h6>Product rating: {data.rating}</h6>
                                    </Alert>
                                    <Col className='d-flex justify-content-end'>
                                    <h2>{data.price}$</h2>
                                    </Col>
                                    <Row className='mt-auto px-2'>
                                        <Col sm={5} className='p-1'>
                                            <Button className='w-100 h-100 d-flex justify-content-center align-items-center gap-1' variant="success">Buy now</Button>
                                        </Col>
                                        <Col sm={5} className='p-1'>
                                            <Button className='w-100 h-100 d-flex justify-content-center align-items-center gap-1' variant="dark">
                                                Add to cart
                                                <CartIcon size={20}/>
                                            </Button>
                                        </Col>
                                        <Col sm={2} className='p-1'>
                                            <Button className='w-100 h-100 d-flex justify-content-center align-items-center gap-1' variant="danger">
                                                <WishlistIcon size={20}/>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </ContentWrapper>
            }
            <Modal
            centered={true}
            variant='dark'
            size="lg"
            show={showImages}
            onHide={() => setShowImages(false)}
            aria-labelledby="product-images-modal"
            >
                <Modal.Header closeVariant='white' className='bg-dark text-light' closeButton>
                    <Modal.Title id="product-images-modal">
                        {data?.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark text-light'>
                    <Carousel>
                        {
                            data?.images.map((image: any, index: number) => {
                                return  <Carousel.Item key={index}>
                                            <img className='d-block mx-auto' style={{ width: '30rem' }} src={image.toString()} alt="Product" />
                                        </Carousel.Item>
                            })
                        }
                    </Carousel>
                </Modal.Body>
            </Modal>
        </>
    );
}
 
export default SingleProduct;