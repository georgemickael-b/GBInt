import { useState, useMemo, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 10;
const Todos = ({ todos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!todos) return;
    const countTotalItems = todos.length;
    setTotalPages(Math.floor(countTotalItems / ITEMS_PER_PAGE) - 1);
  }, [todos]);

  const currentPagesData = useMemo(() => {
    if (!todos) return [];
    const offset = currentPage * ITEMS_PER_PAGE;
    const endOffset = (currentPage + 1) * ITEMS_PER_PAGE;
    return todos.slice(offset, endOffset);
  }, [currentPage, todos]);

  const handllPageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <>
      <table className='table table-condensed'>
        <thead>
          <tr>
            <td>Title</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {currentPagesData.map((todo) => {
            return (
              <tr>
                <td>{todo.title}</td>
                <td>{todo.completed ? 'Completed' : 'Not Completed'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <ReactPaginate
          forcePage={currentPage - 1}
          breakLabel='...'
          nextLabel='next >'
          onPageChange={handllPageClick}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel='< previous'
          renderOnZeroPageCount={null}
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          previousLinkClassName='page-link'
          nextClassName='page-item'
          nextLinkClassName='page-link'
          containerClassName='pagination'
          activeClassName='active'
        />
      </div>
    </>
  );
};

export default Todos;
