// import {rerender} from "../../index";
import SetReducer from "./Set_reducers/setReducer";
import SetMesReducer from "./Set_reducers/setMesreducer";

const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_TEXT = 'UPDATE_NEW_TEXT';
const NEW_POST_MES_TEXT = 'NEW_POST_MES_TEXT';
const ADD_NEW_POST = 'ADD_NEW_POST';

let Store = {

        rerender() {
        console.log("State changed")
    },

       state : {
        users: [
            {id: 1, name: 'Ivan', age: 25},
            {id: 2, name: 'Andre', age: 40},
            {id: 3, name: 'Tom', age: 50}
        ],
        message: [
            {id: 1, message: 'Hello', like: 3},
            {id: 2, message: 'Hi, friend', like: 9}
            ],

        newMessage: 'Hello Friend',

            posts: [

               {id: 1, post: 'Hello React', },
               {id: 2, post: 'Hi, JS', }
           ],

           newPostMesText: 'HI'

    },

       getState(){
            return  this.state
       },

        subscribe  (observer)  {
        this.rerender = observer
     },

    //     addNewMessage () {
    //         const newMes = {
    //         id: 3, message: this.state.newMessage, like: 0
    //     }
    //     this.state.message.push(newMes)
    //     this.state.newMessage = ''
    //     // updateNewText( '')
    //         this.rerender(this.state)
    // },
    //
    //    updateNewText  (newTextMes)  {
    //     this.state.newMessage = newTextMes
    //        this.rerender(this.state)
    // },

    dispatch(action) {
        this.state.message = SetReducer(this.state.message, action)
        this.state.posts =  SetMesReducer(this.state.posts, action)

           this.rerender(this.state)
         // if (action.type ===  ADD_NEW_MESSAGE ) {
         //     const newMes = {
         //         id: 3, message: this.state.newMessage, like: 1
         //     }
         //     this.state.message.push(newMes)
         //     this.state.newMessage = ''
         //     // updateNewText( '')
         //     this.rerender(this.state)
         //
         // } else if (action.type ===  UPDATE_NEW_TEXT ) {
         //     this.state.newMessage = action.newTextMes
         //     this.rerender(this.state)
         //
         // } else
         //     if (action.type === NEW_POST_MES_TEXT) {
         //     this.state.newPostMesText = action.textNew
         //     this.rerender(this.state)
         //
         // }else  if (action.type === ADD_NEW_POST ){
         //     let textNew = this.state.newPostMesText
         //     this.state.newPostMesText = ''
         //     this.state.posts.push({id: 5, post: textNew })
         //     this.rerender(this.state)
         // }

    }
}

// export const addNewMessageAC = () => ({ type:  ADD_NEW_MESSAGE  });
//
// export const updateNewTextAC = (newTextMes) =>{
//      return  { type: UPDATE_NEW_TEXT ,newTextMes:newTextMes}
// }
// export const newPostMesTextAC = (textNew) =>{
//     return {type:NEW_POST_MES_TEXT, textNew}
// }
// export const addNewPostAC = () => {
//     return {type: ADD_NEW_POST}
// }

    export default Store

