// const socket = 'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx';
// type SubscribeType = (message: ChatMessageType[]) => void;
// export type ChatMessageType = ChatMessageApiType & { id: string | number };
// eslint-disable-next-line import/named
import { ChatEnum } from './api';

type SubscribersType = {
  'messages-received': MessagesReceivedSubscriberType[];
  'status - changed': StatusChangedSubscriberType[];
};

const subscribers: SubscribersType = {
  'messages-received': [],
  'status - changed': [],
};

let webSoc: WebSocket | null = null;

const messagesHandler = (e: MessageEvent<string>): void => {
  const newMessage: ChatMessageApiType[] = JSON.parse(e.data);
  subscribers[ChatEnum.messagesReceived].forEach(subscriber => subscriber(newMessage));
};

const changeSubscribeStatus = (status: StatusType): void => {
  subscribers[ChatEnum.statusChanged].forEach(subscriber => subscriber(status));
};

const closeHandler = (): void => {
  // console.log('CLOSE');
  changeSubscribeStatus(ChatEnum.pending);
  // setTimeout(createWS, 5000);
};

const openHandler = (): void => {
  changeSubscribeStatus(ChatEnum.ready);
};

const errorHandler = (): void => {
  changeSubscribeStatus(ChatEnum.error);
  // console.error('REFRESH  PAGE');
};

const cleanUp = (): void => {
  webSoc?.removeEventListener(ChatEnum.close, closeHandler);
  webSoc?.removeEventListener(ChatEnum.message, messagesHandler);
  webSoc?.removeEventListener(ChatEnum.open, openHandler);
  webSoc?.removeEventListener(ChatEnum.error, errorHandler);
};

const createWS = (): void => {
  if (webSoc !== null) {
    // webSoc && webSoc.removeEventListener('close',closeHandler)
    // webSoc && webSoc.removeEventListener('message',messagesHandler)
    cleanUp();
    webSoc?.close();
  }
  webSoc = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
  changeSubscribeStatus(ChatEnum.pending);
  webSoc?.addEventListener(ChatEnum.close, closeHandler);
  webSoc?.addEventListener(ChatEnum.message, messagesHandler);
  webSoc?.addEventListener(ChatEnum.open, openHandler);
  webSoc?.addEventListener(ChatEnum.error, errorHandler);
  // setWs(webSoc);
};

export const chatApi = {
  start(): void {
    createWS();
  },
  stop(): void {
    subscribers[ChatEnum.messagesReceived] = [];
    subscribers[ChatEnum.statusChanged] = [];
    cleanUp();
    webSoc?.close();
  },

  subscribe(eventNames: EventNamesType, callback: EventsValueType): () => void {
    subscribers[eventNames].push(callback as EventsValuesType);
    return () => {
      subscribers[eventNames] = (subscribers[eventNames] as Array<EventsValuesType>).filter(
        (subscriber: EventsValuesType) => subscriber !== callback,
      );
    };
  },
  unsubscribe(eventNames: EventNamesType, callback: EventsValueType): void {
    subscribers[eventNames] = (subscribers[eventNames] as Array<EventsValuesType>).filter(
      (subscriber: EventsValuesType) => subscriber !== callback,
    );
  },

  sendMessageWs(message: string): void {
    webSoc?.send(message);
  },
};
type EventsValuesType = MessagesReceivedSubscriberType & StatusChangedSubscriberType;
export type EventNamesType = ChatEnum.messagesReceived | ChatEnum.statusChanged;
type EventsValueType = MessagesReceivedSubscriberType | StatusChangedSubscriberType;
export type MessagesReceivedSubscriberType = (messages: ChatMessageApiType[]) => void;
export type StatusChangedSubscriberType = (status: StatusType) => void;

export type ChatMessageApiType = {
  message: string;
  photo: string;
  userId: string | number;
  userName: string;
};

export type StatusType = ChatEnum.pending | ChatEnum.ready | ChatEnum.error;
