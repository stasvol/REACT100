import React from 'react'
import classes from "./Setting.module.css";
import {useState} from 'react'


const SetPage = ({countUsersSet, pageSizeSet,currentPageSet,onCurPageSet,pagesPart=10, ...props }) => {

    const countPagesSet = Math.ceil((countUsersSet / pageSizeSet) / 100) // к-ть стор.= заг. к-ть users поділ. на к-ть users на стор.
    const pagesSet = [];

    for (let i = 1; i <= countPagesSet; i++) {
        pagesSet.push(i)
    }

    {
        const pagesPartCount = Math.ceil(countPagesSet / pagesPart) // заг. к-ть стор. поділити к-ть кноп. на стор.
        const [pageNumber, setPageNumber] = useState(1)     // номер стор. i + f
        const leftBorder = (pageNumber - 1) * pagesPart + 1       // ліва границя = номер стор. помнож. на к-ть кноп. на стор.
        const rightBorder = pageNumber * pagesPart              // права границя = номер стор. помножити на к-ть кнопок на стор.

        return (

            <div className={classes.marg}>

                {pageNumber > 1 &&
                <button onClick={() => setPageNumber(pageNumber - 1)}>back</button>}

                {
                    pagesSet
                        .filter(p => p >= leftBorder && p <= rightBorder)

                        .map((p, i) => {
                            return <span onClick={(e) => {
                                onCurPageSet(p)
                            }} key={i} className={currentPageSet === p
                                ? classes.active
                                : classes.pag}>{p}</span>
                        })
                }
                {pagesPartCount > pageNumber &&
                <button onClick={() => {setPageNumber(pageNumber + 1)}}>forward</button>}
            </div>
        )
    }
}

export default SetPage