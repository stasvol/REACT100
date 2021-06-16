import {rootReducersType} from "./reduxStore";


export const isAuthSelector = (state: rootReducersType)=>{
    return state.auth.isAuth
}

export const loginSelector = (state: rootReducersType)=>{
    return state.auth.login
}

