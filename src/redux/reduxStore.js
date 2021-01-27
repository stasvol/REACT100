import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog_reducer";
import postReducer from "./post_reducer";
import siteBarReducer from "./sitebar_reducer";
import userReducer from "./user_reducer";

let reducers = combineReducers({
    dialogPage: dialogReducer,
    postPage: postReducer,
    siteBar: siteBarReducer,
    usersPage: userReducer
})

let store = createStore(reducers);

export default store