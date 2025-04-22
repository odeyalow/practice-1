import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SearchResults = () => {
    return (
        <ButtonToolbar className='my-2' style={{ position: 'absolute', width: '100%', zIndex: 99, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
            <ButtonGroup vertical className='w-100'>
                <Link to="/categories/name" className='w-100'>
                    <Button variant='light' className='w-100' style={{ borderRadius: '0' }}>Result</Button>
                </Link>
                <Link to="/categories/name" className='w-100'>
                    <Button variant='light' className='w-100' style={{ borderRadius: '0' }}>Result</Button>
                </Link>
                <Link to="/categories/name" className='w-100'>
                    <Button variant='light' className='w-100' style={{ borderRadius: '0' }}>Result</Button>
                </Link>
                <Link to="/categories/name" className='w-100'>
                    <Button variant='light' className='w-100' style={{ borderRadius: '0' }}>Result</Button>
                </Link>
                <Button disabled variant='light'>There are no results for your request.</Button>
            </ButtonGroup>
        </ButtonToolbar>
    );
}
 
export default SearchResults;