import React from 'react';
import { Avatar } from 'antd';

import { ChatMessageApiType } from '../../api/api-chat';

const MessageData: React.FC<{ message: ChatMessageApiType }> = ({
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
