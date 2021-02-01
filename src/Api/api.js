import * as axios from "axios";

const addAxios = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "27d40a8a-efb4-4ff9-9f59-1a96a8bc548d"
    }

});

export  const userApi = {

    getUserPage(currentPage,pageSize) {
        return addAxios.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    deleteUser(userId) {

     return  addAxios.delete(`follow/${userId}`)
         .then(response => {
             return response.data
         })
    },

    postUser(userId) {

        return addAxios.post(`follow/${userId}`, {}, )
            .then(response => {
            return response.data
            })

    },

    loginUser() {

        return  addAxios.get(`auth/me` ,)

            .then(response => { return response.data  })

    }

}

