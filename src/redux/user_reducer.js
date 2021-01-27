const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET USERS'

let initialState = {

        users: [
            // {
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
            // },
        ],
    }


const userReducer = (state=initialState, action) => {

    switch (action.type) {

        case  FOLLOW:

           return{
                   ...state,
                  // users: [...state.users]
                  users: state.users.map(user =>{
                      if (user.id === action.userId){
                          return {...user, followed:true}
                      }
                         return user
                  })
           }

        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map(user=> {
                    if (user.id === action.userId) {
                        return {...user,followed:false}
                    }
                    return user;
                })

            }

        case SET_USERS:
             return {
                 ...state,
                 users: [...state.users, ...action.users]
             }

             default:
            return state
    }
}

export  const followAC =(userId) =>({ type: FOLLOW, userId });

export  const unfollowAC  =(userId) =>({type: UNFOLLOW, userId});

export  const setUsersAC =(users) =>({type: SET_USERS, users});


export default userReducer


