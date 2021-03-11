import React from 'react'
import {connect} from "react-redux";

import {
    countUsersSetAcCr,
    currentPageSetAcCr,
    followAcCr, isLoadAcrCr, setProfAcCr,
    settingUserAcCr, settingUserTotalCountAcCr,
    unfollowAcCr
} from "./Set_reducers/setUserReducer";
import SettingUsers from "./SettingUsers";

import axios from "axios";
import Loading from "./Loading";
import {withRouter} from "react-router-dom";


class SetContainer extends React.Component {

    componentDidMount() {

        this.props.setIsLoad(true)
        // if (this.props.users.users.length === 0) {
        //     // (function () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSizeSet}
        &page=${this.props.currentPageSet}`,{withCredentials:true}).then(response => {

            this.props.setIsLoad(false)
            this.props.settingAddUser(response.data.items)
            this.props.settingUserTotalCount(response.data.totalCount)


        })

        // axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/2`).then(response => {
        //
        //     this.props.setProf(response.data)
        //
        // })
    }

    // const setAddUserButton = ()=> {
    //
    // }
    // if (props.users.users.length === 0) {
    //
    //     props.settingAddUser([
    //             {
    //                 id: 1, photoUrl: "https://i.pinimg.com/originals/53/08/1c/53081c48b54b7be2805a0b2ad5470735.jpg",
    //                 followed: true, name: 'Andre', status: "I'm  Cool"
    //             },
    //             {
    //                 id: 2, photoUrl: "https://i.pinimg.com/originals/b4/98/f9/b498f91f653cd9ed231209b12fac64c7.jpg",
    //                 followed: false, name: 'Tom', status: "I'm  authorised"
    //             },
    //         ]
    //     )
    // }
         onCurPageSet =(currentPageSet)=>{

        this.props.SetCurPage(currentPageSet)
             this.props.setIsLoad(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSizeSet}
        &page=${currentPageSet}`,{withCredentials:true }).then(response => {

            this.props.setIsLoad(false)
            this.props.settingAddUser(response.data.items)
            // this.props.settingUserTotalCount(response.data.totalCount)

        })
    }

    render() {
        return (
            <>
                { this.props.isLoad ? <Loading/> : null}
            <SettingUsers users={this.props.users}
                          countUsersSet={this.props.countUsersSet}
                          pageSizeSet={this.props.pageSizeSet} currentPageSet={this.props.currentPageSet}
                          setFollow={this.props.setFollow} setUnFollow={this.props.setUnFollow}
                          // settingAddUser={this.props.settingAddUser} SetCurPage={this.props.SetCurPage}
                          // settingUserTotalCount={this.props.settingUserTotalCount}
                          onCurPageSet={this.onCurPageSet}
                          // prof={this.props.prof}
            />
            </>
        )

    }



    // render() {
    //
    //        const countPagesSet = Math.ceil((this.props.countUsersSet / this.props.pageSizeSet )/100)
    //
    //        const pagesSet =[];
    //
    //        for ( let i=1; i <= countPagesSet; i++ ) {
    //               pagesSet.push(i)
    //        }
    //
    //
    //
    //
    //     return (
    //         <div>
    //             {/*<button onClick={setAddUserButton}>ADD USERS</button>*/}
    //             <h3>USERS</h3>
    //             <div className={classes.marg}>
    //             {
    //                 pagesSet.map((p,i) =>{
    //                     return  <span onClick={(e)=>{this.onCurPageSet(p)}} key={i} className={ this.props.currentPageSet === p
    //                         ?  classes.active
    //                         : classes.pag}>{p}</span>
    //                 })
    //             }
    //             </div>
    //             {/*<div className={classes.marg}>*/}
    //             {/*    <span className={`${classes.pag} ${classes.active}`}>1</span>*/}
    //             {/*    <span className={classes.pag}>2</span>*/}
    //             {/*    <span className={classes.pag}>3</span>*/}
    //             {/*    <span className={classes.pag}>4</span>*/}
    //             {/*    <span className={classes.pag}>5</span>*/}
    //             {/*</div>*/}
    //
    //             {
    //                 this.props.users.users.map((user, i) => {
    //
    //                     return <div key={i}>
    //                         <div>
    //                             <img className={classes.foto} src={user.photos.small ? user.photos.small : Photo}
    //                                  alt={'photo'}/>
    //                         </div>
    //                         <div>
    //                             <span><b>{user.name}</b></span>
    //                             <div>{new Date().toLocaleDateString()}</div>
    //                         </div>
    //                         <div>
    //                             <span>status: <i>{user.status}</i></span>
    //                         </div>
    //                         <div>
    //                             {user.followed
    //                                 ? <button onClick={() => {
    //                                     this.props.setUnFollow(user.id)
    //                                 }}>unFollow</button>
    //                                 : <button onClick={() => {
    //                                     this.props.setFollow(user.id)
    //                                 }}>Follow</button>
    //                             }
    //
    //                         </div>
    //                     </div>
    //
    //                 })
    //             }
    //
    //
    //             {/*{addSetingUser}*/}
    //         </div>
    //     )
    //
    // }
}


 const mapStateToProps = (state) =>{

    return {
        users: state.users,
        countUsersSet: state.users.countUsersSet ,
        pageSizeSet: state.users.pageSizeSet ,
        currentPageSet: state.users.currentPageSet,
        isLoad: state.users.isLoad,
        // prof: state.users.prof
    }
 }
 const mapDispatchToProps = (dispatch) =>{
   return {
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
       settingUserTotalCount:(countUsersSet) => {
           dispatch(settingUserTotalCountAcCr(countUsersSet));
       },
       setIsLoad:(isLoad) => {
           dispatch(isLoadAcrCr(isLoad));
       },
       // setProf: (prof) => {
       //     dispatch(setProfAcCr(prof));
       // }

   }

 }

export default connect(mapStateToProps,mapDispatchToProps) (SetContainer)