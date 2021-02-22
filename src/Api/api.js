import * as axios from "axios";

const addAxios = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "27d40a8a-efb4-4ff9-9f59-1a96a8bc548d",
    }
});

export const userApi = {

    getUserPage(currentPage, pageSize) {
        return addAxios.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    deleteUser(userId) {

        return addAxios.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

    postUser(userId) {

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

    getProfile(userId) {

        return addAxios.get(`https://social-network.samuraijs.com/api/1.0/Profile/` + userId)

    },

    getStatus(userId) {
        return addAxios.get(`Profile/status/` + userId)
    },

    updateStatus(status) {
        return addAxios.put(`Profile/status`, {status: status})
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return addAxios.put(`Profile/photo`, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
    },

    editProfile(profile) {
        return addAxios.put(`Profile`, profile)
    }

}


export const loginApi = {

    loginUser() {

        return addAxios.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },

    login(email, password, rememberMe = false,captcha=null) {

        return addAxios.post(`auth/login`, {email, password, rememberMe,captcha})
            .then(response => {
                return response.data
            })
    },
    logOut() {

        return addAxios.delete(`auth/login`)
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