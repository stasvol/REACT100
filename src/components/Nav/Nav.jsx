import React, {Component} from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import SiteBar from  './SiteBar/SiteBar'
import SiteBarContainer from "./SiteBar/SiteBarContainer";


const Navbar = (props) => {

    let Friends = props.data.siteBarNav.map( obj => {
        return <SiteBar id={obj.id} name={obj.name} img={obj.img } store={props.store}  />
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
                    <NavLink to={'/Setting'} activeClassName={classes.active}>Settings</NavLink></li>
                <li className={classes.item}><h2 className={classes.header}>FRIEND</h2></li>
            </ul>

            {Friends}
             {/*<SiteBarContainer store={props.store} />*/}
        </nav>
    )
}




export default Navbar