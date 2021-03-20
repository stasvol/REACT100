import React from 'react'
import classes from "./Setting.module.css";


const SetPage = ({countUsersSet, pageSizeSet,currentPageSet,onCurPageSet, ...props}) => {

    const countPagesSet = Math.ceil((countUsersSet / pageSizeSet) / 100)
    const pagesSet = [];

    for (let i = 1; i <= countPagesSet; i++) {
        pagesSet.push(i)
    }

    return (

    <div className={classes.marg}>
        {
            pagesSet.map((p, i) => {
                return <span onClick={(e) => {
                    onCurPageSet(p)
                }} key={i} className={currentPageSet === p
                    ? classes.active
                    : classes.pag}>{p}</span>
            })
        }
    </div>
    )

}

export default SetPage