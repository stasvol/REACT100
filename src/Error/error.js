import React from "react";
import classes from "./error.module.css"

const Error = (props) =>{

    return  <div className={classes.modul}>
             <span>404 NOT FOUND</span> <br/>
             <span>'Something went wrong'</span>
            </div>
}

export default Error

