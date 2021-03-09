const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETTING_USER = 'SETTING_USER';
const CURRENT_PAGE_SET = 'CURRENT_PAGE_SET';
const SETTING_USER_TOTAL_COUNT = 'SETTING_USER_TOTAL_COUNT';
const IS_LOAD = 'IS_LOAD';
const PROF = 'PROF';

let initialState = {

     users: [
        // {id: 1, photoUrl:"https://i.pinimg.com/originals/53/08/1c/53081c48b54b7be2805a0b2ad5470735.jpg",
        //         followed: true, name: 'Andre', status: "I'm  Cool"},
        // {id: 2, photoUrl:"https://i.pinimg.com/originals/b4/98/f9/b498f91f653cd9ed231209b12fac64c7.jpg",
        //         followed: false, name: 'Tom', status: "I'm  authorised"}
    ],
     countUsersSet: 0,
     pageSizeSet: 5,
     currentPageSet: 1,
     isLoad: false,
     prof: null,

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

           case SETTING_USER:
               return  {
                   ...state,
                   users: action.users
                       // [...state.users, ...action.users]
               }


           case CURRENT_PAGE_SET:
               return {
                   ...state,
                   currentPageSet:  action.currentPageSet
               }

           case SETTING_USER_TOTAL_COUNT:
               return {
                   ...state,
                   countUsersSet: action.countUsersSet
               }

           case IS_LOAD:
               return {
                   ...state,
                   isLoad: action.isLoad
               }
           case PROF:
               return{
                   ...state,
                   prof: action.prof

               }



           default:

               return state

       }

 }

export const followAcCr = (userId) => ({ type:  FOLLOW, userId  });

export const unfollowAcCr = (userId) =>({ type: UNFOLLOW ,userId});

export const settingUserAcCr = (users) => ({type: SETTING_USER, users});

export const currentPageSetAcCr = (currentPageSet) => ({type: CURRENT_PAGE_SET,currentPageSet});

export const settingUserTotalCountAcCr = (countUsersSet) => ({type: SETTING_USER_TOTAL_COUNT,countUsersSet});

export const isLoadAcrCr = (isLoad) => ({type: IS_LOAD, isLoad})

export const setProfAcCr = (prof)  => ({type: PROF, prof})


 export default SetUserReducer
