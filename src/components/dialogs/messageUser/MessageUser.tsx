import React from 'react';

import classes from './MessageUser.module.css';

type PropsType = {
  message: string;
  id: number;
};

const MessageUser: React.FC<PropsType> = ({ message }) => {
  return (
    <div>
      <ul className={classes.messageUser}>
        <li>{message}</li>
      </ul>
    </div>
  );
};

export default MessageUser;
