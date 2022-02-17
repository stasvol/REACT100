import { ThunkAction } from 'redux-thunk';
// import { Dispatch } from 'redux';
import { FormAction, stopSubmit } from 'redux-form';

import { RootReducersType } from './reduxStore';
import { ResultCodeCaptchaEnum, ResultCodeEnum } from '../api/api';
import { loginApi } from '../api/api-login';
import { securityApi } from '../api/api-security';

const SET_AUTH_USERS_DATA = 'SET AUTH USERS DATA';
const SET_CAPTCHA_URL_SUCCESS = 'SET CAPTCHA URL SUCCESS';

export type InitialStateAuthType = {
  id: null | number;
  email: null | string;
  login: null | string;
  isAuth: boolean;
  captchaUrl: string | null;
};

type SetAuthUserDataActionType = {
  type: typeof SET_AUTH_USERS_DATA;
  payload: {
    id: null | number;
    email: null | string;
    login: null | string;
    isAuth: boolean;
  };
};

export type SetCaptchaUrlSuccessActionType = {
  type: typeof SET_CAPTCHA_URL_SUCCESS;
  payload: { captchaUrl: string | null };
};

type ActionCreatorAuthType = SetAuthUserDataActionType | SetCaptchaUrlSuccessActionType;
type ThunkType = ThunkAction<Promise<void>, RootReducersType, unknown, ActionCreatorAuthType>;

const initialState: InitialStateAuthType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null, // if( captchaUrl === null) ? no captcha : url->captchaUrl (captcha no null)
};

const authReducer = (
  state: InitialStateAuthType = initialState,
  action: ActionCreatorAuthType,
): InitialStateAuthType => {
  switch (action.type) {
    case SET_AUTH_USERS_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case SET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.payload.captchaUrl,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
): SetAuthUserDataActionType => ({
  type: SET_AUTH_USERS_DATA,
  payload: { id, email, login, isAuth },
});

export const setCaptchaUrlSuccess = (
  captchaUrl: string | null,
): SetCaptchaUrlSuccessActionType => ({
  type: SET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const authThunkCreator = (): ThunkType => async dispatch => {
  const LoginData = await loginApi.loginUser();
  if (LoginData.resultCode === ResultCodeEnum.success) {
    const { id, email, login } = LoginData.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const loginPost =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null,
  ): ThunkAction<
  Promise<void>,
  RootReducersType,
  unknown,
  SetAuthUserDataActionType | SetCaptchaUrlSuccessActionType | FormAction
  > =>
    async dispatch => {
      const data = await loginApi.login(email, password, rememberMe, captcha);
      if (data.resultCode === ResultCodeEnum.success) {
        dispatch(authThunkCreator());
      } else {
        if (data.resultCode === ResultCodeCaptchaEnum.captchaRequire) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
          dispatch(getCaptchaUrl());
        }
        const messages = data.messages ? data.messages : 'Some error';
        dispatch(stopSubmit('login', { _error: messages }));
      }
    };

export const getCaptchaUrl = (): ThunkType => async dispatch => {
  const data = await securityApi.getCaptchaUrl();
  const captchaUrl = data.url;

  dispatch(setCaptchaUrlSuccess(captchaUrl));
};

export const loginOut = (): ThunkType => {
  return async dispatch => {
    const data = await loginApi.logOut();

    if (data.resultCode === ResultCodeEnum.success) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};

export default authReducer;
