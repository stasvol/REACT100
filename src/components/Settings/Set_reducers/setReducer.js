const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_TEXT = 'UPDATE_NEW_TEXT';
const DELETE_MESSAGE = 'DELETE_MESSAGE'

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
                   id: 3, message: action.newMessage, like: 1,
               }
               return {
                   ...state,
                   message: [...state.message, newMes ],
                   // state.message.push(newMes)
                   newMessage: ''
               }


               // return  state

           case UPDATE_NEW_TEXT:
               return {
                   ...state,
                   newMessage: action.newTextMes
               }
           case DELETE_MESSAGE:
               return{
                   ...state,
                   message: state.message.filter(mes => mes.id !== action.userId  )
               }

               // state.newMessage = action.newTextMes
               // return state

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

export const addNewMessageAC = (newMessage) => ({ type:  ADD_NEW_MESSAGE,newMessage  });
export const deleteMessageAC = (userId) => ({type:DELETE_MESSAGE,userId});

export const updateNewTextAC = (newTextMes) =>{
    return  { type: UPDATE_NEW_TEXT ,newTextMes:newTextMes}
}

 export default SetReducer
