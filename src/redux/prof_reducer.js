import {profileApi, userApi as addAxios} from "../Api/api";

const ADD_POST = 'ADD POST';
const ADD_CHANGE_TEXT = 'ADD CHANGE TEXT';
const SET_USERS_PROFILE = 'SET USERS PROFILE';
const SET_STATUS =  'SET STATUS';
const DELETE_POST = 'DELETE POST'
const SAVE_PHOTO_SUCCESS = 'SAVE PHOTO SUCCESS'

let initialState = {

    PostData: [
        {id: 1, like: '20', message: 'Super'},
        {id: 2, like: '3', message: 'Kliovo'},
        {id: 3, like: '9', message: 'Class'},
    ],

    newText: 'Hello',
    profile: null,
    status: '',
    // photos: null

}

const profReducer = (state = initialState, action) => {

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
                like: '0',
                // message: state.newText                 // (message)-parametr funktion
                message: action.newText                 // (message)-parametr funktion
            };
             return {
                 ...state,
                 PostData:[...state.PostData,newPost],
                 newText: ''
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

export const addPost = (newText) => ({type: ADD_POST, newText});

export const addChangeText = (newPost) => ({type: ADD_CHANGE_TEXT, newText: newPost});

export  const setUsersProfile = (profile)  => ({type: SET_USERS_PROFILE,profile});

export const setStatus = (status)  => ({type:SET_STATUS, status});

export const deletePost = (postId) => ({type:DELETE_POST, postId});

export const savePhotoSuccess = (photos) => ({type:SAVE_PHOTO_SUCCESS, photos});


export const  profileThunkCreator = (userId) => {

    return  async (dispatch) =>  {

        // let userId = this.props.match.params.userId;
        // if (!userId){
        //     userId=2;
        // }
       const response = await profileApi.getProfile(userId)
            // axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/`+userId)

            // .then(response => {

                dispatch(setUsersProfile(response.data));

            // })
    }
}
export const  getStatus = (userId) => {

    return async (dispatch) =>  {

        const response = await profileApi.getStatus(userId)
            // .then(response => {

                dispatch(setStatus(response.data));
        // })
    }
}
export const  updateStatus = (status) => {

    return async (dispatch) =>  {

        const response = await profileApi.updateStatus(status)
            // .then(response => {

            if (response.data.resultCode === 0){

                dispatch(setStatus(status));
            }


        // })
    }
}
export const  savePhoto = (file) => {

    return async (dispatch) =>  {

        const response = await profileApi.savePhoto(file)
        // .then(response => {

        if (response.data.resultCode === 0){

            dispatch(savePhotoSuccess(response.data.data.photos));
        }

    }
}

export const  editProfile = (profile) =>async (dispatch,getState) =>  {

       const userId = getState().auth.userId

    const response = await profileApi.editProfile(profile)
        // .then(response => {

        if (response.data.resultCode === 0){

            dispatch(profileThunkCreator(userId));
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