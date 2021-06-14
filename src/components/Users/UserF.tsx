// import React, {useEffect} from 'react'
// import Paginator from "../pagination/Paginator";
// import User from "./user";
// import {
//     disableButtonType,
//     filterType,
//     usersType
// } from "../../redux/user_reducer";
// import {PropsTypeUserContainer} from "./UserContainer";
// import UsersSearchForm from "./UsersSearchForm";
// import {useHistory} from "react-router";
// // import photo from './../../Photo/Images/user2.png'
//
//
// interface propsType{
//     currentPage:number,
//     onChangePage:(pageNumber:number)=>void,
//     // totalUsersCount:number,
//     // pageSize:number,
//     // pageNumberSizes:number,
//     users: Array<usersType>
//     disableButton:disableButtonType
//     unFollowThunkCreator:()=>void
//     FollowThunkCreator:()=>void
//     onFilterChange:(filter:filterType)=>void
// }
//
// const UsersF:React.FC<PropsTypeUserContainer & propsType> = ({currentPage,filter,users,...props}) => {
//
// // let addUsers = () => {
// //     if (props.users.length === 0) {
// //
// //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
// //
// //             props.setUsers(response.data.items);
// //         });
// //     }
// // }
// //
// // props.setUsers([
// //         {
// //             id: 1, photoUrl: 'https://download-cs.net/steam/avatars/3424.jpg',
// //             followed: true, fullName: 'Anna', status: 'I am a boss', location: {country: 'Ukraine', city: 'Kiev'}
// //         },
// //         {
// //             id: 2, photoUrl: 'https://cs16planet.ru/steam-avatars/images/avatar2960.jpg',
// //             followed: false, fullName: 'Ivan', status: 'I am a boss', location: {country: 'Ukraine', city: 'Lvov'}
// //         },
// //         {
// //             id: 3, photoUrl: 'https://download-cs.net/steam/avatars/3426.jpg',
// //             followed: false, fullName: 'Vovan', status: 'I am a boss', location: {country: 'Ukraine', city: 'Odessa'}
// //         },
// //         {
// //             id: 4,
// //             photoUrl: 'https://2ch.hk/sex/thumb/6329995/15866325175470s.jpg',
// //             followed: true, fullName: 'Sweta ',status: 'I am a boss',location: {country: 'Ukraine', city: 'Rivne'}
// //         }
// // ]);
//     // let pageCount = Math.ceil((props.totalUsersCount/props.pageSize)/100)
//     // let  pages = [];
//     // for (let i=1;  i <= pageCount; i++ ){
//     //     pages.push(i);
//     // }
//
//
//     const history = useHistory()
//
//     // useEffect(()=>{
//     //
//     //     setTimeout(()=>{
//     //         history.push({
//     //             pathname:'/user',
//     //             search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
//     //         })
//     //     }, 1000)
//     //
//     // },[filter.term,filter.friend])
//
//
//     return (
//
//         <div>
//             <UsersSearchForm onFilterChange={props.onFilterChange}/>
//              <Paginator currentPage={currentPage} onChangePage={props.onChangePage} pageNumberSizes={props.pageNumberSizes}
//                         totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
//
//             {/*<button onClick={this.addUsers}>ADD USERS</button>*/}
//
//             {
//                     users.map((user,i) => <User key={i} user={user}
//
//                                                 disableButton={props.disableButton}
//                                                 unFollowThunkCreator={props.unFollowThunkCreator}
//                                                 FollowThunkCreator={props.FollowThunkCreator}/>
//                                                 )
//                 //         <div key={i}>
//                 //     <div>
//                 //         {/*<img src={user.photoUrl} className={classes.photo}/>*/}
//                 //
//                 //         <NavLink to={'/Profile/' + user.id}>
//                 //         <img src={user.photos.small != null ? user.photos.small : photo} alt={'image'} className={classes.photo}/>
//                 //         </NavLink>
//                 //
//                 //     </div>
//                 //     <div>
//                 //         {user.followed
//                 //             ? <button disabled={props.disableButton.some(id => id === user.id)} onClick={() => {
//                 //
//                 //                 props.unFollowThunkCreator(user.id)
//                 //         //      props.disableButtonFol(true, user.id)
//                 //         // userApi.deleteUser(user.id).then(data => {
//                 //         //
//                 //         //                if (data.resultCode === 0) {
//                 //         //                     props.unfollow(user.id)
//                 //         //                 }
//                 //         //     props.disableButtonFol(false,user.id)
//                 //         //             });
//                 //
//                 //             }}>UnFollow</button>
//                 //
//                 //             : <button disabled={props.disableButton.some(id => id === user.id)} onClick={() => {
//                 //
//                 //                 props.FollowThunkCreator(user.id)
//                 //            //      props.disableButtonFol(true, user.id)
//                 //            //
//                 //            // userApi.postUser(user.id).then(data => {
//                 //            //
//                 //            //         if (data.resultCode === 0) {
//                 //            //             props.follow(user.id)
//                 //            //         }
//                 //            //     props.disableButtonFol(false,user.id)
//                 //            //
//                 //            //      });
//                 //             }}>Follow</button>
//                 //         }
//                 //
//                 //     </div>
//                 //     <div>{user.name}</div>
//                 //     <div>{user.status}</div>
//                 //     <div>{"user.location.country"}</div>
//                 //     <div>{"user.location.city"}</div>
//                 //
//                 // </div>)
//             }
//         </div>
//     )
// }
//
//
// export default UsersF


