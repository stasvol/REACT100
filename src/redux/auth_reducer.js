const AUTH_USERS_DATA = 'AUTH USERS DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false

}


const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case AUTH_USERS_DATA:

            return {
                ...state,
                // id: action.id,
                // email: action.email,
                // login: action.login
                ...action.data,
                isAuth: false
            }


        default:
            return state
    }
}

export const authUserData = (id, email, login) => ({type: AUTH_USERS_DATA, data:{ id, email, login }});


export default authReducer


// if (action.type === ADD_MESSAGE) {
//     let textMessage = {
//         id: 7,
//         message: state.newMessageText,          // (newMessage)-parametr funktion
//     };
//     state.MessageUserData.push(textMessage);
//     state.newMessageText = '';                  // addNewMessage('')
//
//
// } else if (action.type === ADD_CHANGE_NEW_MESSAGE) {
//     state.newMessageText = action.newMessageText;
// }
