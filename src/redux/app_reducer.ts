import {ThunkAction} from "redux-thunk";

import {authThunkCreator} from "./auth_reducer";
import {rootReducersType} from "./reduxStore";

const INITIALISED_SUCCESS = 'INITIALISED SUCCESS';

export type initialStateAppType = {
    initialized: boolean
}

export type initializedSuccessActionType = {
    type: typeof INITIALISED_SUCCESS
}
export const initializedSuccess = (): initializedSuccessActionType => ({type: INITIALISED_SUCCESS});
type thunkType = ThunkAction<Promise<void>, rootReducersType, unknown, initializedSuccessActionType>

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action: initializedSuccessActionType): initialStateAppType => {

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

export const initializeApp = (): thunkType =>
    async (dispatch) => {
        let promise = dispatch(authThunkCreator());
        await Promise.all([promise])
        dispatch(initializedSuccess())
    }

export default appReducer



