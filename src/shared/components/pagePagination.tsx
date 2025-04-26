import Pagination from 'react-bootstrap/Pagination';
import { useEffect } from 'react';

interface PagePaginationProps {
    pageNumber: number;
    totalPagesArray: number[];
    getPreviousPage: () => void;
    getNextPage: () => void;
    setPageNumber: (pageNumber: number) => void;
}

const PagePagination:React.FC<PagePaginationProps> = ({
    pageNumber,
    totalPagesArray,
    getPreviousPage,
    getNextPage,
    setPageNumber}) => {
        useEffect(() => {
            window.scrollTo({
                top: 0
            })
        }, [pageNumber])
    return (
        totalPagesArray &&
        <Pagination className='justify-content-center mt-3 mb-5'>
            <Pagination.First
            disabled={pageNumber === 1}
            onClick={():void => setPageNumber(1)}/>
            <Pagination.Prev
            disabled={pageNumber === 1}
            onClick={getPreviousPage}/>
            {
                totalPagesArray.map((page: number) => {
                    return <Pagination.Item key={page} disabled={pageNumber === page} onClick={():void => setPageNumber(page)}>{page}</Pagination.Item>
                })
            }
            <Pagination.Next
            onClick={getNextPage}
            disabled={pageNumber === totalPagesArray.length}/>
            <Pagination.Last
            onClick={():void => setPageNumber(totalPagesArray.length)}
            disabled={pageNumber === totalPagesArray.length}/>
        </Pagination>
    );
}
 
export default PagePagination;