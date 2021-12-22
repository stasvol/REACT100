import React from 'react';

import DialogUser from './dialogUser/dialogUser';
import MessageUser from './messageUser/MessageUser';
import {initialStateDialogType} from '../../redux/dialog_reducer';
import DialogForm from "./dialog.Form";

import classes from './dialog.module.css';


export type propsDialogType ={
    state: initialStateDialogType,
    addMessage:(newMessage:string)=>void
}
export type newMessageTextType={
    newMessageText:string
}

const Dialogs:React.FC<propsDialogType> = (props) => {

    const onSubmit =(value:newMessageTextType) =>{
        props.addMessage(value.newMessageText)
        value.newMessageText = ""
    }

    return (

        <div className={classes.bg}>
            <div className={classes.dialog}>
                { props.state.DialogData
                    .map(({name,id,img},i) => <DialogUser name={name} id={id} img={img} key={i}/>)
                }
            </div>
            <div className={classes.messsages}>
                <DialogForm onSubmit={onSubmit} />

                <div className={classes.active}><i className={classes.message}>Messages  :</i>
                    { props.state.MessageUserData
                        .map(({message,id}, i) => <MessageUser message={message} id={id} key={i}/>)

                    }
                </div>
            </div>
        </div>

    )
}

export default Dialogs