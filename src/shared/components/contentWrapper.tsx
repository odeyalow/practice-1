import { Container, Row } from 'react-bootstrap';

interface ContentWrapperProps {
    title: string;
    children: React.ReactElement | React.ReactNode;
    description?: string;
}

const ContentWrapper:React.FC<ContentWrapperProps> = ({ title, children, description }) => {
    return (
        <Container className='my-5'>
            <h1>{title}:</h1>
            {description && <p>{description}</p>}
            <Container className='my-3 p-0'>
                <Row className="justify-content-md-center">
                    {children}
                </Row>
            </Container>
        </Container>
    );
}
 
export default ContentWrapper;