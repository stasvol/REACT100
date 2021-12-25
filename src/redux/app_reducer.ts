import thunk, {ThunkAction} from "redux-thunk";
import {authThunkCreator} from "./auth_reducer";
import {Dispatch} from "redux";
import {rootReducersType} from "./reduxStore";
// import {loginApi, loginUser, userApi} from "../api/api";
// import {stopSubmit} from "redux-form";

const INITIALISED_SUCCESS = 'INITIALISED SUCCESS';

export type initialStateAppType  = {
    initialized: boolean
}

let initialState = {
    initialized: false,
}


const appReducer = (state = initialState, action:initializedSuccessActionType):initialStateAppType => {

    switch (action.type) {

        case INITIALISED_SUCCESS:

            return {
                ...state,
                initialized: true


            }


        default:
            return state
    }
}
// data
export type initializedSuccessActionType ={
    type: typeof INITIALISED_SUCCESS
}
export const initializedSuccess =():initializedSuccessActionType => ({type: INITIALISED_SUCCESS});

type dispatchType = Dispatch<initializedSuccessActionType>
type getStateType = () => rootReducersType
type thunkType = ThunkAction<Promise<void>, rootReducersType, unknown, initializedSuccessActionType>

export const initializeApp = ():thunkType =>
    async(dispatch) => {

    let promise = dispatch(authThunkCreator());
    // dispatch(AC1())
    // dispatch(AC2())
    //  promise.then(() =>{
    //      dispatch(initializedSuccess() );
    //  })
        await Promise.all([promise])
        // .then(() => {
        dispatch(initializedSuccess())
    // })


}

export default appReducer



