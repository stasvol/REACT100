import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./dialog_reducer";
import postReducer from "./prof_reducer";
import siteBarReducer from "./sitebar_reducer";
import userReducer from "./user_reducer";
import authReducer, {authUserData} from "./auth_reducer";
import  thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    dialogPage: dialogReducer,
    profPage: postReducer,
    siteBar: siteBarReducer,
    usersPage: userReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store=store;

export default store