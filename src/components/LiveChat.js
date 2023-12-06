import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/liveChatSlice";
import { generateRandomNames } from "../utils/helper";
import { getRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMsgs = useSelector((store) => store.liveChat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling

      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: getRandomMessage(),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);


  const handleSend = () => {
    if (liveMessage.trim() !== "") {
      dispatch(
        addMessage({
          name: "RASHII1996", // Replace with the actual user's name or get it from somewhere
          message: liveMessage,
        })
      );
      setLiveMessage(""); // Clear the input field after sending the message
    }
  };

  return (
    <div>
      <div className=" h-[600px] ml-2 p-2 border border-gray-400 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMsgs.map((c, index) => (
            <ChatMessage name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form className="my-2 ml-2" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
        <input
          className="border border-slate-600 w-96 rounded-sm px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="border border-slate-600 mx-2 px-1 bg-green-100 rounded-md text-green-900">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
