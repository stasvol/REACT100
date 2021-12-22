import {addAxios, getUsersItemsType,ApiResponseType} from "./api";

//               USERS

export const userApi = {

    getUserPage(currentPage:number, pageSize:number, term:string = "", friend:null|boolean = null ) {
        return addAxios.get<getUsersItemsType>(`users?page=${currentPage}&count=${pageSize}
        &term=${term}` + (friend===null ? '' : `&friend=${friend}`))
                .then(response => {
                return response.data
            })
    },

    deleteUser(userId:number) {
        return addAxios.delete<ApiResponseType>(`follow/${userId}`)
            .then(response => {
                return response.data
            })    //as Promise <ResponseType>

    },

    postUser(userId:number) {
        return addAxios.post<ApiResponseType>(`follow/${userId}`, {},)
            .then(response => {
                return response.data
            })

    },
}
