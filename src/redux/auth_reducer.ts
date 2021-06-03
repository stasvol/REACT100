import {ThunkAction} from "redux-thunk";
import {loginApi, resultCodeCaptchaEnum, resultCodeEnum, securityApi} from "../Api/api";
import {FormAction, stopSubmit} from "redux-form";
import {rootReducersType} from "./reduxStore";
import {Dispatch} from "redux";

const SET_AUTH_USERS_DATA = 'SET AUTH USERS DATA';
const SET_CAPTCHA_URL_SUCCESS = 'SET CAPTCHA URL SUCCESS'

export type initialStateAuthType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    captchaUrl: string|null
}


let initialState: initialStateAuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null    // if( captchaUrl === null) ? no captcha : url->captchaUrl (captcha no null)

}


const authReducer = (state: initialStateAuthType = initialState, action: actionCreatorAuthType): initialStateAuthType => {

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

  type setAuthUserDataActionType={
       type: typeof SET_AUTH_USERS_DATA,
      payload: { id: null | number,
                 email: null | string,
                 login: null | string,
                 isAuth:  boolean }

}
export const setAuthUserData = (id:number|null, email: string|null, login: string|null , isAuth: boolean):
    setAuthUserDataActionType => ({type:  SET_AUTH_USERS_DATA, payload: {id, email, login, isAuth} });


export type setCaptchaUrlSuccessActionType ={
    type: typeof SET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl:string|null }
}
export const setCaptchaUrlSuccess = (captchaUrl: string|null):setCaptchaUrlSuccessActionType => ({type: SET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

type actionCreatorAuthType = setAuthUserDataActionType | setCaptchaUrlSuccessActionType
type dispatchType = Dispatch<actionCreatorAuthType>
type getStateType = () => rootReducersType
type thunkType = ThunkAction<Promise<void>, rootReducersType, unknown, actionCreatorAuthType>

export const authThunkCreator = ():thunkType => async (dispatch) => {
    const LoginData = await loginApi.loginUser()
    // .then(data => {         // return - промисы - для app_reducer
    if (LoginData.resultCode === resultCodeEnum.success ) {
        let {id, email, login} = LoginData.data
        dispatch(setAuthUserData(id, email, login, true));
    }

    // });
    // return 'DDDDDDDDDDDDDDDDDDDDDDDDD'
}

export const loginPost = (email: string, password: string, rememberMe: boolean, captcha: string|null)
    :ThunkAction<Promise<void>, rootReducersType, unknown, setAuthUserDataActionType | setCaptchaUrlSuccessActionType | FormAction> =>
    async (dispatch) => {

    const data = await loginApi.login(email, password, rememberMe, captcha)
    // .then(data => {
    if (data.resultCode === resultCodeEnum.success) {
        // success, get auth data
        dispatch(authThunkCreator());
    } else {
        if (data.resultCode === resultCodeCaptchaEnum.captchaRequire) {
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

export const getCaptchaUrl = ():thunkType => async (dispatch ) => {

    const response = await securityApi.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(setCaptchaUrlSuccess(captchaUrl));
}


export const loginOut = ():thunkType => {

    return async (dispatch) => {
        const data = await loginApi.logOut()
        // .then(data => {

        if (data.resultCode === resultCodeEnum.success) {
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
