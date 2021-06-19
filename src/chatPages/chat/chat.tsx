import React, {useEffect, useState} from 'react'
import {Avatar, Button, Col, Input, Row} from "antd";
import TextArea from "antd/es/input/TextArea";
import {chatMessageType} from "../../Api/api-chat";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessageListening, stopMessageListening} from '../../redux/chat_reducer';
import {rootReducersType} from "../../redux/reduxStore";





 const ChatPage:React.FC =()=>{
    return <div>
        <Chat/>
    </div>
}

const Chat:React.FC =()=> {
    // const [ws, setWs] = useState<WebSocket | null>(null)
    //
    // useEffect(()=>{
    //     let webSoc: WebSocket;
    //
    //     const closeHandler =()=>{
    //         console.log("CLOSE")
    //         setTimeout(createWS,3000)
    //     }
    //
    //     function createWS() {
    //         if (webSoc!==null) {
    //             webSoc && webSoc.removeEventListener('close',closeHandler)
    //             webSoc && webSoc.close()
    //         }
    //          webSoc = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    //         ws && ws.addEventListener('close',closeHandler)
    //         setWs(webSoc);
    //     }
    //
    //
    //     createWS()
    //     return () =>{
    //         webSoc.removeEventListener('close',  closeHandler)
    //         webSoc.close()
    //     }
    // },[]);
    // // useEffect(()=>{
    // //   ws && ws.addEventListener('close',()=>{
    // //         console.log("CLOSE")
    // //     })
    // // },[ws]);
    // return <div>
    //     <Messages ws={ ws }/>
    //     <AddMessageForm ws={ ws }/>
    // </div>
    const dispatch = useDispatch()
    const status = useSelector((state:rootReducersType) => state.chat.status)
    useEffect(()=>{
        dispatch(startMessageListening ())
        return () => {
            dispatch(stopMessageListening())
        }
    },[])
    return <div>
        {status === null

            ? <span>ERROR  APP</span>
            :
            <>
            <Messages/>
            <AddMessageForm />
            </>
        }
    </div>
}

const Messages:React.FC =()=> {

    // const [messages, setMessage] = useState<chatMessageType[]>([])
  const messages = useSelector((state:rootReducersType) => {

      return state.chat.messages;
});
    console.log(messages)

    // useEffect(()=>{
    //    let messagesHandler= (e:MessageEvent)=>{
    //        setMessage(prevMessages => [...prevMessages,...JSON.parse(e.data)])
    //    }
    //   ws && ws.addEventListener('message',messagesHandler)
    //     return () => {
    //         ws && ws.removeEventListener('message',messagesHandler)
    //         ws && ws.close()
    //     }
    // },[ws])

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
    // const [readyStatus, setReadyStatus] = useState<'pending'|'ready'>('pending')
    const dispatch = useDispatch()
    const status = useSelector((state:rootReducersType)=>{
        return state.chat.status
    })
    // useEffect(()=>{
    //     let closeOpenHandler = ()=>{
    //         setReadyStatus('ready')
    //     }
    //     ws && ws.addEventListener('open',closeOpenHandler)
    //
    //     return () =>{
    //         ws && ws.removeEventListener('open',closeOpenHandler)
    //         ws && ws.close()
    //     }
    //
    // },[ws])

    const sendMessageHandler =()=> {

        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        // ws && ws.send(message)
        setMessage('')
    }
    return <div>
            <Col>
          <TextArea  onChange={(e)=>{setMessage(e.target.value)}} value={message}/>
            </Col>
            <Col>
        <Button disabled={status === 'ready' +
        ''} onClick={sendMessageHandler}>Send</Button>
            </Col>
    </div>
}


export default ChatPage


