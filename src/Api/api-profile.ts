import {profileType} from "../redux/prof_reducer";
import {addAxios} from "./api";


//           PROFILE

export const profileApi = {

    getProfile(userId:number|null) {

        return addAxios.get(`https://social-network.samuraijs.com/api/1.0/Profile/` + userId)

    },

    getStatus(userId:number) {
        return addAxios.get(`Profile/status/` + userId)
    },

    updateStatus(status:string) {
        return addAxios.put(`Profile/status`, {status: status})
    },

    savePhoto(photoFile:any) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return addAxios.put(`Profile/photo`, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
    },

    editProfile(profile:profileType) {
        return addAxios.put(`Profile`, profile)
    }

}