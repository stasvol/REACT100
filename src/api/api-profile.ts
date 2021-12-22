import { profileType, responsePhotosType} from "../redux/prof_reducer";
import {addAxios,ApiResponseType} from "./api";


//           PROFILE

export const profileApi = {

    getProfile(userId:number|null) {

        return addAxios.get<profileType>(`https://social-network.samuraijs.com/api/1.0/Profile/` + userId).then(res => res.data)

    },

    getStatus(userId:number) {
        return addAxios.get<string>(`Profile/status/` + userId).then(res => res.data)
    },

    updateStatus(status:string) {
        return addAxios.put<ApiResponseType>(`Profile/status`, {status: status}).then(res => res.data)
    },

    savePhoto(photoFile:any) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return addAxios.put<ApiResponseType<responsePhotosType>>(`Profile/photo`, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => res.data)
    },

    editProfile(profile:profileType) {
        return addAxios.put(`Profile`, profile).then(res => res.data)
    }

}