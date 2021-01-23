import React from 'react';
import classes from './SiteBar.module.css';
import {handleChangeActionCreator} from "../../../redux/post_reducer";

const SiteBar = (props) => {

    const changeClick = () =>{
        alert('HELLO FRIEND - ' + props.name);
        // let action = handleChangeActionCreator();
        // props.dispatch(action)
        props.dispatch(handleChangeActionCreator());

    }

    return(
        <div className={classes.block}>
            <img onClick={changeClick} className={classes.imgAvat}   src={props.img} alt={props.id} />
            <span className={classes.text}>{props.name}</span>
        </div>
    )
}



export  default SiteBar