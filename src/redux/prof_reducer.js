const ADD_POST = 'ADD POST';
const ADD_CHANGE_TEXT = 'ADD CHANGE TEXT';
const SET_USERS_PROFILE = 'SET USERS PROFILE'

let initialState = {

    PostData: [
        {id: 1, like: '20', message: 'Super'},
        {id: 2, like: '3', message: 'Kliovo'},
        {id: 3, like: '9', message: 'Class'},
    ],

    newText: 'Hello',
    profile: null

}

const profReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            // let newPost = {
            //     id: 4,
            //     like: '0',
            //     message: state.newText                 // (message)-parametr funktion
            // };
            // let copyState = {...state};
            // copyState.PostData = [...state.PostData];
            // copyState.PostData.push(newPost);
            // copyState.newText = '';
            //
            // return copyState;
            let newPost = {
                id: 4,
                like: '0',
                message: state.newText                 // (message)-parametr funktion
            };
             return {
                 ...state,
                 PostData:[...state.PostData, newPost],
                 newText: ''
             }

             case ADD_CHANGE_TEXT:

            // let copyState = {...state}
            // copyState.newText = action.newText;
            //
            // return copyState;
            return{
                ...state,
                newText: action.newText
            }

        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile

            }

        default:
            return state;
    }
}

export const addNewPostActionCreator = () => ({type: ADD_POST});

export const handleChangeActionCreator = (newPost) => ({type: ADD_CHANGE_TEXT, newText: newPost});

export  const setUsersProfile = (profile)  => ({type: SET_USERS_PROFILE,profile})

export default profReducer


// if (action.type=== ADD_POST){
//     let newPost = {
//         id: 4,
//         like: '0',
//         message: state.newText                 // (message)-parametr funktion
//     };
//     state.PostData.push(newPost);
//     state.newText = '';
// } else if (action.type === ADD_CHANGE_TEXT ) {
//     state.newText = action.newText
// }