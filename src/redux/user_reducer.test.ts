
import userReducer, {deleteUsers, disableButtonType, usersType} from "./user_reducer";

const state  = {
    users: [  {
        id: 1, photoUrl: 'https://download-cs.net/steam/avatars/3424.jpg',
        followed: true, fullName: 'Anna', status: 'I am a boss', location: {country: 'Ukraine', city: 'Kiev'}
    },
    {
        id: 2, photoUrl: 'https://cs16planet.ru/steam-avatars/images/avatar2960.jpg',
        followed: false, fullName: 'Ivan', status: 'I am a boss', location: {country: 'Ukraine', city: 'Lvov'}
    },
    {
        id: 3, photoUrl: 'https://download-cs.net/steam/avatars/3426.jpg',
        followed: false, fullName: 'Vovan', status: 'I am a boss', location: {country: 'Ukraine', city: 'Odessa'}
    },
    {
        id: 4,
        photoUrl: 'https://2ch.hk/sex/thumb/6329995/15866325175470s.jpg',
        followed: true, fullName: 'Sweta ',status: 'I am a boss',location: {country: 'Ukraine', city: 'Rivne'}

    } ],
    // users: [] as Array<usersType>,
    // pageSize: 5,
    // totalUsersCount: 0,
    // currentPage: 1,
    // isLoading: true,
    // // photos: null,
    // disableButton: [] as Array<disableButtonType>

}
test('deleted  post id and  length  increment in post ',() =>{
    const action = deleteUsers(1);
    const newUsers = userReducer(state,action);
   expect(newUsers.users.length).toBe(3);
})