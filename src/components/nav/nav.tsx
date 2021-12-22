import React from 'react';
import {NavLink} from "react-router-dom";

import SiteBar from './siteBar/siteBar'
import {initialStateType} from "../../redux/sitebar_reducer";

import classes from './nav.module.css';

const Navbar:React.FC<initialStateType> = ({siteBarNav}) => (

        <nav className={classes.nav}>
            <ul>
                <li className={`${classes.item} ${classes.active}`}>
                    <NavLink to={'/profile'} activeClassName={classes.active}>Profile</NavLink></li>
                <li className={classes.item}>
                    <NavLink to={'/dialogs'} activeClassName={classes.active}>Dialogs</NavLink></li>
                <li className={classes.item}>
                    <NavLink to={'/news'} activeClassName={classes.active}>News</NavLink></li>
                <li className={classes.item}>
                    <NavLink to={'/music'} activeClassName={classes.active}>Music</NavLink></li>
                <li className={classes.item}>
                    <NavLink to={'/User'} activeClassName={classes.active}>Users</NavLink></li>
                <li className={classes.item}>
                    <NavLink to={'/Setting'} activeClassName={classes.active}>Settings</NavLink></li>
                <li className={classes.item}><h2 className={classes.header}>FRIEND</h2></li>
            </ul>
            {
                siteBarNav.map( ({id,name,img}) => <SiteBar id={id} name={name} img={img} key={id}/>)
            }
        </nav>
)

export default Navbar;