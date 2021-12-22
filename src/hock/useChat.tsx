import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {rootReducersType} from "../redux/reduxStore";

import {startMessageListening, stopMessageListening} from "../redux/chat_reducer";

export const useChat = () => {

    const dispatch = useDispatch()
    const status = useSelector(({chat}: rootReducersType) => chat.status)

    useEffect(() => {
        dispatch(startMessageListening())
        return () => {
            dispatch(stopMessageListening())
        }
    }, [])

   return [status]
}