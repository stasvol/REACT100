import {addAxios} from "./api";


//          CAPTCHA

interface securityApiType {
    url: string
}

export const securityApi = {

    getCaptchaUrl()
    {
        return addAxios.get<securityApiType>(`security/get-captcha-url`).then(res => res.data)
    }
}