import { addAxios, ResultCodeEnum, ApiResponseType, ResultCodeCaptchaEnum } from './api';

export type LogUserResponseDataType = {
  id: number;
  email: string;
  login: string;
};

export type LoginResponseDataType = {
  data: { userId: number | string | undefined };
};

export const loginApi = {
  loginUser(): Promise<ApiResponseType<LogUserResponseDataType>> {
    return addAxios.get<ApiResponseType<LogUserResponseDataType>>('auth/me').then(response => {
      return response.data;
    });
  },

  login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: null | string = null,
  ): Promise<ApiResponseType<LoginResponseDataType, ResultCodeEnum | ResultCodeCaptchaEnum>> {
    return addAxios
      .post<ApiResponseType<LoginResponseDataType, ResultCodeEnum | ResultCodeCaptchaEnum>>(
      'auth/login',
      { email, password, rememberMe, captcha },
    )
      .then(response => {
        return response.data;
      });
  },

  logOut(): Promise<ApiResponseType> {
    return addAxios.delete<ApiResponseType>('auth/login').then(response => {
      return response.data;
    });
  },
};
