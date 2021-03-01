// import {rerender} from "../../index";
let rerender =()=>{
    console.log("State changed")
}

const state = {
        user: [
            {id: 1, name: 'Ivan', age: 25},
             {id: 2, name: 'Andre', age: 40},
             {id: 3, name: 'Tom', age: 50}
             ],
        message: [
            {id: 1, message: 'Hello', like: 3},
            {id: 2, message: 'Hi, friend', like: 9}
            ],

        newMessage: 'Hello World'
    }

   export const addNewMessage =()=>{
     const newMes = {
        id: 3, message: state.newMessage,  like: 0
     }
     state.message.push(newMes)
       state.newMessage= ''
       // updateNewText( '')
       rerender(state)
    }

    export const updateNewText = (newTextMes)=>{
     state.newMessage = newTextMes
        rerender(state)
    }

    export  const subscribe =(observer)=>{
        rerender = observer
    }



    export default state

