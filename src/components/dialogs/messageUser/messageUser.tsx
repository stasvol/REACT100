import React from 'react';

import classes from './messageUser.module.css';

type PropsType = {
  message: string;
  id: number;
};

const MessageUser: React.FC<PropsType> = ({ message }): React.ReactElement => (
  <ul className={classes.messageUser}>
    <li>{message}</li>
  </ul>
);

export default MessageUser;
