import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ICategory from '@/entities/ICategory';
import useGetCategories from '../hooks/useGetCategories';

interface CategoriesListProps {
    limit: number;
    enableVariantAll?: boolean;
}

const CategoriesList:React.FC<CategoriesListProps> = ({ limit, enableVariantAll }) => {
    const categories = useGetCategories(limit);
    return (
        <Row className='justify-content-center mb-2'>
            {
                enableVariantAll &&
                <Col className="my-1 px-1" xs="auto">
                    <Link to="/categories/name">
                        <Button variant='secondary' size='lg' active>All</Button>
                    </Link>
                </Col>
            }
            {   
                categories && categories.map(({ slug, name }: ICategory): React.ReactNode => {
                    return <Col key={slug} className="my-1 px-1" xs="auto">
                                <Link to={`/categories/${slug}`}>
                                    <Button variant='outline-secondary' size='lg'>{name}</Button>
                                </Link>
                            </Col>
                })
            }
        </Row>
    );
}
 
export default CategoriesList;