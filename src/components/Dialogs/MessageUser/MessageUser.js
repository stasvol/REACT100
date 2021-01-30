import React from "react";
import classes from './MessageUser.module.css';

const MessageUser = (props) => {
    return (
        <div>
            <ul className={classes.messageUser}>
                <li>{props.message}</li>
            </ul>
        </div>
    )
}

export default  MessageUser