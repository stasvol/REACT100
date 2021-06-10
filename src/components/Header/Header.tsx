import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import photo from "../../Photo/Images/kot.png";

// export type headerPropsType={
//     isAuth:boolean,
//     login:string,
//     loginOut:()=> void
// }

 export type mapStateType={
    isAuth: boolean,
    login: string|null
}
export type dispatchType={
    loginOut:()=>void
}

const Header:React.FC <mapStateType & dispatchType> = (props) =>{
    return(

        <header className={classes.header}>
            <img src={'https://img2.pngio.com/logo-png-images-download-150000-logo-png-resources-with-logo-download-png-360_360.png'} alt={'image'}/>
            <div className={classes.log}>
                { props.isAuth
                    ?
                    <div>{props.login}    <button onClick={props.loginOut}>Log out</button> </div>
                    :  <NavLink to={'/login'}>LOGIN</NavLink>
                }

            </div>
        </header>
    )
}
export default Header