import  React  from "react";
import classes from './News.module.css';
import News from "./News";
import {connect} from "react-redux";
import {currentPageSetAcCr, followAcCr, setProfAcCr, settingUserAcCr, unfollowAcCr}
from "../Settings/Set_reducers/setUserReducer";
import axios from "axios";
import {NavLink, withRouter} from "react-router-dom";
import {setAuthReducer, setAuthReducerAcCr} from "../Settings/Set_reducers/setAuthReducer";


class NewsContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true })
            .then(response => {

              if (response.data.resultCode===0){
                  let {id,email,login } = response.data.data
                  this.props.setAuthReducer(id,email,login)
              }

            })


        let userId = this.props.match.params.userId
        if (!userId){ userId = 2}

        axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/`+ userId,
            {withCredentials:true}).then(response => {
            this.props.setProf(response.data)

        })
    }

    render() {

        return (
            <div>
                <News {...this.props} prof={this.props.prof}/>
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
        login: state.setAuth.login

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
        }
    }
}
   let NewsContainerRouter = withRouter(NewsContainer)
export default connect(mapStateToProps,mapDispatchToProps) (NewsContainerRouter)