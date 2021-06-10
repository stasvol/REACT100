import React from 'react'
import {connect} from 'react-redux';
import Nav from "./Nav";
import {siteBarActionCreator, siteBarNavType} from "../../redux/sitebar_reducer";
import {rootReducersType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
export type mapStateType={
    siteBarNav: siteBarNavType
}
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

// const mapDispatchToProps = { changeClick: siteBarActionCreator };

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer
