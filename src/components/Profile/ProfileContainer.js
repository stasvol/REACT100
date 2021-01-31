import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {setUsersProfile} from "../../redux/prof_reducer";
import {connect} from "react-redux";



class ProfileContainer extends React.Component{

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/2`).then(response => {

            this.props.setUsersProfile(response.data);

        })

    }

    render () {
             return (
                 <div >
                    <Profile  {...this.props} profile={this.props.profile}/>

                 </div>
             )
         }
}

let mapStateToProps = (state) => ({
    profile: state.profPage.profile
})


export default connect (mapStateToProps, {setUsersProfile}) (ProfileContainer);