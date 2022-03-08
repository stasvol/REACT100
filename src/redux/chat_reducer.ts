import { Dispatch } from 'redux';

import { chatApi, ChatMessageApiType, StatusType } from '../api/api-chat';
import { userId } from '../utility/getId';

const SET_MESSAGE = 'SET MESSAGE';
const SET_STATUS = 'SET STATUS ';

type ChatStateType = {
  messages: ChatMessageApiType[];
  status: StatusType;
};

const initialState: ChatStateType = {
  messages: [], // as ChatMessageApiType [],
  status: 'pending', // as statusType
};

type SetMessageType = { type: typeof SET_MESSAGE; messages: ChatMessageApiType[] };
type SetStatusType = { type: typeof SET_STATUS; status: StatusType };

type ActionChatType = SetMessageType | SetStatusType;

export const actions = {
  // setMessage: (messages: ChatMessageApiType[],
  //   userId:{ getID:GetIDType }) => ({ type: SET_MESSAGE, messages, userId }),
  setMessage: (
    messages: ChatMessageApiType[],
  ): { messages: ChatMessageApiType[]; type: string } => ({ type: SET_MESSAGE, messages }),
  setStatus: (status: StatusType): { type: string; status: 'pending' | 'ready' | 'error' } => {
    return { type: SET_STATUS, status };
  },
};
// const getID = (): string | number | undefined => {
//   // Math.random должен быть уникальным из-за своего алгоритма заполнения.
//   // Преобразуем его в базу 36 (числа + буквы) и берем первые 9 символов
//   // после десятичной дроби.
//   return `_${Math.random().toString(36).substr(2, 9)}`;
// };

const chatReducer = (state = initialState, action: ActionChatType): ChatStateType => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          ...action.messages.map((message: ChatMessageApiType) => ({
            ...message,
            id: userId,
          })),
        ].filter((m, i, array) => i >= array.length - 100),
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

let newMessage: ((messages: ChatMessageApiType[]) => void) | null = null;

const newMessageHandler = (dispatch: Dispatch): ((messages: ChatMessageApiType[]) => void) => {
  if (newMessage === null) {
    newMessage = messages => {
      dispatch(actions.setMessage(messages));
    };
  }
  return newMessage;
};

let statusHandler: ((status: StatusType) => void) | null = null;

const newStatusHandler = (dispatch: Dispatch): ((status: StatusType) => void) => {
  if (statusHandler === null) {
    statusHandler = status => {
      dispatch(actions.setStatus(status));
    };
  }
  return statusHandler;
};

export const startMessageListening =
  () =>
    async (dispatch: Dispatch): Promise<void> => {
      chatApi.start();
      chatApi.subscribe('messages-received', newMessageHandler(dispatch));
      chatApi.subscribe('status - changed', newStatusHandler(dispatch));
    };

export const stopMessageListening =
  () =>
    async (dispatch: Dispatch): Promise<void> => {
      chatApi.unsubscribe('messages-received', newMessageHandler(dispatch));
      chatApi.unsubscribe('status - changed', newStatusHandler(dispatch));
      chatApi.stop();
    };

export const sendMessage = (message: string) => async (): Promise<void> => {
  chatApi.sendMessageWs(message);
};

export default chatReducer;
