
export type chatMessageType ={
    message: string
    photo:  string
    userId: number
    userName: string
}
type subscribeType = (message: chatMessageType[]) => void
type eventNamesType = 'messages-received' |  'status - changed'
export type statusType = 'pending'|'ready'|'error'
type messagesReceivedSubscribeType = (messages:chatMessageType[]) => void
type statusChangedSubscribeType = (status:statusType) => void


let subscribers = {
    'messages-received':[] as messagesReceivedSubscribeType[],
    'status - changed':[]  as statusChangedSubscribeType[]
}


export const chatApi ={

     start(){
         createWS()
     },
     stop(){
         cleanUp()
         // webSoc && webSoc.removeEventListener('close',closeHandler);
         // webSoc && webSoc.removeEventListener('message',messagesHandler);
         webSoc && webSoc.close();
         // subscribers=[]
     },

    subscribe(eventNames:eventNamesType,callback:messagesReceivedSubscribeType | statusChangedSubscribeType) {
         // @ts-ignore
        subscribers[eventNames].push(callback)
        // @ts-ignore
        return subscribers[eventNames].filter(s => s !== callback)
    },
    unsubscribe(eventNames:eventNamesType,callback:messagesReceivedSubscribeType | statusChangedSubscribeType) {
        // @ts-ignore
       return subscribers[eventNames].filter(s => s !== callback)
   },
   sendMessageWs(message:string) {

       webSoc && webSoc.send(message)
}

}

let webSoc: WebSocket;

const closeHandler =()=>{
    console.log("CLOSE")
    changeSubscribeStatus('pending')
    setTimeout(createWS,3000)
}

const messagesHandler= (e:MessageEvent)=>{
    console.log(2, JSON.parse(e.data))
    const newMessage = JSON.parse(e.data)
   subscribers['messages-received'].forEach(s => s(newMessage))
}

const openHandler= ()=>{
    changeSubscribeStatus('ready')
}
const errorHandler= ()=>{
    changeSubscribeStatus('error')
    console.error("REFRESH  PAGE")
}


 const cleanUp = () => {
     webSoc && webSoc.removeEventListener('close',closeHandler)
     webSoc && webSoc.removeEventListener('message',messagesHandler)
     webSoc && webSoc.removeEventListener('open',openHandler)
     webSoc && webSoc.removeEventListener('error',errorHandler)
 }

  const changeSubscribeStatus =(status:statusType)=>{
    subscribers["status - changed"].forEach(s => s(status))
  }

function createWS() {
    if (webSoc!==null) {
        // webSoc && webSoc.removeEventListener('close',closeHandler)
        // webSoc && webSoc.removeEventListener('message',messagesHandler)
        cleanUp()
        webSoc && webSoc.close()
    }
    webSoc = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    changeSubscribeStatus('pending')
    webSoc && webSoc.addEventListener('close',closeHandler);
    webSoc && webSoc.addEventListener('message',messagesHandler)
    webSoc && webSoc.addEventListener('open',openHandler)
    webSoc && webSoc.addEventListener('error',errorHandler)
    // setWs(webSoc);
}