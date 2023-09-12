import ReactPaginate from 'react-paginate';

function PaginateBar({getPage}) {
    const handlePageClick = (data) =>{
        getPage(data.selected + 1)
    }
    const pageCount = 500;
    return ( 
        <ReactPaginate
        breakLabel="..."
        nextLabel="Next >>"
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<< Previous"
        renderOnZeroPageCount={null}
        containerClassName='pagination justify-content-center pb-5 align-items-center flex-wrap'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        activeClassName='active'


      />
     );
}

export default PaginateBar;