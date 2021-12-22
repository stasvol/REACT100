import React from "react";

import {useMessages} from "../../hock/useMessages";
import {chatMessageType} from "../../api/api-chat";
import MessageData from "./messageData";

import classes from '../chatPage.module.css'

const Messages: React.FC = () => {
    const { messages, messageRef, scrollHandler} = useMessages()

    return <div className={classes.scroll} onScroll={scrollHandler}>
        {
            messages.map((message: chatMessageType, id) => <MessageData key={id} message={message} />)
        }
        <div ref={messageRef}></div>
    </div>
}

export default Messages