import React, {Component} from 'react';
import classes from './Header.module.css';
import Header from "./Header";
import {setAuthUserData} from "../../redux/auth_reducer";
import {connect} from "react-redux";
import * as axios from "axios";


class HeaderContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me` , {withCredentials: true}).then(response => {

                  if (response.data.resultCode === 0){
                      let {id, email, login} = response.data.data
                   this.props.setAuthUserData(id, email, login);
               }
        });

    }

    render() {
        return (

            <Header  {...this.props} />
        )
    }
}
let mapStateToProps = (state) => ({
    auth: state.auth,
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect ( mapStateToProps,{setAuthUserData}) (HeaderContainer);