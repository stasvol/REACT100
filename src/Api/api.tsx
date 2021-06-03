import  axios from "axios";
import {profileType} from "../redux/prof_reducer";

const addAxios = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
          "API-KEY": "6ca7206a-79cd-4b75-a7a8-fe4c71b43bb1"
           // "27d40a8a-efb4-4ff9-9f59-1a96a8bc548d",
    }
});

export const userApi = {

    getUserPage(currentPage:number, pageSize:number) {
        return addAxios.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    deleteUser(userId:number) {

        return addAxios.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

    postUser(userId:number) {

        return addAxios.post(`follow/${userId}`, {},)
            .then(response => {
                return response.data
            })

    },

    // loginUser() {
    //
    //     return  addAxios.get(`auth/me` ,)
    //
    //         .then(response => { return response.data  })
    //
    // },
}
//    PROFILE

export const profileApi = {

    getProfile(userId:number|null) {

        return addAxios.get(`https://social-network.samuraijs.com/api/1.0/Profile/` + userId)

    },

    getStatus(userId:number) {
        return addAxios.get(`Profile/status/` + userId)
    },

    updateStatus(status:string) {
        return addAxios.put(`Profile/status`, {status: status})
    },

    savePhoto(photoFile:any) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return addAxios.put(`Profile/photo`, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
    },

    editProfile(profile:profileType) {
        return addAxios.put(`Profile`, profile)
    }

}

      // TYPE LOGIN

export enum  resultCodeEnum {
    success,
    error,
}

type loginUserResponseType={
    data: { id: number
            email: string
            login:string
          }
    resultCode: resultCodeEnum
    messages: Array<string>
}

export enum resultCodeCaptchaEnum {
    captchaRequire = 10
}
type loginResponseType={
    data: { userId: number }
    resultCode: resultCodeEnum | resultCodeCaptchaEnum
    messages: Array<string>
}
type logOutType={
    data:{}
    resultCode: resultCodeEnum
    messages: Array<string>
}

export const loginApi = {

    loginUser() {
        return addAxios.get<loginUserResponseType>(`auth/me`)
            .then(response => {
                return response.data
            })
    },

    login(email:string, password:string, rememberMe = false,captcha:null|string =null) {

        return addAxios.post<loginResponseType>(`auth/login`, {email, password, rememberMe,captcha})
            .then(response => {
                return response.data
            })
    },

    logOut() {

        return addAxios.delete<logOutType>(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}


export const securityApi = {

    getCaptchaUrl()
    {
        return addAxios.get(`security/get-captcha-url`)
    }
}
