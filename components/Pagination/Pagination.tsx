import React from "react";

type PaginationType = {
  currentPageData: string[];
  currentPage: number;
  totalPage: number;
  clickEvent: (btnName: string) => void;
};

const Pagination: React.FC<PaginationType> = ({
  currentPageData,
  currentPage,
  totalPage,
  clickEvent,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-center">{`Showing ${
        currentPageData.length > 0 ? currentPage : 0
      } of ${totalPage}`}</div>
      {currentPageData.length > 0 ? (
        <div className="flex gap-1 justify-center">
          <button
            type="button"
            role="buttons"
            className="button-style"
            disabled={currentPage === 1}
            onClick={() => clickEvent("First")}
          >
            First
          </button>
          <button
            type="button"
            role="buttons"
            className="button-style"
            disabled={currentPage === 1}
            onClick={() => clickEvent("Previous")}
          >
            Previous
          </button>
          <button
            type="button"
            role="buttons"
            className="button-style"
            disabled={currentPage === totalPage}
            onClick={() => clickEvent("Next")}
          >
            Next
          </button>
          <button
            type="button"
            role="buttons"
            className="button-style"
            disabled={currentPage === totalPage}
            onClick={() => clickEvent("Last")}
          >
            Last
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Pagination;
