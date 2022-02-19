import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startMessageListening, stopMessageListening } from '../redux/chat_reducer';

export const useChat = (): string[] => {
  const dispatch = useDispatch();
  const status = useSelector((state: { chat: { status: string } }) => state.chat.status);

  useEffect(() => {
    dispatch(startMessageListening());
    return () => {
      dispatch(stopMessageListening());
    };
  }, [dispatch]);
  return [status];
};
