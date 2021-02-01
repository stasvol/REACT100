import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {addChangeText, addPost, setUsersProfile} from "../../redux/prof_reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"


class ProfileContainer extends React.Component{

    componentDidMount() {
         let userId = this.props.match.params.userId;
         if (!userId){
             userId=2;
         }
        axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/`+userId).then(response => {

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
    state: state.profPage,
    profile: state.profPage.profile,


});

 let WithRouterProfileContainer = withRouter(ProfileContainer)


export default connect (mapStateToProps, {setUsersProfile}) (WithRouterProfileContainer);