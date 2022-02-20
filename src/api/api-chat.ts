// const socket = 'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx';
// type SubscribeType = (message: ChatMessageType[]) => void;
// export type ChatMessageType = ChatMessageApiType & { id: string | number };
type EventNamesType = 'messages-received' | 'status - changed';

const subscribers = {
  'messages-received': [] as MessagesReceivedSubscriberType[],
  'status - changed': [] as StatusChangedSubscriberType[],
};
type EventsValusType = MessagesReceivedSubscriberType | StatusChangedSubscriberType;

let webSoc: WebSocket | null = null;

const messagesHandler = (e: MessageEvent<string>): void => {
  const newMessage = JSON.parse(e.data) as ChatMessageApiType[];
  subscribers['messages-received'].forEach(s => s(newMessage));
};

const changeSubscribeStatus = (status: StatusType): void => {
  subscribers['status - changed'].forEach(s => s(status));
};

const closeHandler = (): void => {
  // console.log('CLOSE');
  changeSubscribeStatus('pending');
  // setTimeout(createWS, 5000);
};

const openHandler = (): void => {
  changeSubscribeStatus('ready');
};

const errorHandler = (): void => {
  changeSubscribeStatus('error');
  // console.error('REFRESH  PAGE');
};

const cleanUp = (): void => {
  webSoc?.removeEventListener('close', closeHandler);
  webSoc?.removeEventListener('message', messagesHandler);
  webSoc?.removeEventListener('open', openHandler);
  webSoc?.removeEventListener('error', errorHandler);
};

const createWS = (): void => {
  if (webSoc !== null) {
    // webSoc && webSoc.removeEventListener('close',closeHandler)
    // webSoc && webSoc.removeEventListener('message',messagesHandler)
    cleanUp();
    webSoc?.close();
  }
  webSoc = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
  changeSubscribeStatus('pending');
  webSoc?.addEventListener('close', closeHandler);
  webSoc?.addEventListener('message', messagesHandler);
  webSoc?.addEventListener('open', openHandler);
  webSoc?.addEventListener('error', errorHandler);
  // setWs(webSoc);
};

export const chatApi = {
  start(): void {
    createWS();
  },
  stop(): void {
    subscribers['messages-received'] = [];
    subscribers['status - changed'] = [];
    cleanUp();
    webSoc?.close();
  },

  subscribe(eventNames: EventNamesType, callback: EventsValusType): () => void {
    subscribers[eventNames].push(
      callback as MessagesReceivedSubscriberType & StatusChangedSubscriberType,
    );
    return () => {
      subscribers[eventNames] = (subscribers[eventNames] as Array<EventsValusType>).filter(
        (s: EventsValusType) => s !== callback,
      ) as MessagesReceivedSubscriberType[] & StatusChangedSubscriberType[];
    };
  },
  unsubscribe(eventNames: EventNamesType, callback: EventsValusType): void {
    subscribers[eventNames] = (subscribers[eventNames] as Array<EventsValusType>).filter(
      (s: EventsValusType) => s !== callback,
    ) as MessagesReceivedSubscriberType[] & StatusChangedSubscriberType[];
  },
  sendMessageWs(message: string): void {
    webSoc?.send(message);
  },
};

export type MessagesReceivedSubscriberType = (messages: ChatMessageApiType[]) => void;
export type StatusChangedSubscriberType = (status: StatusType) => void;

export type ChatMessageApiType = {
  message: string;
  photo: string;
  userId: string;
  userName: string;
};

export type StatusType = 'pending' | 'ready' | 'error';
