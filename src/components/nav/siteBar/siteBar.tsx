import React from 'react';

import {siteBarNavType} from "../../../redux/sitebar_reducer";

import classes from './siteBar.module.css';

const SiteBar:React.FC<siteBarNavType> = ({name,img}) => {

    const changeClick = (): void => {
        alert('HELLO FRIEND - ' + name);
    }

    return (
        <div className={classes.block}>
            <img onClick={changeClick} className={classes.imgAvat} src={img} alt={"image"}/>
            <span className={classes.text}>{name}</span>
        </div>
    )
}

export default SiteBar