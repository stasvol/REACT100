import {addAxios, resultCodeEnum,ResponseType} from "./api";



// export type logUserResponseType={
//     data: {
//         id: number
//         email: string
//         login:string
//     }
//     resultCode: resultCodeEnum
//     messages: Array<string>
// }

export type logUserResponseDataType = {
    id: number
    email: string
    login: string
}
// export type loginResponseType = {
//     data: { userId: number }
//     resultCode: resultCodeEnum | resultCodeCaptchaEnum
//     messages: Array<string>
// }
export type loginResponseDataType = {
    data: { userId: number }
}

//                   LOGIN

export const loginApi = {

    loginUser() {
        return addAxios.get<ResponseType<logUserResponseDataType>>(`auth/me`)
            .then(response => {
                return response.data
            })
    },

    login(email:string, password:string, rememberMe = false,captcha:null|string =null) {

        return addAxios.post<ResponseType<loginResponseDataType>>(`auth/login`, {email, password, rememberMe,captcha})
            .then(response => {
                return response.data
            })
    },

    logOut() {

        return addAxios.delete<ResponseType>(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}