import React from 'react';

import classes from "./pagination.module.css";
import {useUsersContainer} from "../../hock/useUsersContainer";

export interface propsPaginatorType {
    currentPage:number,
    onChangePage:(pageNumber:number)=>void,
    totalUsersCount:number,
    pageSize:number,
    pageNumberSizes:number

}

const Paginator: React.FC<propsPaginatorType> = () => {

const {pageCountSize,
    handlePagePlus,
    handlePageMinus,
    pagesData,
    currentPage,
    onChangePage,
    pageNumber} = useUsersContainer()

    return (
        <div className={classes.paginator}>
            {pageNumber > 1 &&
                <button className={classes.button} onClick={handlePageMinus}>Prev</button> }

            {pagesData
                .map((page) => {
                    const handleClick = () => {onChangePage(page)}
                    return <span className={  currentPage === page ? classes.selectedPage : classes.pageNumber }
                              key={page}
                              onClick={handleClick} >{page}</span>
                    })}
            { pageCountSize > pageNumber
                ?
                <button className={classes.button} onClick={handlePagePlus}>Next</button>
                : null
            }
        </div>
    )
}

export default Paginator