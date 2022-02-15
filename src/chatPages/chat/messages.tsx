import React from 'react';

import { useMessages } from '../../hock/useMessages';
import { ChatMessageApiType } from '../../api/api-chat';
import MessageData from './messageData';

import classes from '../chatPage.module.css';

const Messages: React.FC = () => {
  // eslint-disable-next-line no-debugger
  // debugger;
  const { messages, messageRef, scrollHandler } = useMessages();

  return (
    <div className={classes.scroll} onScroll={scrollHandler}>
      {messages.map((message: ChatMessageApiType, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <MessageData key={`${message.userId}${i}`} message={message} />
      ))}
      <div ref={messageRef} />
    </div>
  );
};

export default Messages;
