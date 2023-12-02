import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch(); //Hook coming from react-redux library

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
   
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={()=>toggleMenuHandler()}
          className="h-12 cursor-pointer"
          alt="⬇️"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <a href="/">
        <img
          className="h-12 mx-2"
          alt="Youtube-Logo"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
        />
        </a>
      </div>

      <div className="col-span-10 px-10 ">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray px-5 py-2 bg-gray-100 rounded-r-full">
          🔍
        </button>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="User-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtQAf_n0Oyf3Mm5Ylael8x1hYDQFl4lqQAw&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Head;
