import React  from 'react';
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";

import {withAuthRedirect} from "../../hock/withAuthRedirect";
import { dialogAction,} from '../../redux/dialog_reducer';
import {rootReducersType} from "../../redux/reduxStore";
import Dialog from "./dialog";

const mapStateToProps = (state :rootReducersType) => {
    return {
        state: state.dialogPage,
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addMessage: (newMessageText:string) => {
            dispatch(dialogAction.addMessage(newMessageText))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialog)


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
//                             <dialogs data={props.data} addChangeNewMessage={handleChange} addMessage={addNewMessage}/>
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