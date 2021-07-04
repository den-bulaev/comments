import React, { ReactElement, FC } from 'react';

import './Navbar.scss';

type Props = {
  currentPage: number,
  pagesAmount: number,
  setCurrentPage: (x: number) => void,
}

const Navbar: FC<Props> = (
  { pagesAmount, setCurrentPage, currentPage },
): ReactElement => {
  const handleClickNext = () => {
    if (currentPage < pagesAmount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickPrevious = () => {
    if (currentPage >= 2) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClickFirst = () => {
    setCurrentPage(1);
  };

  const handleClickLast = () => {
    setCurrentPage(pagesAmount);
  };

  return (
    <nav
      className="pagination Navbar"
      role="navigation"
      aria-label="pagination"
    >
      <button
        type="button"
        className="pagination-previous button"
        onClick={handleClickPrevious}
      >
        Previous
      </button>

      <button
        type="button"
        className="pagination-next button"
        onClick={handleClickNext}
      >
        Next page
      </button>

      <ul className="pagination-list">
        <li>
          <button
            type="button"
            className="pagination-link button"
            onClick={handleClickFirst}
          >
            1
          </button>
        </li>

        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>

        <li>
          <button
            type="button"
            className="pagination-link is-current button"
          >
            {currentPage}
          </button>
        </li>

        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>

        <li>
          <button
            type="button"
            className="pagination-link button"
            onClick={handleClickLast}
          >
            {pagesAmount}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(Navbar);
