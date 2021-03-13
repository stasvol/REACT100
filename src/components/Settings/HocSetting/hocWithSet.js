import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

 const matStateToPropsRedir = (state) =>({
    isSetAuth: state.setAuth.isSetAuth
})

export const withSetComponent = (Component) => {

    const withSetComponentContainer = (props) => {
        if (!props.isSetAuth) return <Redirect to={'/Login'}/>
        return <Component {...props}/>
    }
    let withSetComponentRedirect = connect(matStateToPropsRedir) (withSetComponentContainer)
    return  withSetComponentRedirect
}

// export const withSetComponent = (Component)=>(props) =>{
//
//     if (!props.isSetAuth) return <Redirect to={'/Login'}/>
//     return <Component {...props}/>
//
// }

