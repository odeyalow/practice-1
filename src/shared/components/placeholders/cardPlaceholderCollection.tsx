import { Container, Row, Col } from 'react-bootstrap';

import CardPlaceholder from "./cardPlaceholder";

const CardPlaceholderCollection = () => {
    const renderCards = (): React.ReactElement[] => {
        const cards: React.ReactElement[] = [];
        for (let i = 0; i <= 20; i++) {
            cards.push(<Col key={i} className='my-3'><CardPlaceholder/></Col>);
        }
        return cards;
    }

    return (
        <>
            <Container>
                <Row md="auto" className='d-flex justify-content-center'>
                    {renderCards()}
                </Row>
            </Container>
        </>
    );
}
 
export default CardPlaceholderCollection;