import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogReducer from "./dialog_reducer";
import postReducer from "./prof_reducer";
import siteBarReducer from "./sitebar_reducer";
import userReducer from "./user_reducer";
import authReducer, {authUserData} from "./auth_reducer";
import  thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from './app_reducer'
import SetReducer from "../components/Settings/Set_reducers/setReducer";
import SetMesReducer from "../components/Settings/Set_reducers/setMesreducer";

let reducers = combineReducers({
    dialogPage: dialogReducer,
    profPage: postReducer,
    siteBar: siteBarReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    message: SetReducer,
    posts: SetMesReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)));
     // const store = createStore(reducers, /* preloadedState, */ compose(


// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window._store_=store;

export default store