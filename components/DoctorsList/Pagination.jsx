import React from 'react'

const Pagination = ({totalPages , currentPage, setCurrentPage}) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  
    return (
      <div className="pagination">
        {pages.map((page) => (
          <button
            key={page}
            className={`pagination-item ${
              page === currentPage ? "pagination-item--active" : ""
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };
  

export default Pagination