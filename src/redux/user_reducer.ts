import {AnyAction, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {userApi} from "../api/api-users";
import {updateObjectInArray} from "../utility/object_helper";
import { PhotosType } from "./prof_reducer";
import {rootReducersType} from "./reduxStore";
import {ApiResponseType} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET USERS';
const SET_CURRENT_PAGE = 'SET CURRENT PAGE';
const SET_TOTAL_COUNT = 'SET TOTAL COUNT';
const TOGGLE_PRELOADER = 'TOGGLE PRELOADER';
const DISABLE_BUTTON_FOL = 'DISABLE BUTTON FOL';
const DELETE_USER = 'DELETE USER'
const SET_FILTER = 'SET FILTER'

export type usersType={
    id: number
    name: string
    status: string
    photos: PhotosType
    followed:boolean
}

export type disableButtonType={
    disableButton?:boolean|number
}

type actionCreatorUsersType = followActionType | unfollowActionType | usersActionType | currentPageActionType |
    totalCountActionType | togglePreloaderActionType | disableButtonFolActionType | deleteUsersActionType | setFilterType

type followActionType={
    type:typeof FOLLOW,
    userId:number
}

export let initialState = {
    users: [] as Array<usersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true,
    pageNumberSizes: 10,
    disableButton: [] as Array<disableButtonType> ,// array userId
    filter:{
        term: "",
        friend: null as null|boolean
    }
}

export type initialStateUserType= typeof initialState
export type filterType = typeof initialState.filter

type unfollowActionType={
    type:typeof UNFOLLOW,
    userId:number
}

type usersActionType={
    type:typeof SET_USERS,
    users:usersType
}

type currentPageActionType={
    type:typeof SET_CURRENT_PAGE,
    currentPage:number
}

type setFilterType={
    type:typeof SET_FILTER,
    payload:{
        term:string,
        friend:null|boolean
    }
}

type totalCountActionType={
    type:typeof SET_TOTAL_COUNT,
    totalCount:number
}

type togglePreloaderActionType={
    type:typeof TOGGLE_PRELOADER,
    isLoading:boolean
}

type disableButtonFolActionType={
    type:typeof DISABLE_BUTTON_FOL,
    disableButton:boolean|number,
    userId:number
}

type deleteUsersActionType={
    type:typeof DELETE_USER,
    userId:number
}

type dispatchType = Dispatch<actionCreatorUsersType>
type getStateType = () => rootReducersType
type thunkType = ThunkAction<Promise<void>, rootReducersType, unknown, actionCreatorUsersType>

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

        case  SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }


        default:
            return state;
    }
}

export const follow = (userId:number):followActionType => ({type: FOLLOW, userId});

export const unfollow = (userId:number):unfollowActionType => ({type: UNFOLLOW, userId});

export const setUsers = (users:usersType):usersActionType => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage:number):currentPageActionType => ({type: SET_CURRENT_PAGE, currentPage: currentPage});

export const setFilter = (filter:filterType):setFilterType => ({type: SET_FILTER, payload: filter });

export const setTotalUsersCount = (totalCount:number):totalCountActionType => ({type: SET_TOTAL_COUNT, totalCount});

export const togglePreloader = (isLoading:boolean):togglePreloaderActionType => ({type: TOGGLE_PRELOADER, isLoading});

export const disableButtonFol = (disableButton:boolean|number, userId:number):disableButtonFolActionType => ({type: DISABLE_BUTTON_FOL, disableButton, userId});

export const deleteUsers = (userId:number):deleteUsersActionType => ({type: DELETE_USER, userId});

export const getUsersThunkCreator = (currentPage:number, pageSize:number,filter:filterType):thunkType => {

    return async (dispatch) => {

        dispatch(togglePreloader(true));
        dispatch(setCurrentPage(currentPage))
        dispatch(setFilter(filter))
        const data = await userApi.getUserPage(currentPage, pageSize,filter.term,filter.friend)

        dispatch(togglePreloader(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async(dispatch:dispatchType,userId:number,
                                    ApiMethod:(userId:number)=>Promise<ApiResponseType>,
                                    ActionCreator:(userId:number)=> followActionType | unfollowActionType) => {

       dispatch(disableButtonFol(true, userId))
       const data = await ApiMethod(userId)
       if (data.resultCode === 0) {
           dispatch(ActionCreator(userId))
       }
       dispatch(disableButtonFol(false, userId))

}

export const FollowThunkCreator = (userId:number):thunkType => {

    return async (dispatch) => {
       await followUnfollowFlow(dispatch, userId, userApi.postUser.bind(userId), follow)
    }
}

export const unFollowThunkCreator = (userId:number):thunkType => {

    return async (dispatch) => {
        const ApiMethod = userApi.deleteUser.bind(userId)
        const ActionCreator = unfollow
        await followUnfollowFlow(dispatch, userId, ApiMethod, ActionCreator)
    }
}

export default userReducer


