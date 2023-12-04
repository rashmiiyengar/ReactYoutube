import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    //make an api call after every key press
    //but if diff btw 2 api calls is < 200ms
    //DECLINE the API Call

    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  /*
Debouncing
key-i 
render the component
api call useeffect
start timer => make api call after 200 ms

key -ip
-destroy the component - useEffect return method 
-re-render component
useEffect() 
start timer => make api call after 200 ms- New timer this time

settimeout(200) make an API Call
*/

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    //console.log(json);
  };

  const dispatch = useDispatch(); //Hook coming from react-redux library

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
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
        <div className="flex items-center">
          <input
            className="px-2 py-1 w-[43rem] border border-gray-400  rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
          <button className="border border-gray px-5 py-1 bg-gray-100 rounded-r-full">
            <SearchIcon />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 w-[43rem] shadow-lg rounded-xl border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className=" py-2 shadow-sm hover:bg-gray-100">
                  <SearchIcon />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <AccountCircleIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Head;
