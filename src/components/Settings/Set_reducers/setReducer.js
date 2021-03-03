const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_TEXT = 'UPDATE_NEW_TEXT';

let initialState = {
    message: [
        {id: 1, message: 'Hello', like: 3},
        {id: 2, message: 'Hi, friend', like: 9}
    ],
    newMessage: 'Hello Friend',
}


 const SetReducer = (state=initialState,action) => {

       switch (action.type) {
           case ADD_NEW_MESSAGE :

               const newMes = {
                   id: 3, message: state.newMessage, like: 1,
               }

               state.push(newMes)
               state.newMessage = ''

               return state

           case UPDATE_NEW_TEXT:
               state.newMessage = action.newTextMes
               return state

           default:

               return state

       }
     // if (action.type === ADD_NEW_MESSAGE) {
     //     const newMes = {
     //         id: 3, message: state.newMessage, like: 1
     //     }
     //     state.message.push(newMes)
     //     state.newMessage = ''
     //     // updateNewText( '')
     //     // this.rerender(this.state)
     //       return state
     // } else if (action.type === UPDATE_NEW_TEXT) {
     //     state.newMessage = action.newTextMes
     //     // this.rerender(this.state)
     //     return state
     //
     // }
 }

export const addNewMessageAC = () => ({ type:  ADD_NEW_MESSAGE  });

export const updateNewTextAC = (newTextMes) =>{
    return  { type: UPDATE_NEW_TEXT ,newTextMes:newTextMes}
}

 export default SetReducer