import React, {useEffect} from 'react'
import Paginator from "../pagination/Paginator";
import User from "./user";
import {
    disableButtonType,
    filterType,
    follow,
    FollowThunkCreator,
    getUsersThunkCreator,
    unfollow, unFollowThunkCreator,
    usersType
} from "../../redux/user_reducer";
// import {PropsTypeUserContainer} from "./UserContainer";
import UsersSearchForm from "./UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
    currentPageSelector, disableButtonSector, getUsersSelector,
    pageNumberSizesSelector,
    pageSizeSelector, setFilterSelector,
    totalUsersCountSelector
} from "../../redux/users_selectors";
import {useHistory} from "react-router";


// export interface propsType{
//     currentPage:number,
//     onChangePage:(pageNumber:number)=>void,
//     // totalUsersCount:number,
//     // pageSize:number,
//     // pageNumberSizes:number,
//     users: Array<usersType>
//     // disableButton:disableButtonType
//     unFollowThunkCreator:()=>void
//     FollowThunkCreator:()=>void
//     onFilterChange:(filter:filterType)=>void
//     disableButton: Array<disableButtonType>
// }

export const UsersF: React.FC = ({...props}) => {

// let addUsers = () => {
//     if (props.users.length === 0) {
//
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//
//             props.setUsers(response.data.items);
//         });
//     }
// }
//
// props.setUsers([
//         {
//             id: 1, photoUrl: 'https://download-cs.net/steam/avatars/3424.jpg',
//             followed: true, fullName: 'Anna', status: 'I am a boss', location: {country: 'Ukraine', city: 'Kiev'}
//         },
//         {
//             id: 2, photoUrl: 'https://cs16planet.ru/steam-avatars/images/avatar2960.jpg',
//             followed: false, fullName: 'Ivan', status: 'I am a boss', location: {country: 'Ukraine', city: 'Lvov'}
//         },
//         {
//             id: 3, photoUrl: 'https://download-cs.net/steam/avatars/3426.jpg',
//             followed: false, fullName: 'Vovan', status: 'I am a boss', location: {country: 'Ukraine', city: 'Odessa'}
//         },
//         {
//             id: 4,
//             photoUrl: 'https://2ch.hk/sex/thumb/6329995/15866325175470s.jpg',
//             followed: true, fullName: 'Sweta ',status: 'I am a boss',location: {country: 'Ukraine', city: 'Rivne'}
//         }
// ]);
    // let pageCount = Math.ceil((props.totalUsersCount/props.pageSize)/100)
    // let  pages = [];
    // for (let i=1;  i <= pageCount; i++ ){
    //     pages.push(i);
    // }
    const users = useSelector(getUsersSelector)
    const currentPage = useSelector(currentPageSelector)
    const totalUsersCount = useSelector(totalUsersCountSelector)
    const pageSize = useSelector(pageSizeSelector)
    const pageNumberSizes = useSelector(pageNumberSizesSelector)
    const filter = useSelector(setFilterSelector)
    const disableButton = useSelector(disableButtonSector)

    const dispatch = useDispatch()
    const history = useHistory()

    // useEffect(()=>{
    //
    //         history.push({
    //             pathname:'/user',
    //             search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
    //         })
    //
    //
    // },[])

    useEffect(() => {
        dispatch(getUsersThunkCreator(currentPage, pageSize, filter))
    }, [])

    const onChangePage = (pageNumber: number) => {
        // const {pageSize,filter}= props
        dispatch(getUsersThunkCreator(pageNumber, pageSize, filter))
    }

    const onFilterChange = (filter: filterType) => {
        // const {pageSize,currentPage}= this.props
        dispatch(getUsersThunkCreator(1, pageSize, filter))

    }
    const follow = (userId: number) => {
        dispatch(follow(userId))
    }

    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    const unFollowThunkCreator = (userId: number) => {
        dispatch(unFollowThunkCreator(userId))
    }


    const FollowThunkCreator = (userId: number) => {
        dispatch(FollowThunkCreator(userId))
    }


    return (

        <div>
            <UsersSearchForm onFilterChange={onFilterChange}/>
            <Paginator currentPage={currentPage} onChangePage={onChangePage} pageNumberSizes={pageNumberSizes}
                       totalUsersCount={totalUsersCount} pageSize={pageSize}/>

            {/*<button onClick={this.addUsers}>ADD USERS</button>*/}

            {
                users.map((user, i) => <User key={i} user={user}

                                             disableButton={disableButton}
                                             unFollowThunkCreator={unFollowThunkCreator}
                                             FollowThunkCreator={FollowThunkCreator}/>
                )
                //         <div key={i}>
                //     <div>
                //         {/*<img src={user.photoUrl} className={classes.photo}/>*/}
                //
                //         <NavLink to={'/Profile/' + user.id}>
                //         <img src={user.photos.small != null ? user.photos.small : photo} alt={'image'} className={classes.photo}/>
                //         </NavLink>
                //
                //     </div>
                //     <div>
                //         {user.followed
                //             ? <button disabled={props.disableButton.some(id => id === user.id)} onClick={() => {
                //
                //                 props.unFollowThunkCreator(user.id)
                //         //      props.disableButtonFol(true, user.id)
                //         // userApi.deleteUser(user.id).then(data => {
                //         //
                //         //                if (data.resultCode === 0) {
                //         //                     props.unfollow(user.id)
                //         //                 }
                //         //     props.disableButtonFol(false,user.id)
                //         //             });
                //
                //             }}>UnFollow</button>
                //
                //             : <button disabled={props.disableButton.some(id => id === user.id)} onClick={() => {
                //
                //                 props.FollowThunkCreator(user.id)
                //            //      props.disableButtonFol(true, user.id)
                //            //
                //            // userApi.postUser(user.id).then(data => {
                //            //
                //            //         if (data.resultCode === 0) {
                //            //             props.follow(user.id)
                //            //         }
                //            //     props.disableButtonFol(false,user.id)
                //            //
                //            //      });
                //             }}>Follow</button>
                //         }
                //
                //     </div>
                //     <div>{user.name}</div>
                //     <div>{user.status}</div>
                //     <div>{"user.location.country"}</div>
                //     <div>{"user.location.city"}</div>
                //
                // </div>)
            }
        </div>
    )
}