import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <AccountCircleIcon/>
      <span className='font-bold px-2'>{name} :  </span>
      <span> {message}</span>
    </div>
  )
}

export default ChatMessage
