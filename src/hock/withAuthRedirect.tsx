import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {rootReducersType} from "../redux/reduxStore";

let mapStateToPropsRedirect = (state:rootReducersType) => ({
    isAuth: state.auth.isAuth
});

type mapStateType={
    isAuth: boolean
}

export const withAuthRedirect = (Component:React.ComponentType) => {
    const AuthRedirectComponent:React.FC <mapStateType>= (props) => {
            if (!props.isAuth) return <Redirect to={'/login'} />
            return <Component {...props} />
        }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect) (AuthRedirectComponent)

    return  ConnectedAuthRedirectComponent

}