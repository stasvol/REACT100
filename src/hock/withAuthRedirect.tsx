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
    class AuthRedirectComponent extends React.Component <mapStateType> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'} />
            return <Component {...this.props} />
        }
    }
     // let mapStateToPropsRedirect = (state) => ({
     //     isAuth: state.auth.isAuth
     // });
        let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect) (AuthRedirectComponent)

         return  ConnectedAuthRedirectComponent
     //             return AuthRedirectComponent
 }