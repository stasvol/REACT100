import { addAxios } from './api';

//          CAPTCHA

interface SecurityApiType {
  url: string;
}

export const securityApi = {
  getCaptchaUrl(): Promise<SecurityApiType> {
    return addAxios.get<SecurityApiType>('security/get-captcha-url').then(res => res.data);
  },
};
