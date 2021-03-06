import {profileApi} from "../Api/api-profile";
import {FormAction, stopSubmit} from "redux-form";
import {Dispatch} from "redux";
import {rootReducersType} from "./reduxStore";
import {ThunkAction} from "redux-thunk";

const ADD_POST = 'ADD POST';
const ADD_CHANGE_TEXT = 'ADD CHANGE TEXT';
const SET_USERS_PROFILE = 'SET USERS PROFILE';
const SET_STATUS =  'SET STATUS';
const DELETE_POST = 'DELETE POST'
const SAVE_PHOTO_SUCCESS = 'SAVE PHOTO SUCCESS'


export type PostDataType ={
    id: number,
    like: number,
    message: string,
}
export type profileType ={
    userId?: number|null
    lookingForAJob?: boolean
    lookingForAJobDescription?: string|null
    fullName?: string|null
    contacts?:contactsType
    photos?:PhotosType
    aboutMe?:string

}
export type  contactsType= {
    github: string|null
    vk: string|null
    facebook: string|null
    instagram: string|null
    twitter: string|null
    website: string|null
    youtube: string|null
    mainLink: string|null
}
export type PhotosType={
        small: string | null
        large: string | null
}
export type responsePhotosType={
    photos: PhotosType
}
export type initialStateProfType = typeof initialState

let initialState = {

    PostData: [
        {id: 1, like: 20, message: 'Super'},
        {id: 2, like: 3, message: 'Kliovo'},
        {id: 3, like: 9, message: 'Class'},
    ] as Array<PostDataType> ,

    newText: 'Hello',
    profile: null as profileType|null,  //   {} as profileType,
    status: '',


}

const profReducer = (state = initialState, action:actionCreatorProfType):initialStateProfType => {

    switch (action.type) {

        case ADD_POST:
            // let newPost = {
            //     id: 4,
            //     like: '0',
            //     message: state.newText                 // (message)-parametr funktion
            // };
            // let copyState = {...state};
            // copyState.PostData = [...state.PostData];
            // copyState.PostData.push(newPost);
            // copyState.newText = '';
            //
            // return copyState;
            let newPost = {
                id: 4,
                like: 0,
                // message: state.newText                 // (message)-parametr funktion
                message: action.newText                 // (message)-parametr funktion
            };
             return {
                 ...state,
                 PostData:[...state.PostData,newPost],
                 // newText: ''
             }



             case ADD_CHANGE_TEXT:

            // let copyState = {...state}
            // copyState.newText = action.newText;
            //
            // return copyState;
            return{
                ...state,
                newText: action.newText
            }

        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile

            }

        case SET_STATUS :
            return {
                ...state,
                status: action.status
            }

        case DELETE_POST:

            return {
                ...state,
                PostData: state.PostData.filter(({ id }) => id !== action.postId)
            }

        case SAVE_PHOTO_SUCCESS:

            return {
                ...state,
                profile: {...state.profile,   photos: action.photos }

            }

        default:
            return state;
    }
}
type actionCreatorProfType = addPostActionType | addChangeActionType | setUsersProfileActionType
    | setStatusActionType | deletePostActionType | savePhotoSuccessActionType

type addPostActionType={
    type: typeof ADD_POST,
    newText:string
}
export const addPost = (newText:string):addPostActionType => ({type: ADD_POST, newText});

type addChangeActionType={
    type:typeof ADD_CHANGE_TEXT,
    newPost:string,
    newText:string
}
export const addChangeText = (newPost:string,newText:string):addChangeActionType => ({type: ADD_CHANGE_TEXT,  newPost,newText});

type setUsersProfileActionType={
    type:typeof SET_USERS_PROFILE,
    profile:profileType
}
export  const setUsersProfile = (profile:profileType):setUsersProfileActionType  => ({type: SET_USERS_PROFILE,profile});

type setStatusActionType={
    type: typeof SET_STATUS,
    status:string
}
export const setStatus = (status:string):setStatusActionType  => ({type:SET_STATUS, status});

type deletePostActionType={
    type:typeof DELETE_POST,
    postId:number
}
export const deletePost = (postId:number):deletePostActionType => ({type:DELETE_POST, postId});

type savePhotoSuccessActionType={
   type: typeof  SAVE_PHOTO_SUCCESS,
    photos:PhotosType
}
export const savePhotoSuccess = (photos:PhotosType):savePhotoSuccessActionType => ({type:SAVE_PHOTO_SUCCESS, photos});


type dispatchType = Dispatch<actionCreatorProfType>
type getStateType = () => rootReducersType
type thunkType = ThunkAction<Promise<void>, rootReducersType, unknown, actionCreatorProfType>

export const  profileThunkCreator = (userId: number | null) :ThunkAction<Promise<void>, rootReducersType, unknown, actionCreatorProfType>  => {

    return  async (dispatch, getState)=>  {
        console.log(getState)
        // let userId = this.props.match.params.userId;
        // if (!userId){
        //     userId=2;
        // }
       const data = await profileApi.getProfile(userId)
            // axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/`+userId)

            // .then(response => {

                dispatch(setUsersProfile(data));

            // })
    }
}
export const  getStatus = (userId:number) => {

    return async (dispatch:dispatchType) =>  {

        const data = await profileApi.getStatus(userId)
            // .then(response => {

                dispatch(setStatus(data));
        // })
    }
}

export const  updateStatus = (status:string) => {

    return async (dispatch:dispatchType) =>  {

        const data = await profileApi.updateStatus(status)
            // .then(response => {
         try {
             if (data.resultCode === 0){

                 dispatch(setStatus(status));
             }

             if (data.resultCode === 1) {

                throw new Error('Something went wrong.');





             }
         } catch (error){

                // return  <div className={classes.modul}>
                //      <span>404 NOT FOUND</span> <br/>
                //      <span>'Something went wrong'</span>
                //  </div>

            alert(`${error.name} : ${error.message} `)
        }



        // })
    }
}
export const  savePhoto = (file:File):thunkType => {

    return async (dispatch:dispatchType) =>  {

        const data = await profileApi.savePhoto(file)
        // .then(response => {

        if (data.resultCode === 0){

            dispatch(savePhotoSuccess(data.data.photos));
        }

    }
}

export const  editProfile = (profile:profileType)

    :ThunkAction<Promise<void>, rootReducersType, unknown, addPostActionType | addChangeActionType | setUsersProfileActionType
    | setStatusActionType | deletePostActionType | savePhotoSuccessActionType | FormAction> =>
    async (dispatch,getState) =>  {

       const userId = getState().auth.id

    const response = await profileApi.editProfile(profile)
        // .then(response => {

        if (response.data.resultCode === 0){

            dispatch(profileThunkCreator(userId));
        }else {
            // actionCreatorProfType -> FormAction
            dispatch(stopSubmit('editProfile', {_error: response.data.messages}));
            return Promise.reject(response.data.messages)
        }


}




export default profReducer




// if (action.type=== ADD_POST){
//     let newPost = {
//         id: 4,
//         like: '0',
//         message: state.newText                 // (message)-parametr funktion
//     };
//     state.PostData.push(newPost);
//     state.newText = '';
// } else if (action.type === ADD_CHANGE_TEXT ) {
//     state.newText = action.newText
// }