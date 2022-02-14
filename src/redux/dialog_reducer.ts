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
  id: number;
  message: string;
};

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionsTypes = ReturnType<InferValueTypes<typeof dialogAction>>;
type ActionCreatorDialogType = ActionsTypes;

let initialState = {
  DialogData: [
    { id: 1, name: 'Artur', img: 'https://avatarko.ru/img/kartinka/1/monstr_kot.jpg' },
    {
      id: 2,
      name: 'Diana',
      img: 'https://www.meme-arsenal.com/memes/c1e1c57e0465d02cf0b0d7f88425d2ea.jpg',
    },
    {
      id: 3,
      name: 'Lesya',
      img: 'https://i.pinimg.com/originals/6c/c4/b4/6cc4b42d17e1716282a138d1d93028cf.jpg',
    },
    {
      id: 4,
      name: 'Viktor',
      img: 'https://i.pinimg.com/736x/da/d0/a7/dad0a79db4cd810e3b3aa5c56dfc6742.jpg',
    },
    { id: 5, name: 'Andre', img: 'https://bipbap.ru/wp-content/uploads/2017/10/8cb.jpg' },
    {
      id: 6,
      name: 'Tom',
      img: 'https://chance2.ru/photo/img/krasivye-koshki-foto-na-avatarku-2.jpg',
    },
    {
      id: 7,
      name: 'Stas',
      img: 'https://i.pinimg.com/474x/01/b9/cf/01b9cfe00d3987af5cbb8d06688affbe.jpg',
    },
    {
      id: 8,
      name: 'Vova',
      img: 'https://www.meme-arsenal.com/memes/e0d6c17f7cdbf397eaa821e56e2c1b51.jpg',
    },
    {
      id: 9,
      name: 'Vovan',
      img: 'https://i.pinimg.com/originals/5b/1a/9a/5b1a9ab141ba1ade4ab06c8215059225.jpg',
    },
  ] as Array<DialogDataType>,
  MessageUserData: [
    { id: 1, message: 'Vse klas' },
    { id: 2, message: 'Super' },
    { id: 3, message: 'Klasno' },
    { id: 4, message: 'VOOOO !!!' },
    { id: 5, message: 'YO-YO-YO-YO' },
    { id: 6, message: 'YO-MO-YO' },
  ] as Array<MessageUserDataType>,
  newMessageText: 'Hi',
};

// eslint-disable-next-line @typescript-eslint/default-param-last
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
  addMessage: (newMessageText: string) => ({ type: ADD_MESSAGE, newMessageText } as const),
  deleteMessage: (id: number) => ({ type: DELETE_MESSAGE, id } as const),
};

export default dialogReducer;
