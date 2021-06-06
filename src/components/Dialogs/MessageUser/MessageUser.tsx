import React from "react";
import classes from './MessageUser.module.css';

type propsType={
    message: string,
    id:number
}

const MessageUser:React.FC<propsType> = (props) => {
    return (
        <div>
            <ul className={classes.messageUser}>
                <li>{props.message}</li>
            </ul>
        </div>
    )
}

export default  MessageUser