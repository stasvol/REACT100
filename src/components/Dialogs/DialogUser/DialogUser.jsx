import React from "react";
import classes from './DialogUser.module.css'
import {NavLink} from "react-router-dom";

const DialogUser = (props) => {

    let path = '/dialogs/1' + props.id


    return (

        <div>

            <img className={classes.imgAvatar} src={props.img} alt={props.name} />

            <ul className={classes.dialogUser}>
                <li className={`${classes.user} `}>
                    <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
                </li>
            </ul>
        </div>
    )
}

export  default DialogUser