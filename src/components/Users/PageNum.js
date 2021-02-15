import React from 'react'
import classes from "./user.module.css";


const PageNum = (props) => {


    let pageCount = Math.ceil((props.totalUsersCount/props.pageSize)/100)
    let  pages = [];
    for (let i=1;  i <= pageCount; i++ ){
        pages.push(i);
    }

    return (

            <div className={classes.pagesNum}>
                { pages.map((p ,i) => {

                    return  <span key={i} className={ props.currentPage === p  ?  classes.active : classes.pageNum }
                                  onClick={(e) =>{props.onChangePage(p)}}> {p} </span>}) }

            </div>

    )

}

export default PageNum