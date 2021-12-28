import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

import appReducer from './app_reducer';
import chatReducer from "./chat_reducer";
import userReducer from "./user_reducer";
import authReducer  from "./auth_reducer";
import siteBarReducer from "./sitebar_reducer";
import dialogReducer, {dialogAction} from "./dialog_reducer";
import postReducer from "./prof_reducer";

let reducers = combineReducers({
    dialogPage: dialogReducer,
    profPage: postReducer,
    siteBar: siteBarReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    chat: chatReducer
})

export type reducersType = typeof reducers

export type rootReducersType = ReturnType<reducersType>

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
// export type InferActionTypes<T extends { [key: string]: (...arg:any)=> any[] } > = ReturnType<InferValueTypes<T>>
export type InferActionTypes = ReturnType<InferValueTypes<typeof dialogAction>>;
//  THUNK
export type baseThunkType <A extends Action, R=Promise<void>> = ThunkAction<R, rootReducersType, unknown, A>

     // @ts-ignore
const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    // @ts-ignore
     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;

const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)));

export default store