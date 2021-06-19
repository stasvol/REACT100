
import {Dispatch} from "redux";
import {chatApi, chatMessageType, statusType} from "../Api/api-chat";


const SET_MESSAGE = 'SET MESSAGE';
const SET_STATUS =  'SET STATUS '



let initialState  = {
 messages: [] as chatMessageType [],
 status: 'pending' as statusType
}


const chatReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case SET_MESSAGE:

            return {
                ...state,
                messages:[ ...state.messages, ...action.payload]

            }
        case SET_STATUS:

            return {
                ...state,
                status:action.payload

            }


        default:
            return state
    }
}
// data

type actionAllType = typeof action

export const action ={

    setMessage: (messages:chatMessageType []) => ({type:  SET_MESSAGE, payload: messages}),
    setStatus: (status:statusType) => ({type:SET_STATUS, payload:status})
}

// type dispatchType = Dispatch<actionCreatorType>
// type getStateType = () => rootReducersType
// type thunkType = ThunkAction<Promise<void>, rootReducersType, unknown, actionType>

let _newMessage: ((messages:chatMessageType[]) => void ) | null = null

const newMessageHandler = (dispatch:Dispatch) => {

    if(_newMessage===null) {
        _newMessage = (messages) => {
            dispatch(action.setMessage(messages))
        }
    }
    return _newMessage
}
let _statusHandler: ((status:statusType) => void ) | null = null

const newStatusHandler = (dispatch:Dispatch) => {

    if(_statusHandler===null) {
        _statusHandler = (status) => {
            dispatch(action.setStatus(status))
        }
    }
    return _statusHandler
}

export  const startMessageListening = () => async (dispatch:Dispatch) => {
      chatApi.start()
    chatApi.subscribe('messages-received',newMessageHandler(dispatch))
    chatApi.subscribe('status - changed',newStatusHandler(dispatch))
}

export  const stopMessageListening = () => async (dispatch:Dispatch) => {

    chatApi.unsubscribe( 'messages-received',newMessageHandler(dispatch))
    chatApi.unsubscribe( 'status - changed', newStatusHandler(dispatch))
    // chatApi.stop()
    }

export  const sendMessage = (message:string) => async (dispatch:Dispatch) => {

    chatApi.sendMessageWs(message)

}


export default chatReducer



