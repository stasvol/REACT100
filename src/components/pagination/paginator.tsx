import React, {useState} from 'react'

import classes from "./pagination.module.css";

export interface propsPaginatorType {
    currentPage:number,
    onChangePage:(pageNumber:number)=>void,
    totalUsersCount:number,
    pageSize:number,
    pageNumberSizes:number

}

const Paginator: React.FC<propsPaginatorType> = ({currentPage,
                                                     onChangePage,
                                                     totalUsersCount,
                                                     pageSize,
                                                     pageNumberSizes=10}) => {


    let pageCount = Math.ceil((totalUsersCount/pageSize))
    let  pages:Array<number> = [];
    for (let i=1;  i <= pageCount; i++ ){
        pages.push(i);
    }
    const pageCountSize = Math.ceil(pageCount/pageNumberSizes); //   /10 = pageNumberSizes
    const [pageNumber, setPageNumber] = useState(1);
    const leftPortionPageNumber = (pageNumber-1) * pageNumberSizes + 1;
    const rightPortionPageNumber = pageNumber * pageNumberSizes;
    const handlePagePlus = () => {setPageNumber(pageNumber + 1)}
    const handlePageMinus = () => {setPageNumber(pageNumber - 1)}
    const pagesData = pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)

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