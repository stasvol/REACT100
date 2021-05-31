import thunk from "redux-thunk";
import {loginApi, securityApi, userApi} from "../Api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USERS_DATA = 'SET AUTH USERS DATA';
const SET_CAPTCHA_URL_SUCCESS = 'SET CAPTCHA URL SUCCESS'

export type initialStateAuthType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    captchaUrl: null | string
}


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null    // if( captchaUrl === null) ? no captcha : url->captchaUrl (captcha no null)

}


const authReducer = (state = initialState, action: any): initialStateAuthType => {

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
                // ...action.payload.captchaUrl
            }


        default:
            return state
    }
}
// data
export type setAuthUserDataActionType = {
    type: typeof SET_AUTH_USERS_DATA,
    payload: setAuthUserDataActionPayloadType
}

    type setAuthUserDataActionPayloadType={
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth:  boolean
}

export const setAuthUserData = (id:number|null, email: string|null, login: string|null , isAuth: boolean): setAuthUserDataActionType => ({
    type:  SET_AUTH_USERS_DATA,
    payload: {id, email, login, isAuth}
});

export type setCaptchaUrlSuccessActionType ={
    type: typeof SET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl:string }
}

export const setCaptchaUrlSuccess = (captchaUrl: string):setCaptchaUrlSuccessActionType => ({type: SET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});


export const authThunkCreator = () => async (dispatch: Function) => {
    const data = await loginApi.loginUser()
    // .then(data => {         // return - промисы - для app_reducer
    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true));
    }

    // });
    // return 'DDDDDDDDDDDDDDDDDDDDDDDDD'
}

export const loginPost = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: Function) => {

    const data = await loginApi.login(email, password, rememberMe, captcha)
    // .then(data => {
    if (data.resultCode === 0) {
        // success, get auth data
        dispatch(authThunkCreator());
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

export const getCaptchaUrl = () => async (dispatch: Function) => {

    const response = await securityApi.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(setCaptchaUrlSuccess(captchaUrl));
}


export const loginOut = () => {

    return async (dispatch: Function) => {
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
