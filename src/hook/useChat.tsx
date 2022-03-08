import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startMessageListening, stopMessageListening } from '../redux/chat_reducer';
import { chatStatusSelector } from '../selectors/chat_status_selector';

export const useChat = (): string[] => {
  const dispatch = useDispatch();
  const status = useSelector(chatStatusSelector);

  useEffect(() => {
    dispatch(startMessageListening());
    return () => {
      dispatch(stopMessageListening());
    };
  }, [dispatch]);
  return [status];
};
