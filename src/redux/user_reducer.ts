import {userApi} from "../Api/api-users";
import {updateObjectInArray} from "../Utility/object_helper";
import { PhotosType } from "./prof_reducer";
import {AnyAction, Dispatch} from "redux";
import {rootReducersType} from "./reduxStore";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET USERS';
const SET_CURRENT_PAGE = 'SET CURRENT PAGE';
const SET_TOTAL_COUNT = 'SET TOTAL COUNT';
const TOGGLE_PRELOADER = 'TOGGLE PRELOADER';
const DISABLE_BUTTON_FOL = 'DISABLE BUTTON FOL';
const DELETE_USER = 'DELETE USER'

export type usersType={
    id: number
    name: string
    status: string
    photos: PhotosType
    followed:boolean
}
export type disableButtonType={
    disableButton?:boolean
    userId: number
}

export let initialState = {
    // users: [  {
    //     id: 1, photoUrl: 'https://download-cs.net/steam/avatars/3424.jpg',
    //     followed: true, fullName: 'Anna', status: 'I am a boss', location: {country: 'Ukraine', city: 'Kiev'}
    // },
    // {
    //     id: 2, photoUrl: 'https://cs16planet.ru/steam-avatars/images/avatar2960.jpg',
    //     followed: false, fullName: 'Ivan', status: 'I am a boss', location: {country: 'Ukraine', city: 'Lvov'}
    // },
    // {
    //     id: 3, photoUrl: 'https://download-cs.net/steam/avatars/3426.jpg',
    //     followed: false, fullName: 'Vovan', status: 'I am a boss', location: {country: 'Ukraine', city: 'Odessa'}
    // },
    // {
    //     id: 4,
    //     photoUrl: 'https://2ch.hk/sex/thumb/6329995/15866325175470s.jpg',
    //     followed: true, fullName: 'Sweta ',status: 'I am a boss',location: {country: 'Ukraine', city: 'Rivne'}
    // }  ],
    users: [] as Array<usersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true,
    pageNumberSizes: 10,
    disableButton: [] as Array<disableButtonType> // array userId
}
export type initialStateUserType= typeof initialState

const userReducer = (state = initialState, action:AnyAction):initialStateUserType => {

    switch (action.type) {

        case  FOLLOW:

            return {
                ...state,
                // users: [...state.users]
                users: updateObjectInArray (state.users,action.userId,'id',{followed: true})
                // users: state.users.map(user => {
                //     if (user.id === action.userId) {
                //         return {...user, followed: true};
                //     }
                //     return user
                // })
            }

        case UNFOLLOW:

            return {
                ...state,
                users: updateObjectInArray (state.users,action.userId,'id',{followed: false}),
                // users: state.users.map(user => {
                //     if (user.id === action.userId) {
                //         return {...user, followed: false};
                //     }
                //     return user;
                // })

            }

        case SET_USERS:
            return {
                ...state,

                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }

        case  TOGGLE_PRELOADER:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case  DISABLE_BUTTON_FOL:

            // @ts-ignore
            return <initialStateUserType>{
                ...state,
                disableButton: action.disableButton
                    ? [...state.disableButton, action.userId]
                    : state.disableButton.filter(id => id !== action.userId)
            }

        case  DELETE_USER:
            return {
                ...state,
                users: [...state.users].filter(u => u.id !== action.userId)
            }


        default:
            return state;
    }
}

type actionCreatorUsersType = followActionType | unfollowActionType | usersActionType | currentPageActionType |
    totalCountActionType | togglePreloaderActionType | disableButtonFolActionType | deleteUsersActionType

type followActionType={
    type:typeof FOLLOW,
    userId:number
}
export const follow = (userId:number):followActionType => ({type: FOLLOW, userId});

type unfollowActionType={
    type:typeof UNFOLLOW,
    userId:number
}
export const unfollow = (userId:number):unfollowActionType => ({type: UNFOLLOW, userId});

type usersActionType={
    type:typeof SET_USERS,
    users:usersType
}
export const setUsers = (users:usersType):usersActionType => ({type: SET_USERS, users});

type currentPageActionType={
    type:typeof SET_CURRENT_PAGE,
    currentPage:number
}
export const setCurrentPage = (currentPage:number):currentPageActionType => ({type: SET_CURRENT_PAGE, currentPage: currentPage});

type totalCountActionType={
    type:typeof SET_TOTAL_COUNT,
    totalCount:number
}
export const setTotalUsersCount = (totalCount:number):totalCountActionType => ({type: SET_TOTAL_COUNT, totalCount});

type togglePreloaderActionType={
    type:typeof TOGGLE_PRELOADER,
    isLoading:boolean
}
export const togglePreloader = (isLoading:boolean):togglePreloaderActionType => ({type: TOGGLE_PRELOADER, isLoading});

type disableButtonFolActionType={
    type:typeof DISABLE_BUTTON_FOL,
    disableButton:boolean,
    userId:number
}
export const disableButtonFol = (disableButton:boolean, userId:number):disableButtonFolActionType => ({type: DISABLE_BUTTON_FOL, disableButton, userId});

type deleteUsersActionType={
    type:typeof DELETE_USER,
    userId:number
}
export const deleteUsers = (userId:number):deleteUsersActionType => ({type: DELETE_USER, userId});

//    THUNK

type dispatchType = Dispatch<actionCreatorUsersType>
type getStateType = () => rootReducersType
type thunkType = ThunkAction<Promise<void>, rootReducersType, unknown, actionCreatorUsersType>


export const getUsersThunkCreator = (currentPage:number, pageSize:number):thunkType => {

    return async (dispatch) => {

        dispatch(togglePreloader(true));
        dispatch(setCurrentPage(currentPage))
        //response
        const data = await userApi.getUserPage(currentPage, pageSize)
        // .then(data => {

        dispatch(togglePreloader(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        // });
    }
}

const followUnfollowFlow = async(dispatch:dispatchType,userId:number, ApiMethod:any,
                                    ActionCreator:(userId:number)=> followActionType | unfollowActionType) => {

       dispatch(disableButtonFol(true, userId))
       const data = await ApiMethod(userId)
       // .then(data => {
       if (data.resultCode === 0) {
           dispatch(ActionCreator(userId))
       }
       dispatch(disableButtonFol(false, userId))

}


export const FollowThunkCreator = (userId:number):thunkType => {

    return async (dispatch) => {
        // const ApiMethod = userApi.postUser.bind(userId)
        // const ActionCreator = follow;
        followUnfollowFlow(dispatch, userId, userApi.postUser.bind(userId), follow)
        // dispatch(disableButtonFol(true, userId))
        // const data = await ApiMethod
        // // .then(data => {
        // if (data.resultCode === 0) {
        //     dispatch(ActionCreator(userId))
        // }
        // dispatch(disableButtonFol(false, userId))
        // });
    }
}

export const unFollowThunkCreator = (userId:number):thunkType => {

    return async (dispatch) => {
        const ApiMethod = userApi.deleteUser.bind(userId)
        const ActionCreator = unfollow
        followUnfollowFlow(dispatch, userId, ApiMethod, ActionCreator)
        // dispatch(disableButtonFol(true, userId))
        // const data = await ApiMethod
        // // .then(data => {
        // if (data.resultCode === 0) {
        //     dispatch(ActionCreator(userId))
        // }
        // dispatch(disableButtonFol(false, userId))
        // });
    }
}

export default userReducer


