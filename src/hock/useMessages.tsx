import React, {useCallback, useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";

import {rootReducersType} from "../redux/reduxStore";
import {chatMessageType} from "../api/api-chat";

export const useMessages = (initState=true) => {
    const [isAutoScroll, setIsAutoScroll] = useState(initState)
    const messages: chatMessageType[] = useSelector(({chat}: rootReducersType) => chat.messages)
    const messageRef = useRef<HTMLDivElement>(null)

    const scrollHandler = useCallback((e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element:EventTarget & HTMLDivElement = e.currentTarget
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 100) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    },[isAutoScroll]);

    useEffect(() => {
        if (isAutoScroll) {
            messageRef.current && messageRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    return {messages, messageRef, scrollHandler}
}