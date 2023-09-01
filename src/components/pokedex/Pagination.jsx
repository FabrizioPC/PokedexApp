const FIRST_PAGE = 1;
const Pagination = ({
   lastPage,
   pagesInCurrentBlock,
   setCurrentPage,
   currentPage,
}) => {
   const handleNextPage = () => {
      setCurrentPage((prevState) => {
         const nextPage = prevState + 1;
         if (nextPage <= lastPage) return nextPage;
         return prevState;
      });
   };
   const handleLastPage = () => setCurrentPage(lastPage);
   const handlePreviusPage = () => {
      setCurrentPage((prevPage) => {
         const newPage = prevPage - 1;
         if (newPage >= FIRST_PAGE) return newPage;
         return prevPage;
      });
   };
   const handleFirstPage = () => setCurrentPage(FIRST_PAGE);
   return (
      <ul className="flex justify-center gap-4 p-4 items-center">
         {currentPage >= 2 && <li onClick={handleFirstPage}>{"<<"}</li>}
         {currentPage >= 2 && <li onClick={handlePreviusPage}>{"<"}</li>}
         {pagesInCurrentBlock.map((page) => (
            <li
               className={`p-2 hover:bg-red-400 ${
                  currentPage === page ? "text-white bg-red-500" : ""
               }`}
               key={page}
               onClick={() => setCurrentPage(page)}
            >
               {page}
            </li>
         ))}
         {currentPage < lastPage && <li onClick={handleNextPage}>{">"}</li>}
         {currentPage < lastPage && <li onClick={handleLastPage}>{">>"}</li>}
      </ul>
   );
};

export default Pagination;
