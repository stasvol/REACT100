import { initialState } from '../constants/initial_state';

const ADD_MESSAGE = 'ADD MESSAGE';
const DELETE_MESSAGE = 'DELETE MESSAGE';

export type InitialStateDialogType = typeof initialState;

export type DialogDataType = {
  id: number;
  name: string;
  img: string;
  map(element: ({ name, id, img }: { name: string; id: number; img: string }) => JSX.Element): any;
};

export type MessageUserDataType = {
  newMessageText: string;
  id: number;
  message: string;
  type: string;
};

type MessageType = {
  newMessageText: string;
  type: string;
};

// type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionsTypes = MessageUserDataType;
type ActionCreatorDialogType = ActionsTypes;

const dialogReducer = (
  state = initialState,
  action: ActionCreatorDialogType,
): InitialStateDialogType => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        MessageUserData: [
          ...state.MessageUserData,
          {
            id: 7,
            message: action.newMessageText,
          },
        ],
      };

    case DELETE_MESSAGE:
      return {
        ...state,
        MessageUserData: [...state.MessageUserData].filter(m => m.id !== action.id),
      };

    default:
      return state;
  }
};

export const dialogAction = {
  addMessage: (newMessageText: string): MessageType => ({ type: ADD_MESSAGE, newMessageText }),
  deleteMessage: (id: number) => ({ type: DELETE_MESSAGE, id }),
};

export default dialogReducer;
