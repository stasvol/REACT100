import React from 'react';
import classes from './SiteBar.module.css';
import {siteBarNavType} from "../../../redux/sitebar_reducer";



const SiteBar:React.FC<siteBarNavType> = (props) => {

    const changeClick = (): void => {
        alert('HELLO FRIEND - ' + props.name);
        // let action = handleChangeActionCreator();
        // props.dispatch(action)
        // props.store.dispatch(handleChangeActionCreator());
        // props.changeClick(props.id);

    }

    return (
        <div className={classes.block}>
            <img onClick={changeClick} className={classes.imgAvat} src={props.img} alt={"image"}/>
            <span className={classes.text}>{props.name}</span>
        </div>
    )
}


export default SiteBar