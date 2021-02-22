import thunk from "redux-thunk";
import {loginApi, loginUser, securityApi, userApi} from "../Api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USERS_DATA = 'SET AUTH USERS DATA';
const SET_CAPTCHA_URL_SUCCESS = 'SET CAPTCHA URL SUCCESS'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null    // if( captchaUrl === null) ? no captcha : url->captchaUrl (captcha no null)

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

        case SET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.payload.captchaUrl
            }


        default:
            return state
    }
}
// data
export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_AUTH_USERS_DATA,
    payload: {id, email, login, isAuth}});
export const setCaptchaUrlSuccess =(captchaUrl) =>({type:SET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});


export const authThunkCreator = (id, email, login, isAuth) => async (dispatch) => {
    const data = await loginApi.loginUser()
        // .then(data => {         // return - промисы - для app_reducer
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login, true));
        }

    // });
    // return 'DDDDDDDDDDDDDDDDDDDDDDDDD'
}

export const loginPost = (email, password, rememberMe,captcha) => async (dispatch) => {

    const data = await loginApi.login(email, password, rememberMe,captcha)
        // .then(data => {
            if (data.resultCode === 0) {
          // success, get auth data
            dispatch(authThunkCreator(email, password, rememberMe));
        } else {
              if (data.resultCode === 10) {
                 dispatch(getCaptchaUrl())
              }
            // let action = stopSubmit('login', {email: 'Email is wrong'});
            let messages = data.messages ? data.messages : 'Some Error';
            // let action = stopSubmit('login', {_error: messages});
            // dispatch(action);
            dispatch(stopSubmit('login', {_error: messages}));
        }
    // });
}

export const getCaptchaUrl = () => async (dispatch) => {

    const response = await securityApi.getCaptchaUrl()
     const captchaUrl = response.data.url

    dispatch(setCaptchaUrlSuccess(captchaUrl));
    }




export const loginOut = (email, password, rememberMe, isAuth) => {

    return  async (dispatch) => {
        const data = await loginApi.logOut()
            // .then(data => {

            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        // });
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
