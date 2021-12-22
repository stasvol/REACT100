import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {rootReducersType} from "../redux/reduxStore";
import {sendMessage} from "../redux/chat_reducer";

export const useFormMessage = (initState='') => {

    const [message, setMessage] = useState(initState)
    const dispatch = useDispatch()
    const status = useSelector((state: rootReducersType) => state.chat.status)

    const sendMessageHandler = useCallback(() => {
        if (!message) return
        dispatch(sendMessage(message))
        setMessage('')
    },[message]);

    const changeClick = useCallback((e: { target: { value: React.SetStateAction<string>; }; }) => {
        setMessage(e.target.value)
    },[]);

    return { message, status,changeClick, sendMessageHandler }
}