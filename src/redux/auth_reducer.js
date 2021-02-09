import thunk from "redux-thunk";
import {loginApi, loginUser, userApi} from "../Api/api";

const SET_AUTH_USERS_DATA = 'SET AUTH USERS DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false

}


const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_USERS_DATA:

            return {
                ...state,
                // id: action.id,
                // email: action.email,
                // login: action.login
                // ...action.data,
                ...action.payload,
                // isAuth: true
            }


        default:
            return state
    }
}
                                                                                       // data
export const setAuthUserData = (id, email, login,isAuth) => ({type:SET_AUTH_USERS_DATA, payload:{ id, email, login,isAuth }});


export  const authThunkCreator = (id, email, login,isAuth) => {

    return   (dispatch ) => {

        loginApi.loginUser().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login,true));
            }
        });
    }
}

export  const loginPost = (email, password, rememberMe) => {

    return   (dispatch ) => {
        loginApi.login(email, password, rememberMe).then(data => {

            if (data.resultCode === 0) {
                dispatch(authThunkCreator(email, password, rememberMe));
            }
        });
    }
}
export  const loginOut = (email, password, rememberMe,isAuth) => {

    return   (dispatch ) => {
        loginApi.logOut().then(data => {

            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null,false));
            }
        });
    }
}



export default authReducer


// if (action.type === ADD_MESSAGE) {
//     let textMessage = {
//         id: 7,
//         message: state.newMessageText,          // (newMessage)-parametr funktion
//     };
//     state.MessageUserData.push(textMessage);
//     state.newMessageText = '';                  // addNewMessage('')
//
//
// } else if (action.type === ADD_CHANGE_NEW_MESSAGE) {
//     state.newMessageText = action.newMessageText;
// }
