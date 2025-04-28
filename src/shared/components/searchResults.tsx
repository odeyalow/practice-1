import { Button, ButtonToolbar, Stack, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useGetData from '../hooks/useGetData';
import { IProduct, IProductResponse } from '@/entities/IProduct';
import API from '@/api';

const SearchResults = ({ searchQuery }: { searchQuery: string }) => {
    const { data } = useGetData<IProductResponse>(API.SEARCH_PRODUCTS(searchQuery), 'searchResult', searchQuery, true);

    return (
        <ButtonToolbar className='my-2' style={{ position: 'absolute', width: '100%', zIndex: 99, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
            {data && data?.products.length > 0 && searchQuery !== '' ? 
            <Stack className='w-100' style={{ overflowY: 'scroll', maxHeight: '30rem' }}>
                {
                    data && data.products.map((product: IProduct) => {
                        return  <Link style={{ textDecoration: 'none' }} key={product.id} to={`/products/${product.title.toLowerCase().replace(/\s+/g, '-')}/${product.id}`} className='w-100'>
                                    <Button variant='light' className='w-100 d-flex justify-content-between' style={{ borderRadius: '0' }}>
                                        <Container className='d-flex justify-content-start gap-2 px-0'>
                                            <img src={product.thumbnail} alt="Product" style={{ width: '2rem', objectFit: 'cover' }}/>
                                            {product.title}
                                        </Container>
                                        <h4 className='text-end m-0'>{product.price}$</h4>
                                    </Button>
                                </Link>
                    })
                }
            </Stack>
            : <Button disabled variant='light'>There are no results for your request.</Button>}
        </ButtonToolbar>
    );
}
 
export default SearchResults;