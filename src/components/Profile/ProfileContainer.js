import React, {Component} from 'react';
import Profile from "./Profile";
import {addChangeText, addPost, profileThunkCreator, setUsersProfile} from "../../redux/prof_reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import { Redirect } from "react-router-dom"
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import Dialog from "../Dialogs/Dialog";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {

         let userId = this.props.match.params.userId;
         if (!userId){
             userId=2;
         }
        this.props.profileThunkCreator(userId);

        //  addAxios.getProfile(userId)
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/`+userId)
        //
        //     .then(response => {
        //
        //     this.props.setUsersProfile(response.data);
        //
        // })

    }

    render () {
             // if (!this.props.isAuth) return <Redirect to={'/login'} />
             return (
                 <div >
                    <Profile  {...this.props} profile={this.props.profile}/>

                 </div>
             )
         }
}

//       HOC

// let RedirectComponent = (props) => {
//
//     if (!props.isAuth) return <Redirect to={'/login'} />
//
//     return  <ProfileContainer {...props} />
//
// }
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer) ;
// let mapStateToPropsRedirect = (state) => ({
//     isAuth: state.auth.isAuth
// });
// AuthRedirectComponent = connect(mapStateToPropsRedirect) (AuthRedirectComponent)



let mapStateToProps = (state) => ({
    state: state.profPage,
    profile: state.profPage.profile,
    // isAuth: state.auth.isAuth


});

 // let WithRouterProfileContainer = withRouter(AuthRedirectComponent)


// export default connect (mapStateToProps, {setUsersProfile,profileThunkCreator}) (WithRouterProfileContainer);
export default compose(
    connect (mapStateToProps, {setUsersProfile,profileThunkCreator}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)