import { Col, Placeholder, Row } from "react-bootstrap";

const CategoriesListPlaceholder = ({ limit }: { limit: number }) => {
    const renderCategories = (): React.ReactElement[] => {
        const categories: React.ReactElement[] = [];
        for (let i = 0; i <= limit; i++) {
            categories.push(
            <Col key={i} className="my-1 px-1" xs="auto">
                <Placeholder.Button variant='outline-secondary' style={{ width: '7rem' }} size='lg'></Placeholder.Button>
            </Col>)
        }
        return categories;
    }

    return (
        <Row className='justify-content-center mb-2'>
            {renderCategories()}
        </Row>
    );
}
 
export default CategoriesListPlaceholder;