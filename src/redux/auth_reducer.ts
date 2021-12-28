import {ThunkAction} from "redux-thunk";
import {Dispatch} from "redux";
import {FormAction, stopSubmit} from "redux-form";

import {rootReducersType} from "./reduxStore";
import {resultCodeCaptchaEnum, resultCodeEnum} from "../api/api";
import {loginApi} from "../api/api-login";
import {securityApi} from "../api/api-security";

const SET_AUTH_USERS_DATA = 'SET AUTH USERS DATA';
const SET_CAPTCHA_URL_SUCCESS = 'SET CAPTCHA URL SUCCESS'

export type initialStateAuthType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    captchaUrl: string | null
}

type setAuthUserDataActionType = {
    type: typeof SET_AUTH_USERS_DATA,
    payload: {
        id: null | number,
        email: null | string,
        login: null | string,
        isAuth: boolean
    }
}

export type setCaptchaUrlSuccessActionType = {
    type: typeof SET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl: string | null }
}

type actionCreatorAuthType = setAuthUserDataActionType | setCaptchaUrlSuccessActionType
type thunkType = ThunkAction<Promise<void>, rootReducersType, unknown, actionCreatorAuthType>

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
                ...action.payload,
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

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean):
    setAuthUserDataActionType => ({type: SET_AUTH_USERS_DATA, payload: {id, email, login, isAuth}});

export const setCaptchaUrlSuccess = (captchaUrl: string | null): setCaptchaUrlSuccessActionType => ({
    type: SET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});

export const authThunkCreator = (): thunkType => async (dispatch) => {
    const LoginData = await loginApi.loginUser()
    if (LoginData.resultCode === resultCodeEnum.success) {
        let {id, email, login} = LoginData.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const loginPost = (email: string, password: string, rememberMe: boolean, captcha: string | null)
    : ThunkAction<Promise<void>, rootReducersType, unknown, setAuthUserDataActionType | setCaptchaUrlSuccessActionType | FormAction> =>
    async (dispatch) => {

        const data = await loginApi.login(email, password, rememberMe, captcha)
        if (data.resultCode === resultCodeEnum.success) {
            dispatch(authThunkCreator());
        } else {
            if (data.resultCode === resultCodeCaptchaEnum.captchaRequire) {
                dispatch(getCaptchaUrl())
            }
            let messages = data.messages ? data.messages : 'Some error';
            dispatch(stopSubmit('login', {_error: messages}));
        }

    }

export const getCaptchaUrl = (): thunkType => async (dispatch) => {

    const data = await securityApi.getCaptchaUrl()
    const captchaUrl = data.url

    dispatch(setCaptchaUrlSuccess(captchaUrl));
}

export const loginOut = (): thunkType => {

    return async (dispatch) => {
        const data = await loginApi.logOut()

        if (data.resultCode === resultCodeEnum.success) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer

