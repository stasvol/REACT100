import React, {Component} from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(

            <header className={classes.header}>
                <img src={'https://img2.pngio.com/logo-png-images-download-150000-logo-png-resources-with-logo-download-png-360_360.png'} alt={'image'}/>
                <div className={classes.log}>
                    { props.isAuth ? props.login :   <NavLink to={'/login'}>LOGIN</NavLink> }

                </div>
            </header>
    )
}
export default Header