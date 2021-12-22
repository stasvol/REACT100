import {addAxios, resultCodeEnum, ApiResponseType, resultCodeCaptchaEnum} from "./api";

export type logUserResponseDataType = {
    id: number
    email: string
    login: string
}

export type loginResponseDataType = {
    data: { userId: number }
}

//                   LOGIN

export const loginApi = {

    loginUser() {
        return addAxios.get<ApiResponseType<logUserResponseDataType>>(`auth/me`)
            .then(response => {
                return response.data
            })
    },

    login(email:string, password:string, rememberMe = false,captcha:null|string =null) {
        return addAxios.post<ApiResponseType<loginResponseDataType, resultCodeEnum | resultCodeCaptchaEnum>>(`auth/login`, {email, password, rememberMe,captcha})
            .then(response => {
                return response.data
            })
    },

    logOut() {
        return addAxios.delete<ApiResponseType>(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}