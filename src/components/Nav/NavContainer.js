import React from 'react'
import {connect} from 'react-redux';
import Nav from "./Nav";
import {siteBarActionCreator} from "../../redux/sitebar_reducer";

const mapStateToProps = (state) =>{
    return {
        state: state.siteBar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeClick: (userId) => {
            dispatch(siteBarActionCreator(userId));

        },
    }
}

// const mapDispatchToProps = { changeClick: siteBarActionCreator };

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer
