import  React  from "react";
import classes from './News.module.css';
import News from "./News";
import {connect} from "react-redux";
import {currentPageSetAcCr, followAcCr, setProfAcCr, settingUserAcCr, unfollowAcCr}
from "../Settings/Set_reducers/setUserReducer";
import axios from "axios";
import {withRouter} from "react-router-dom";



const NewsContainer = (props) => {

     // let userId = props.match.params.userId
     // if (!userId){ userId = 2}

    axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/2`).then(response => {
         props.setProf(response.data)

    })


    return (
         <div>
          <News {...props} prof={props.prof} />
        </div>
    )
}
const mapStateToProps = (state) => {

    return {
        users: state.users.users,
        countUsersSet: state.users.countUsersSet ,
        pageSizeSet: state.users.pageSizeSet ,
        currentPageSet: state.users.currentPageSet,
        isLoad: state.users.isLoad,
        prof: state.users.prof

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
        }
    }
}
   // let NewsContainerRouter = withRouter(NewsContainer)
export default connect(mapStateToProps,mapDispatchToProps) (NewsContainer)