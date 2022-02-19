import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { ChatMessageApiType } from '../api/api-chat';

export const useMessages = (
  initState = true,
): {
    messageRef: RefObject<HTMLDivElement>;
    messages: ChatMessageApiType[];
    scrollHandler: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
  } => {
  const [isAutoScroll, setIsAutoScroll] = useState(initState);
  const messages = useSelector(
    (state: { chat: { messages: ChatMessageApiType[] } }) => state.chat.messages,
  );
  const messageRef = useRef<HTMLDivElement>(null);

  const scrollHandler = useCallback(
    (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      const element: EventTarget & HTMLDivElement = e.currentTarget;
      if (Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 100) {
        !isAutoScroll && setIsAutoScroll(true);
      } else {
        setIsAutoScroll(false);
      }
    },
    [isAutoScroll, setIsAutoScroll],
  );

  useEffect(() => {
    isAutoScroll && messageRef.current && messageRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [isAutoScroll, messages]);

  return { messages, messageRef, scrollHandler };
};
