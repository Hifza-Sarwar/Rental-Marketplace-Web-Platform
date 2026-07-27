function Pagination({
    totalProducts,
    productsPerPage,
    currentPage,
    setCurrentPage,
  }) {
    const pages = [];
  
    for (
      let i = 1;
      i <= Math.ceil(totalProducts / productsPerPage);
      i++
    ) {
      pages.push(i);
    }
  
    return (
      <div className="pagination">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    );
  }
  
  export default Pagination;