const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETTINGUSER = 'SETTINGUSER';

let initialState = {
     users: [
        // {id: 1, photoUrl:"https://i.pinimg.com/originals/53/08/1c/53081c48b54b7be2805a0b2ad5470735.jpg",
        //         followed: true, name: 'Andre', status: "I'm  Cool"},
        // {id: 2, photoUrl:"https://i.pinimg.com/originals/b4/98/f9/b498f91f653cd9ed231209b12fac64c7.jpg",
        //         followed: false, name: 'Tom', status: "I'm  authorised"}
    ],

}


 const SetUserReducer = (state=initialState,action) => {

       switch (action.type) {
           case FOLLOW :

               return {
                   ...state,
                   users: [...state.users].map(u => {
                       if (u.id === action.userId) {
                          return {...u, followed: true}
                       }
                       return u
                   })
               }


               // return  state

           case UNFOLLOW:
               return {
                   ...state,
                   users: [...state.users].map(u => {
                       if (u.id === action.userId) {
                           return {...u, followed: false}
                       }
                       return  u
                   })
               }

           case SETTINGUSER:
               return  {
                   ...state,
                   users: [...state.users, ...action.users]
               }


           default:

               return state

       }

 }

export const followAcCr = (userId) => ({ type:  FOLLOW, userId  });

export const unfollowAcCr = (userId) =>({ type: UNFOLLOW ,userId});

export const settingUserAcCr = (users) => ({type: SETTINGUSER, users});


 export default SetUserReducer
