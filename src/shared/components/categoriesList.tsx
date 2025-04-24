import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import API from '@/api';
import useGetData from '../hooks/useGetData';
import ICategory from '@/entities/ICategory';
import { useMemo } from 'react';

interface CategoriesListProps {
    limit: number;
    enableVariantAll?: boolean;
}

const CategoriesList:React.FC<CategoriesListProps> = ({ limit, enableVariantAll }) => {
    const { data } = useGetData<ICategory[]>(API.PRODUCTS_CATEGORIES, 'categories', limit);
    console.log(data);  

    const dataToRender = useMemo(() => {
        return limit > 0 ? data && data.slice(0, limit) : data;
    }, [data, limit])

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
                dataToRender && dataToRender.map(({ slug, name }: ICategory): React.ReactNode => {
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