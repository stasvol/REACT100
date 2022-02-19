import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sendMessage } from '../redux/chat_reducer';

export const useFormMessage = (
  initState = '',
): {
    message: string;
    status: string;
    changeClick: (e: { target: { value: React.SetStateAction<string> } }) => void;
    sendMessageHandler: () => void;
  } => {
  const [message, setMessage] = useState(initState);
  const dispatch = useDispatch();
  const status = useSelector((state: { chat: { status: string } }) => state.chat.status);

  const sendMessageHandler = useCallback(() => {
    if (!message) return;
    dispatch(sendMessage(message));
    setMessage('');
  }, [dispatch, message]);

  const changeClick = useCallback((e: { target: { value: React.SetStateAction<string> } }) => {
    setMessage(e.target.value);
  }, []);

  return { message, status, changeClick, sendMessageHandler };
};
