import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogReducer, {dialogAction} from "./dialog_reducer";
import postReducer from "./prof_reducer";
import siteBarReducer from "./sitebar_reducer";
import userReducer from "./user_reducer";
import authReducer  from "./auth_reducer";
import  thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from './app_reducer'
import SetReducer from "../components/Settings/Set_reducers/setReducer";
import SetMesReducer from "../components/Settings/Set_reducers/setMesreducer";
import SetUserReducer from "../components/Settings/Set_reducers/setUserReducer";
import SetAuthReducer from "../components/Settings/Set_reducers/setAuthReducer";

let reducers = combineReducers({
    dialogPage: dialogReducer,
    profPage: postReducer,
    siteBar: siteBarReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    message: SetReducer,
    posts: SetMesReducer,
    users: SetUserReducer,
    setAuth:SetAuthReducer
})

type reducersType = typeof reducers
export type rootReducersType = ReturnType<reducersType>

// import * as actions from 'action-creators';
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
// export type InferActionTypes<T extends { [key: string]: (...arg:any)=> any[] } > = ReturnType<InferValueTypes<T>>
export type InferActionTypes = ReturnType<InferValueTypes<typeof dialogAction>>;
//  THUNK
// type baseThunkType <A extends Action, R=Promise<void>> = thunkActions<R, rootReducersType, unknown, A>

     // @ts-ignore
const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    // @ts-ignore
     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;

const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)));
     // const store = createStore(reducers, /* preloadedState, */ compose(
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// @ts-ignore
window._store_ = store;

export default store