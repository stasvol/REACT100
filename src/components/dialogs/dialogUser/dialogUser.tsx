import React from "react";
import {NavLink} from "react-router-dom";

import classes from './dialogUser.module.css'

type propsType ={
    id:number,
    img: string,
    name: string
}

const DialogUser:React.FC<propsType> = ({id,img,name}) => {

    let path = '/dialogs/1' + id

    return (
        <>
            <img className={classes.imgAvatar} src={img} alt={name} />
            <ul className={classes.dialogUser}>
                <li className={`${classes.user} `}>
                    <NavLink to={path} activeClassName={classes.active}>{name}</NavLink>
                </li>
            </ul>
        </>
    )
}

export  default DialogUser