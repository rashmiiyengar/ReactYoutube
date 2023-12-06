import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/liveChatSlice';
import { generateRandomNames } from '../utils/helper';
import { getRandomMessage } from '../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();

    const chatMsgs = useSelector(store=>store.liveChat.messages);
    
    useEffect(()=>{
       const i = setInterval(()=>{
        //API Polling
        console.log("API polling")

        dispatch(addMessage({
            name:generateRandomNames(),
            message:getRandomMessage()
        }));
        },1000)

        return ()=> clearInterval(i)
    },[]);

  return (
    <div className=' h-[600px] ml-2 p-2 border border-gray-400 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
     {chatMsgs.map((c,index)=><ChatMessage name={c.name} message={c.message}/>)}
    </div>
  )
}

export default LiveChat
