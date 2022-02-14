import { Action, applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import appReducer from './app_reducer';
import chatReducer from './chat_reducer';
import userReducer from './user_reducer';
import authReducer from './auth_reducer';
import siteBarReducer from './sitebar_reducer';
import dialogReducer from './dialog_reducer';
import postReducer from './prof_reducer';

const reducers = combineReducers({
  dialogPage: dialogReducer,
  profPage: postReducer,
  siteBar: siteBarReducer,
  usersPage: userReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  chat: chatReducer,
});

export type ReducersType = typeof reducers;
export type RootReducersType = ReturnType<ReducersType>;

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
// eslint-disable-next-line max-len
export type InferActionTypes<T extends { [key: string]: (...arg: any) => any[] }> = ReturnType<
InferValueTypes<T>
>;
// export type InferActionTypes = ReturnType<InferValueTypes<typeof dialogAction>>;
//  THUNK

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
R,
RootReducersType,
unknown,
A
>;
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
// const composeEnhancers =
//   // @ts-ignore
//   (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
//     // @ts-ignore
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) ||
//   compose;

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
