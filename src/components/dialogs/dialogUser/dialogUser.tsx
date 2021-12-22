import React from "react";
import {NavLink} from "react-router-dom";

import classes from './dialogUser.module.css'

type propsType ={
    id:number,
    img: string,
    name: string
}

const DialogUser:React.FC<propsType> = (props) => {

    let path = '/dialogs/1' + props.id

    return (
        <>
            <img className={classes.imgAvatar} src={props.img} alt={props.name} />
            <ul className={classes.dialogUser}>
                <li className={`${classes.user} `}>
                    <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
                </li>
            </ul>
        </>
    )
}

export  default DialogUser