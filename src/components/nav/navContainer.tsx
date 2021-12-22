import React from 'react'
import {Dispatch} from "redux";
import {connect} from 'react-redux';

import Nav from "./nav";
import {siteBarActionCreator, siteBarNavType} from "../../redux/sitebar_reducer";
import {rootReducersType} from "../../redux/reduxStore";

// export type mapStateType={
//     siteBarNav: siteBarNavType
// }
export type dispatchType ={
    siteBarActionCreator:(userId:number) => void
}

const mapStateToProps = (state:rootReducersType) =>{
    return {
        state: state.siteBar,
        siteBarNav:state.siteBar.siteBarNav
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        changeClick: (userId:number) => {
            dispatch(siteBarActionCreator(userId));

        },
    }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer
