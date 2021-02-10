import React, {Component} from 'react';
import classes from './Header.module.css';
import Header from "./Header";
import {authThunkCreator, loginOut, setAuthUserData} from "../../redux/auth_reducer";
import {connect} from "react-redux";
import * as axios from "axios";
import {userApi} from "../../Api/api";


class HeaderContainer extends React.Component {

    // componentDidMount(props) {
    //      this.props.authThunkCreator (this.props.id, this.props.email, this.props.login,this.props.isAuth)
    //     // userApi.loginUser().then(data => {
    //     //
    //     //           if (data.resultCode === 0){
    //     //               let {id, email, login} = data.data
    //     //            this.props.setAuthUserData(id, email, login);
    //     //        }
    //     // });
    //
    // }

    render() {
        return (

            <Header {...this.props} />
        )
    }
}
let mapStateToProps = (state) => ({
    auth: state.auth,
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect ( mapStateToProps,{loginOut}) (HeaderContainer);