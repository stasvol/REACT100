import React, {useEffect, useState} from 'react'
import {Avatar, Button, Col, Input, Row} from "antd";
import TextArea from "antd/es/input/TextArea";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

type chatMessageType ={
    message: string
    photo:  string
    userId: number
    userName: string
}


 const ChatPage:React.FC =()=>{
    return <div>
        <Chat/>
    </div>
}

const Chat:React.FC =()=> {

    return <div>
        <Messages/>
        <AddMessageForm/>
    </div>
}

const Messages:React.FC =()=> {
    const [messages, setMessage] = useState<chatMessageType[]>([])

    useEffect(()=>{
        ws.addEventListener('message',(e)=>{
            setMessage(prevMessage => [...prevMessage,...JSON.parse(e.data)])
        })
    },[])

    return <div style={{height:300, overflowY:"auto"}}>
        {
            messages.map((m,i)=> <Message key={i} message={m}/>)
        }
    </div>
}

const Message:React.FC<{message:chatMessageType}> =({message})=> {
    // const message= null
    //     {
    //     src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    //     author: 'Artur',
    //     text: 'Hello'
    // }
    return <div>
        <Avatar src={message.photo}/>
         <b>{message.userName}</b>
         <br/>
        <i>{message.message}</i>
        <hr/>
    </div>
}

const AddMessageForm:React.FC =()=> {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending'|'ready'>('pending')

    useEffect(()=>{
        ws.addEventListener('open',()=>{
            setReadyStatus('ready')
        })

    },[])

    const sendMessage =()=> {
        if (!message) {
            return
        }
        ws.send(message)
        setMessage('')
    }
    return <div>
            <Col>
          <TextArea  onChange={(e)=>{setMessage(e.target.value)}} value={message}/>
            </Col>
            <Col>
        <Button disabled={readyStatus !== 'ready'} onClick={sendMessage}>Send</Button>
            </Col>
    </div>
}


export default ChatPage


