import axios from "axios";
import { usersType } from "../redux/user_reducer";

export const addAxios = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6ca7206a-79cd-4b75-a7a8-fe4c71b43bb1"
        // "27d40a8a-efb4-4ff9-9f59-1a96a8bc548d",
    }
});

//      TYPE  ENUM
export enum resultCodeEnum {
    success = 0,
    error = 1,
}

export enum resultCodeCaptchaEnum {
    captchaRequire = 10
}

//    TYPE USERS
export type getUsersItemsType = {
    items: usersType,
    totalCount: number,
    error: string | null
}

//    TYPE LOGIN
export type ApiResponseType<D = {}, RC = resultCodeEnum> = {
    data: D,
    resultCode: RC
    messages: Array<string>
}






