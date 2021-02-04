import React, {Component} from 'react';
import {addChangeNewMessage, addMessage,} from '../../redux/dialog_reducer';
import Dialogs from "./Dialog";
import MyContext from "../../MyContext";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Dialog from "./Dialog";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";


//       HOC

// let AuthRedirectComponent= (props) =>{
//     if (!props.isAuth) return <Redirect to={'/Login'} />
//
//     return  <Dialog {...props} />
// }
// let AuthRedirectComponent = withAuthRedirect(Dialog);

const mapStateToProps = (state) => {

    return {
        state: state.dialogPage,
        // isAuth: state.auth.isAuth

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addChangeNewMessage: (messageText) => {
            dispatch(addChangeNewMessage(messageText))
        },
        addMessage: () => {
            dispatch(addMessage())
        }
    }
}


// const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
//
// export default DialogContainer
export default compose(
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