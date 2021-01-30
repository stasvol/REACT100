import React, {Component} from 'react';
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";
import DialogUser from './DialogUser/DialogUser';
import MessageUser from './MessageUser/MessageUser';
import {addNewMessageActionCreator, handleChangeDialogActionCreator} from '../../redux/dialog_reducer';
import Dialogs from "./Dialog";
import MyContext from "../../MyContext";
import {connect} from "react-redux";



const mapStateToProps = (state) =>{

   return{
       state : state.dialogPage

   }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addChangeNewMessage: (messageText) => {
            dispatch(handleChangeDialogActionCreator(messageText))
        },
        addMessage: () => {
            dispatch(addNewMessageActionCreator())
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogContainer


// const DialogContainer1 = (props) => {
//
//     // const addNewMessage = () =>{
//     //     // let messageText = newMessage.current.value;
//     //     // props.addMessage();
//     //     // newMessage.current.value = '';
//     //    // props.addChangeNewMessage('');
//     //     props.store.dispatch(addNewMessageActionCreator());
//     // }
//     //
//     // const handleChange = (messageText) =>{
//     //     // let messageText = newMessage.current.value;
//     //     // props.addChangeNewMessage(messageText)
//     //     props.store.dispatch(handleChangeDialogActionCreator(messageText));
//     // }
//
//
//     return (
//         <MyContext.Consumer>
//             {
//                 (store) => {
//                     const addNewMessage = () =>{
//                         store.dispatch(addNewMessageActionCreator());
//                     }
//
//                     const handleChange = (messageText) =>{
//                         store.dispatch(handleChangeDialogActionCreator(messageText));
//                     }
//                     return (
//                     <div>
//                         <div>
//                             <Dialogs data={props.data} addChangeNewMessage={handleChange} addMessage={addNewMessage}/>
//                         </div>
//                     </div>
//                     )
//                 }
//
//             }
//         </MyContext.Consumer>
//     )
// }
//
// export default DialogContainer1