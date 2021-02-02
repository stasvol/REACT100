const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET USERS'
const SET_CURRENT_PAGE = 'SET CURRENT PAGE'
const SET_TOTAL_COUNT = 'SET TOTAL COUNT'
const TOGGLE_PRELOADER = 'TOGGLE PRELOADER'
const DISABLE_BUTTON_FOL = 'DISABLE BUTTON FOL'

let initialState = {
    // [  {
            //     id: 1, photoUrl: 'https://download-cs.net/steam/avatars/3424.jpg',
            //     followed: true, fullName: 'Anna', status: 'I am a boss', location: {country: 'Ukraine', city: 'Kiev'}
            // },
            // {
            //     id: 2, photoUrl: 'https://cs16planet.ru/steam-avatars/images/avatar2960.jpg',
            //     followed: false, fullName: 'Ivan', status: 'I am a boss', location: {country: 'Ukraine', city: 'Lvov'}
            // },
            // {
            //     id: 3, photoUrl: 'https://download-cs.net/steam/avatars/3426.jpg',
            //     followed: false, fullName: 'Vovan', status: 'I am a boss', location: {country: 'Ukraine', city: 'Odessa'}
            // },
            // {
            //     id: 4,
            //     photoUrl: 'https://2ch.hk/sex/thumb/6329995/15866325175470s.jpg',
            //     followed: true, fullName: 'Sweta ',status: 'I am a boss',location: {country: 'Ukraine', city: 'Rivne'}
            // }  ],
       users:[],
       pageSize: 5,
       totalUsersCount: 0,
       currentPage: 1,
       isLoading: true,
       disableButton: []
    }


const userReducer = (state=initialState, action) => {

    switch (action.type) {

        case  FOLLOW:

           return{
                   ...state,
                  // users: [...state.users]
                  users: state.users.map(user =>{
                      if (user.id === action.userId){
                          return {...user, followed:true};
                      }
                         return user
                  })
           }

        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map(user=> {
                    if (user.id === action.userId) {
                        return {...user,followed:false};
                    }
                    return user;
                })

            }

        case SET_USERS:
             return {
                 ...state,
                 users: [ ...action.users]
             }

        case SET_CURRENT_PAGE:
            return {
                  ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }

        case  TOGGLE_PRELOADER:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case  DISABLE_BUTTON_FOL:
            return {
                ...state,
                disableButton: action.disableButton
                    ? [...state.disableButton,action.userId]
                    : state.disableButton.filter(id => id !== action.userId)
            }


             default:
            return state;
    }
}

export  const follow =(userId) =>({ type: FOLLOW, userId });

export  const unfollow  =(userId) =>({type: UNFOLLOW, userId});

export  const setUsers =(users) =>({type: SET_USERS, users});

export  const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage:currentPage});

export const setTotalUsersCount = (totalCount)  => ({type: SET_TOTAL_COUNT,totalCount});

export const togglePreloader = (isLoading) => ({type:TOGGLE_PRELOADER, isLoading})

export const disableButtonFol = (disableButton,userId) => ({type: DISABLE_BUTTON_FOL, disableButton,userId })

export default userReducer


