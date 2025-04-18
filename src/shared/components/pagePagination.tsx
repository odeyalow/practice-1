import Pagination from 'react-bootstrap/Pagination';

const PagePagination = () => {
    return (
        <Pagination className='justify-content-center mt-3 mb-5'>
            <Pagination.First />
            <Pagination.Prev />

            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>

            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    );
}
 
export default PagePagination;