import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sendMessage } from '../redux/chat_reducer';
import { chatStatusSelector } from '../selectors/chat_status_selector';

type PropsType = {
  message: string;
  status: string;
  changeClick: (e: { target: { value: React.SetStateAction<string> } }) => void;
  sendMessageHandler: () => void;
};

export const useFormMessage = (initState = ''): PropsType => {
  const [message, setMessage] = useState(initState);
  const dispatch = useDispatch();
  const status = useSelector(chatStatusSelector);

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
