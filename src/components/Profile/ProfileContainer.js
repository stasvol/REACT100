import React, {Component} from 'react';
import Profile from "./Profile";
import {getStatus, profileThunkCreator, setUsersProfile, updateStatus} from "../../redux/prof_reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {compose} from "redux";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";


class ProfileContainer extends React.Component{

    componentDidMount() {

         let userId = this.props.match.params.userId;

         if (!userId){

             userId = this.props.authorisedUserId
             // userId= 14585;
             // <img src={'https://goodhostel.lviv.ua/sites/default/files/clAvHWVG4GE.jpg'}/>
             //     // 1049;
                 // 14585;
             if (!userId) {
                 userId = this.props.history.push('/login')
             }
         }


        this.props.getUsers(userId)
        // this.props.profileThunkCreator(userId);
         this.props.getStatus(userId);
         // this.props.updateStatusThunkCreator(status);

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
                    <Profile  {...this.props} profile={this.props.profile}
                              status={this.props.status} updateStatus={this.props.updateStatus}/>

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
    status: state.profPage.status,
    authorisedUserId: state.auth.id,
    isAuth: state.auth.isAuth


});

 // let WithRouterProfileContainer = withRouter(AuthRedirectComponent)


// export default connect (mapStateToProps, {setUsersProfile,profileThunkCreator}) (WithRouterProfileContainer);
export default compose(
    connect (mapStateToProps, {setUsersProfile,getUsers: profileThunkCreator,getStatus,updateStatus}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)