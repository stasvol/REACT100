import React from 'react'
import classes from "./pagination.module.css";
import {useState} from "react";


const Paginator = ({currentPage,onChangePage,totalUsersCount,pageSize,portionSize=10}) => {


    let pageCount = Math.ceil((totalUsersCount/pageSize)/100)
    let  pages = [];
    for (let i=1;  i <= pageCount; i++ ){
        pages.push(i);
    }
    const portionCount = Math.ceil(pageCount/portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber-1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classes.paginator}>
            {portionNumber > 1 &&
                <button onClick={() =>{setPortionNumber(portionNumber-1)}}>PREV</button> }

            {pages
                .filter(p =>p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={ ({
                    [classes.selectedPage] : currentPage === p},
                        classes.pageNumber) }
                              key={p}
                              onClick={(e) => {
                                  onChangePage(p);
                              }} >{p}</span>
                    })}
            { portionCount > portionNumber &&
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button> }



        </div>

            // <div className={classes.pagesNum}>
            //     { pages.map((p ,i) => {
            //
            //         return  <span key={i} className={ currentPage === p  ?  classes.active : classes.pageNum }
            //                       onClick={(e) =>{onChangePage(p)}}> {p} </span>}) }
            //
            // </div>

    )

}

export default Paginator