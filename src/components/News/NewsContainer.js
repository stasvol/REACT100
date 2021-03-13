import  React  from "react";
import classes from './News.module.css';
import News from "./News";
import {connect} from "react-redux";
import {
    currentPageSetAcCr,newPutStatus,
    followAcCr, newPutStatusThunk, newSetStatus, newGetStatusThunk, setFollowThunk,
    setLoadDisableButAcCr,
    setProfAcCr, setProfThunk,
    settingUserAcCr, setUnfollowThunk, Unfoll0wThunk,
    unfollowAcCr
}
    from "../Settings/Set_reducers/setUserReducer";
import axios from "axios";
import {NavLink, Redirect, withRouter} from "react-router-dom";
import {newAuthThunk, setAuthReducer, setAuthReducerAcCr} from "../Settings/Set_reducers/setAuthReducer";
import {newAuthMeApi, newProfileApi} from "../Settings/SetApiAxios";
import {withSetComponent} from "../Settings/HocSetting/hocWithSet";
import {compose} from "redux";
import NewsStatus from "./newsStatus";


class NewsContainer extends React.Component {

    componentDidMount() {

        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true })
        // newAuthMeApi().then(data => {
        //           if (data.resultCode===0){
        //           let {id,email,login } = data.data
        //           this.props.setAuthReducer(id,email,login)
        //       }
        //
        //     })
        this.props.newAuthThunk(this.props.id,this.props.email,this.props.login)

        let userId = this.props.match.params.userId
        if (!userId){ userId = 2}

          this.props.setProfThunk(userId)

          this.props.newGetStatusThunk(userId)
        // newProfileApi(userId).then(response => {
        //           this.props.setProf(response.data)
        //        })
        // axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/`+ userId,
        //     {withCredentials:true})
        //     .then(response => {
        //     this.props.setProf(response.data)
        //
        // })
    }

    render() {

          // if (!this.props.isSetAuth) return <Redirect to={'/Login'}/>
        return (
            <div>
                <News {...this.props} prof={this.props.prof} status={this.props.status} newPutStatusThunk={this.props.newPutStatusThunk} />

            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        users: state.users.users,
        countUsersSet: state.users.countUsersSet ,
        pageSizeSet: state.users.pageSizeSet ,
        currentPageSet: state.users.currentPageSet,
        isLoad: state.users.isLoad,
        prof: state.users.prof,
        isSetAuth:state.setAuth.isSetAuth,
        login: state.setAuth.login,
        setDisableBut:state.users.setDisableBut,
        status:state.users.status
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        setFollow: (userId) =>{
            dispatch(followAcCr(userId))
        },
        setUnFollow: (userId) =>{
            dispatch (unfollowAcCr(userId))
        },
        settingAddUser: (users) => {
            dispatch(settingUserAcCr(users))
        },
        SetCurPage: (currentPageSet) => {
            dispatch(currentPageSetAcCr(currentPageSet)) ;
        },
        setProf: (prof) => {
            dispatch(setProfAcCr(prof));
        },
        setAuthReducer: (id,email,login) => {
           dispatch(setAuthReducerAcCr(id,email,login));
        },
        setLoadDisableBut: (isLoad,userId) => {
            dispatch(setLoadDisableButAcCr(isLoad,userId))
        },
        newAuthThunk: (id,email,login)=> {
            dispatch(newAuthThunk(id,email,login));
        },
        setProfThunk: (userId) => {
            dispatch(setProfThunk(userId))
        },
        setFollowThunk: (userId) => {
            dispatch(setFollowThunk(userId))
        },
           setUnfollowThunk: (userId) => {
             dispatch(setUnfollowThunk(userId))
        },
        newGetStatusThunk: (userId) => {
            dispatch(newGetStatusThunk(userId))
        },
        newPutStatusThunk: (status) => {
            dispatch(newPutStatusThunk(status))
        }
    }
}

export default compose(
    // withSetComponent,
    withRouter,
    connect(mapStateToProps,mapDispatchToProps)
  )(NewsContainer)
//    // let withSetComponentRedirectCont = withSetComponent(NewsContainer)
//    let NewsContainerRouter = withRouter(NewsContainer)
// export default connect(mapStateToProps,mapDispatchToProps) (NewsContainerRouter)