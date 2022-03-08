import React from 'react';

import DialogUser from './dialogUser/dialogUser';
import MessageUser from './messageUser/messageUser';
import { DialogDataType, MessageUserDataType } from '../../redux/dialog_reducer';
import DialogForm from './dialog.Form';

import classes from './dialog.module.css';

export type PropsDialogType = {
  MessageUserData: MessageUserDataType[];
  DialogData: DialogDataType;
  addMessage: (newMessage: string) => void;
};
export type NewMessageTextType = {
  newMessageText: string;
};

const Dialogs: React.FC<PropsDialogType> = ({
  DialogData,
  MessageUserData,
  addMessage,
}): React.ReactElement => {
  const handleSubmit = (value: NewMessageTextType): void => {
    addMessage(value.newMessageText);
    value.newMessageText = '';
  };
  return (
    <div className={classes.bg}>
      <div className={classes.dialog}>
        {DialogData.map(({ name, id, img }) => (
          <DialogUser key={id} id={id} img={img} name={name} />
        ))}
      </div>
      <div className={classes.messsages}>
        <DialogForm onSubmit={handleSubmit} />
        <div className={classes.active}>
          <i className={classes.message}>Messages :</i>
          {MessageUserData.map(({ message, id }) => (
            <MessageUser key={id} id={id} message={message} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
