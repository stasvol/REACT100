import React, {Component} from 'react';
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";
import DialogUser from './DialogUser/DialogUser';
import MessageUser from './MessageUser/MessageUser';
import {addNewMessageActionCreator, handleChangeDialogActionCreator} from '../../redux/dialog_reducer';

const Dialogs = (props) => {
    // let state = props.store.getState().dialogPage

    let DialogUserData = props.data.DialogData.map(obj => <DialogUser name={obj.name} id={obj.id} img={obj.img} />);
    let MessageData = props.data.MessageUserData.map(message => <MessageUser message={message.message} id={message.id} />);

    // let newMessage = React.createRef();

    const addNewMessage = () =>{
        // let messageText = newMessage.current.value;
        props.addMessage();
        // newMessage.current.value = '';
       // props.addChangeNewMessage('');
       //  props.dispatch(addNewMessageActionCreator());
    }

    const handleChange = (e) =>{
        let messageText = e.target.value;
        props.addChangeNewMessage(messageText)
        // props.dispatch(handleChangeDialogActionCreator(messageText));
    }


    return (

        <div className={classes.bg}>
            <div className={classes.dialog}>
                { DialogUserData }
                {/*<DialogUser name={avatar[8].name} id={avatar[8].id}  img={avatar[8].img}/>*/}
                {/*<DialogUser name={DialogData[1].name} id={DialogData[1].id}/>*/}
                {/*<DialogUser name={DialogData[2].name} id={DialogData[2].id}/>*/}
                {/*<DialogUser name={'Viktor'} id={'4'}/>*/}
                {/*<DialogUser name={'Andre'} id={'5'}/>*/}
                {/*<DialogUser name={'Tom'} id={'6'}/>*/}
                {/*<DialogUser name={'Stas'} id={'7'}/>*/}
                {/*<DialogUser name={'Vova'} id={'8'}/>*/}
            </div>
            <div className={classes.messsages}>

                 <textarea  onChange={handleChange} value={props.data.newMessageText}  placeholder={'add message'}> </textarea>
                 <button onClick={ addNewMessage } className={classes.btn}>Add Message</button>

                <div className={classes.circle}>
                 <div className={`${classes.circle} ${classes.active}`}>{MessageData}</div>
                </div>


                {/*<MessageUser message={MessageUserData[0].message} id={MessageUserData[0].id}/>*/}
                {/*<MessageUser message={MessageUserData[1].message} id={MessageUserData[1].id}/>*/}
                {/*<MessageUser message={MessageUserData[2].message}/>*/}
                {/*<MessageUser message={MessageUserData[3].message}/>*/}
                {/*<MessageUser message={MessageUserData[4].message}/>*/}
            </div>
        </div>
    )
}

export default Dialogs