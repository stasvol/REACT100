import React from 'react';
import classes from './Setting.module.css';
import {createRef} from "react";
import state, {addNewMessage, addNewText, updateNewText} from './State'


const Setting = (props) => {

    // let state = {
    //     user: [{id: 1, name: 'Ivan', age: 25}, {id: 2, name: 'Andre', age: 40}, {id: 3, name: 'Tom', age: 50}],
    //     message: [{id: 1, message: 'Hello'}, {id: 2, message: 'Hi, friend'}],
    //     newMessage: 'Hello World'
    // }
    // let addUser = state.user.map((obj, i) => <li key={i}>name: {obj.name}, age: {obj.age}</li>);
    // let addMessage = state.message.map((text, i) => <li key={i}>{text.message}</li>)
    //
    // // let newMessage = React.createRef()
    //
    // const handleClick = () => {
    //     let userNew = {id: 4, name: 'Lesya', age: 19, message: state.newText}
    //     state.user.push(userNew)
    //
    //     console.log(state.user)
    // }
    // const handleChange = (e) => {
    //     let newText = e.target.value
    //     state.message = newText
    //
    //     console.log(newText)
    // }

    // const addChangeText = (newText) => {
    //     state.message = newText
    //
    //     console.log(newText)
    // }
   // const addUser = props.state.user.map((user,i) => <li key={i}><div>name: {user.name} </div>
   //     <div>age: {user.age}</div></li>)

 const addMessage = props.state.message.map((mes,i)=> <li key={i}> <div>{mes.message}</div>
     <div>like : {mes.like}</div>  </li> )
console.log(addMessage)
    const  newText = createRef()

const handleChange =()=>{
     const newTextMes = newText.current.value
    props.updateNewText(newTextMes);
     console.log(newTextMes)
}

const  handleClick = ()=>{
    // let text = document.getElementById('ref').value
    // const text = newText.current.value
     props.addNewMessage()
     // newText.current.value = ''

 }



        return (
            <div>
                <h3>Setting</h3>
                <input onChange={handleChange}  ref={newText} type={'text'} placeholder={'add data'} value={props.newMessage } />
                <button onClick={handleClick}>ADD</button>
                <ul>
                    {/*<h4>USERS</h4>*/}
                    {/*{addUser}*/}
                    {/*<h4>POSTS</h4>*/}
                    {addMessage}
                </ul>
            </div>
        )
    }



export default Setting