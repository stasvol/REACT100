import React from 'react';

import classes from './pagination.module.css';
import { useUsersContainer } from '../../hock/useUsersContainer';
import { CurrentPageActionType, TotalCountActionType } from '../../redux/user_reducer';

export interface PropsPaginatorType {
  currentPage: number | CurrentPageActionType;
  onChangePage: (pageNumber: number) => void;
  totalUsersCount: number | TotalCountActionType;
  pageSize: number | { pageNumberSizes: number };
  pageNumberSizes: number | { pageNumberSizes: number };
}

const Paginator: React.FC<PropsPaginatorType> = () => {
  const {
    pageCountSize,
    handlePagePlus,
    handlePageMinus,
    pagesData,
    currentPage,
    onChangePage,
    pageNumber,
  } = useUsersContainer();

  return (
    <div className={classes.paginator}>
      {pageNumber > 1 && (
        <button className={classes.button} onClick={handlePageMinus}>
          Prev
        </button>
      )}

      {pagesData.map(page => {
        const handleClick = (): void => {
          onChangePage(page);
        };

        return (
          <span
            key={page}
            className={+currentPage === page ? classes.selectedPage : classes.pageNumber}
            onClick={handleClick}
          >
            {page}
          </span>
        );
      })}
      {pageCountSize > pageNumber ? (
        <button className={classes.button} onClick={handlePagePlus}>
          Next
        </button>
      ) : null}
    </div>
  );
};

export default Paginator;
