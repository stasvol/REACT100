import {addAxios} from "./api";


//          CAPTCHA

export const securityApi = {

    getCaptchaUrl()
    {
        return addAxios.get(`security/get-captcha-url`)
    }
}