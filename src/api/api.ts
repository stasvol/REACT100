import axios from 'axios';
import { UsersType } from '../redux/user_reducer';
import { ApiKey } from '../common/api_key';

export const addAxios = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': ApiKey,
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
export type ApiResponseType<D = Record<string, never>, RC = ResultCodeEnum> = {
  data: D;
  resultCode: RC;
  messages: Array<string>;
};

export enum ChatEnum {
  messagesReceived = 'messages-received',
  statusChanged = 'status - changed',
  pending = 'pending',
  ready = 'ready',
  error = 'error',
  close = 'close',
  message = 'message',
  open = 'open',
}
