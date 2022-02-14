import axios from 'axios';
import { UsersType } from '../redux/user_reducer';

export const addAxios = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '6ca7206a-79cd-4b75-a7a8-fe4c71b43bb1',
    // "27d40a8a-efb4-4ff9-9f59-1a96a8bc548d",
  },
});

//      TYPE  ENUM
export enum ResultCodeEnum {
  success = 0,
  error = 1,
}

export enum ResultCodeCaptchaEnum {
  captchaRequire = 10,
}

//    TYPE USERS
export type GetUsersItemsType = {
  items: UsersType;
  totalCount: number;
  error: string | null;
};

//    TYPE LOGIN
// eslint-disable-next-line @typescript-eslint/ban-types
export type ApiResponseType<D = {}, RC = ResultCodeEnum> = {
  data: D;
  resultCode: RC;
  messages: Array<string>;
};
