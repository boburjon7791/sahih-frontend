import React from "react";
import "./Pagination.css";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Sahifalar massivini generatsiya qilish
    const getPages = () => {
        const pages = [];

        if (totalPages <= 5) {
            // Juda kam bo‘lsa — to‘liq chiqarish
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, "...", totalPages);
            } else if (currentPage > 3 && currentPage < totalPages - 2) {
                pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            } else {
                pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
            }
        }


        return pages;
    };

    return (
        <div className="pagination">
            <button
                className="pagination-btn"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                ◀
            </button>

            {getPages().map((page, index) =>
                    page === "..." ? (
                        <span key={index} className="pagination-dots">
            ...
          </span>
                    ) : (
                        <button
                            key={index}
                            className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    )
            )}

            <button
                className="pagination-btn"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                ▶
            </button>
        </div>
    );
};

export default Pagination;
