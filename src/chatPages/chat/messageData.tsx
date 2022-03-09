import React from 'react';
import { Avatar } from 'antd';

import { ChatMessageApiType } from '../../api/api-chat';

type MessagePropsType = { message: ChatMessageApiType };

const MessageData: React.FC<MessagePropsType> = ({
  message: { photo, userName, message },
}): React.ReactElement => (
  <>
    <Avatar src={photo} />
    <b>{userName}</b>
    <br />
    <i>{message}</i>
    <hr />
  </>
);

export default MessageData;
