import React from 'react'
import classes from "./user.module.css";


const Paginator = ({currentPage,onChangePage,totalUsersCount,pageSize}) => {


    let pageCount = Math.ceil((totalUsersCount/pageSize)/100)
    let  pages = [];
    for (let i=1;  i <= pageCount; i++ ){
        pages.push(i);
    }

    return (

            <div className={classes.pagesNum}>
                { pages.map((p ,i) => {

                    return  <span key={i} className={ currentPage === p  ?  classes.active : classes.pageNum }
                                  onClick={(e) =>{onChangePage(p)}}> {p} </span>}) }

            </div>

    )

}

export default Paginator