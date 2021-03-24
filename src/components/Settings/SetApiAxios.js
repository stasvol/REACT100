import React from 'react'
import axios from "axios";


const setApiAxios = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        "API-KEY": "6ca7206a-79cd-4b75-a7a8-fe4c71b43bb1"
    }
});

export const newAuthMeApi =() =>{

    return  setApiAxios.get(`auth/me`).then(response => {
        return response.data
    });
    // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true })
    //     .then(response => {
    //
    //         if (response.data.resultCode===0){
    //             let {id,email,login } = response.data.data
    //             this.props.setAuthReducer(id,email,login)
    //         }
    //
    //     })
}

export const newProfileApi = (userId) => {
   return   setApiAxios.get( `Profile/`+ userId)
        // `https://social-network.samuraijs.com/api/1.0/Profile/`+ userId,
        // {withCredentials:true})
        // .then(response => {
        //     this.props.setProf(response.data)
        //
        // })
}

export const newDelUnfollow = (userId) => {
    return setApiAxios.delete(`follow/${userId}`)

//     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
//         {
//             withCredentials: true,
//             headers: {
//                 "API-KEY": "6ca7206a-79cd-4b75-a7a8-fe4c71b43bb1"
//             }
// })
}

export const newPostFollow = (userId) => {
    return setApiAxios.post(`follow/${userId}`)

    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},
    //     {
    //         withCredentials: true,
    //         headers:{
    //             "API-KEY": "6ca7206a-79cd-4b75-a7a8-fe4c71b43bb1"
    //         }
    //
    //     })
}

export const settingApi = {

     setGetPage (pageSizeSet,currentPageSet) {

       return setApiAxios.get(`users?count=${pageSizeSet}&page=${currentPageSet}`)
       // axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSizeSet}
       //  &page=${this.props.currentPageSet}`,{withCredentials:true}).then(response => {
       //
       //     this.props.setIsLoad(false)
       //     this.props.settingAddUser(response.data.items)
       //     this.props.settingUserTotalCount(response.data.totalCount)
       //
       //
       // })
   },

     setGetUsers(pageSizeSet,currentPageSet){
       return setApiAxios.get(`users?count=${pageSizeSet}&page=${currentPageSet}`)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSizeSet}
        // &page=${currentPageSet}`,{withCredentials:true })
    }

}
// export const newGetStatus = (userId) =>{
//          return setApiAxios.get(`Profile/status/`+ userId)
//        }
//
// export const newPutStatus = (status) => {
//          return setApiAxios.put(`Profile/status`,{status:status})
//         }


export const newApiStatus ={

       newGetStatus (userId) {
         return setApiAxios.get(`Profile/status/${userId}`)
       },

       newPutStatus (status) {
         return setApiAxios.put(`Profile/status`,{status:status})
       },

      showPutPhoto(photoFile)  {

           const formData = new FormData
          formData.append("image", photoFile)

          return setApiAxios.put(`Profile/photo`, formData,{
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          })
      },

      savePutContacts(prof) {
        return setApiAxios.put(`Profile`,prof)
    }

}
// savePhoto(photoFile) {
//     const formData = new FormData();
//     formData.append("image", photoFile);
//
//     return addAxios.put(`Profile/photo`, formData,
//         {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
// },
// getStatus(userId) {
//     return addAxios.get(`Profile/status/` + userId)
// },
//
// updateStatus(status) {
//     return addAxios.put(`Profile/status`, {status: status})
// },