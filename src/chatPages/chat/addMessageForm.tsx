import React from "react";
import {Button, Col, Input} from "antd";

import {useFormMessage} from "../../hock/useFormMessage";
import classes from "../chatPage.module.css";

const AddMessageForm: React.FC = () => {
    const { message, status, changeClick, sendMessageHandler } = useFormMessage()

    return(
        <>
        <Col>
            <Input.TextArea onChange={changeClick} value={message}/>
        </Col>
        <Col>
            <Button className={classes.button} disabled={status !== 'ready'} onClick={sendMessageHandler}>Send</Button>
        </Col>
    </>
    )
}

export default AddMessageForm