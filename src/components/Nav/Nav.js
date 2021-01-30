import React, {Component} from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import SiteBar from './SiteBar/SiteBar'



const Navbar = (props) => {

    let Friends = props.state.siteBarNav.map( (obj, i) => {
        return <SiteBar id={obj.id} name={obj.name} img={obj.img }   changeClick={props.changeClick}  key={i}/>
    })



    return  (

        <nav className={classes.nav}>
            <ul>
                <li className={`${classes.item} ${classes.active}`}>
                    <NavLink to={'/Profile'} activeClassName={classes.active}>Profile</NavLink></li>
                <li className={classes.item}>
                    <NavLink to={'/Dialogs'} activeClassName={classes.active}>Dialogs</NavLink></li>
                <li className={classes.item}>
                    <NavLink to={'/News'} activeClassName={classes.active}>News</NavLink></li>
                <li className={classes.item}>
                    <NavLink to={'/Music'} activeClassName={classes.active}>Music</NavLink></li>
                <li className={classes.item}>
                    <NavLink to={'/User'} activeClassName={classes.active}>Users</NavLink></li>
                <li className={classes.item}>
                    <NavLink to={'/Setting'} activeClassName={classes.active}>Settings</NavLink></li>
                <li className={classes.item}><h2 className={classes.header}>FRIEND</h2></li>
            </ul>
            {Friends}
        </nav>

    )
}




export default Navbar