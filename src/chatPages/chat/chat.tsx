import React from 'react';

import { useChat } from '../../hock/useChat';
import Messages from './messages';
import AddMessageForm from './addMessageForm';

const Chat: React.FC = () => {
  const [status] = useChat();

  return (
    <>
      {status === null && <span>ERROR APP</span>}
      <Messages />
      <AddMessageForm />
    </>
  );
};

export default Chat;
