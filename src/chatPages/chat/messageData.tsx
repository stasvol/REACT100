import React from "react";
import {Avatar} from "antd";

import {chatMessageType} from "../../api/api-chat";

const MessageData: React.FC<{ message: chatMessageType }> =
    ({message: {photo, userName, message}}) => (
        <>
            <Avatar src={photo}/>
            <b>{userName}</b>
            <br/>
            <i>{message}</i>
            <hr/>
        </>
    )

export default MessageData