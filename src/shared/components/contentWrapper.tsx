import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

interface ContentWrapperProps {
    title: string;
    children: React.ReactElement | React.ReactNode;
}

const ContentWrapper:React.FC<ContentWrapperProps> = ({ title, children }) => {
    return (
        <Container className='my-5'>
            <h1>{title}:</h1>
            <Container className='my-3'>
                <Row className="justify-content-md-center">
                    {children}
                </Row>
            </Container>
        </Container>
    );
}
 
export default ContentWrapper;