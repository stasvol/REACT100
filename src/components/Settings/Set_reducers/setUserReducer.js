import {newApiStatus, newAuthMeApi, newDelUnfollow, newPostFollow, newProfileApi} from "../SetApiAxios";
import {changeDataRedux} from "./newFunctionReduxer";
import {stopSubmit} from "redux-form";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETTING_USER = 'SETTING_USER';
const CURRENT_PAGE_SET = 'CURRENT_PAGE_SET';
const SETTING_USER_TOTAL_COUNT = 'SETTING_USER_TOTAL_COUNT';
const IS_LOAD = 'IS_LOAD';
const PROF = 'PROF';
const SET_DISABLE_BUTTON = 'SET_DISABLE_BUTTON';
const NEW_SET_STATUS = 'NEW_SET_STATUS';
const SHOW_PHOTO_SUCCESS = 'SHOW_PHOTO_SUCCESS';

let initialState = {

     users: [
        // {id: 1, photoUrl:"https://i.pinimg.com/originals/53/08/1c/53081c48b54b7be2805a0b2ad5470735.jpg",
        //         followed: true, name: 'Andre', status: "I'm  Cool"},
        // {id: 2, photoUrl:"https://i.pinimg.com/originals/b4/98/f9/b498f91f653cd9ed231209b12fac64c7.jpg",
        //         followed: false, name: 'Tom', status: "I'm  authorised"}
    ],
     countUsersSet: 0,
     pageSizeSet: 5,
     currentPageSet: 1,
     isLoad: false,
     prof: null,
     setDisableBut: [],
     status:  '',

}


 const SetUserReducer = (state=initialState,action) => {

       switch (action.type) {
           case FOLLOW :

               return {
                   ...state,
                   users: changeDataRedux(state.users,action.userId,'id',{followed: true})
               }
               // return {
               //     ...state,
               //     users: [...state.users].map(u => {
               //         if (u.id === action.userId) {
               //            return {...u, followed: true}
               //         }
               //         return u
               //     })
               // }
              // return  state

           case UNFOLLOW:

               return {
                   ...state,
                   users: changeDataRedux(state.users,action.userId,'id',{followed: false})
               }
               // return {
               //     ...state,
               //     users: [...state.users].map(u => {
               //         if (u.id === action.userId) {
               //             return {...u, followed: false}
               //         }
               //         return  u
               //     })
               // }

           case SETTING_USER:
               return  {
                   ...state,
                   users: action.users
                       // [...state.users, ...action.users]
               }


           case CURRENT_PAGE_SET:
               return {
                   ...state,
                   currentPageSet:  action.currentPageSet
               }

           case SETTING_USER_TOTAL_COUNT:
               return {
                   ...state,
                   countUsersSet: action.countUsersSet
               }

           case IS_LOAD:
               return {
                   ...state,
                   isLoad: action.isLoad
               }
           case PROF:
               return{
                   ...state,
                   prof: action.prof

               }
           case SET_DISABLE_BUTTON:
               return {
                   ...state,
                   setDisableBut:action.isLoad
                   ?  [...state.setDisableBut,action.userId]
                   :  state.setDisableBut.filter(id=> id !== action.userId)
               }

           case NEW_SET_STATUS:

               return {
                   ...state,
                   status: action.status,
                   newPutStatus: action.newPutStatus,
               }

           case SHOW_PHOTO_SUCCESS:

               return {
                   ...state,
                   prof: {...state.prof, photos: action.photos}


               }



           default:

               return state

       }

 }

export const followAcCr = (userId) => ({ type:  FOLLOW, userId  });

export const unfollowAcCr = (userId) =>({ type: UNFOLLOW ,userId});

export const settingUserAcCr = (users) => ({type: SETTING_USER, users});

export const currentPageSetAcCr = (currentPageSet) => ({type: CURRENT_PAGE_SET,currentPageSet});

export const settingUserTotalCountAcCr = (countUsersSet) => ({type: SETTING_USER_TOTAL_COUNT,countUsersSet});

export const isLoadAcrCr = (isLoad) => ({type: IS_LOAD, isLoad});

export const setProfAcCr = (prof)  => ({type: PROF, prof});

export const setLoadDisableButAcCr = (isLoad,userId) => ({type:SET_DISABLE_BUTTON,isLoad,userId});

export const newSetStatus = (status,newPutStatus) => ({type: NEW_SET_STATUS,status,newPutStatus});

export const  showPhotoSuccess = (photos) => ({type: SHOW_PHOTO_SUCCESS, photos})



export const setProfThunk = (userId) => (dispatch)=>{
    newProfileApi(userId).then(response => {
        dispatch(setProfAcCr(response.data))
    })
}

const setFollowUnfollow = async (dispatch,userId,methodApi,actionCreator) => {
    dispatch(setLoadDisableButAcCr(true,userId))

    const response = await methodApi(userId)
    // .then(response => {
    if (response.data.resultCode===0){
        dispatch(actionCreator(userId))
    }
    dispatch(setLoadDisableButAcCr(false,userId))
    // })

}

export const setFollowThunk = (userId) => async (dispatch) => {
    // const methodApi = newPostFollow
    // const actionCreator = followAcCr
    await setFollowUnfollow(dispatch,userId,newPostFollow,followAcCr)
     // dispatch(setLoadDisableButAcCr(true,userId))
     //
     //  const response = await methodApi(userId)
     //    // .then(response => {
     //       if (response.data.resultCode===0){
     //            dispatch(actionCreator(userId))
     //        }
     //        dispatch(setLoadDisableButAcCr(false,userId))
     //    // })
}
export const setUnfollowThunk =(userId) => async (dispatch)=> {
    // const methodApi = newDelUnfollow
    // const actionCreator = unfollowAcCr
    await setFollowUnfollow(dispatch,userId,newDelUnfollow,unfollowAcCr)
     // dispatch(setLoadDisableButAcCr(true,userId))
     //
     //     const response = await methodApi(userId)
     //    // .then(response => {
     //     if (response.data.resultCode===0){
     //            dispatch(actionCreator(userId))
     //        }
     //        dispatch(setLoadDisableButAcCr(false,userId))
     //    // })
}

export const newGetStatusThunk = (userId) => (dispatch) => {

    newApiStatus.newGetStatus (userId).then((response)=> {

            dispatch(newSetStatus(response.data && response.data.data))

    })
}

 export const newPutStatusThunk = (status,newPutStatus) => (dispatch)=> {

     newApiStatus.newPutStatus (status).then(response => {
          if (response.data.resultCode === 0){

              dispatch(newSetStatus(status,newPutStatus))
          }
     })

 }

export const showPhoto = (file) => async (dispatch)=> {

     const response =  await
      newApiStatus.showPutPhoto (file)
          // .then(response => {
        if (response.data.resultCode === 0){
            dispatch(showPhotoSuccess(response.data.photos))
        }
    // })

}
export const saveContacts = (prof) => async (dispatch,getState)=> {

    const userId = getState().setAuth.id

    const response =  await
        newApiStatus.savePutContacts(prof)
    // .then(response => {
    if (response.data.resultCode === 0){
        dispatch(setProfThunk(userId))
    } else {
       dispatch(stopSubmit('contactForm',{_error: response.data.messages}))
        // return Promise.reject(response.data.messages)
    }
    // })
}


export default SetUserReducer
