import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen)
    return (
      <div className="p-5 shadow-lg w-20 h-screen">
        <ul>
          <div className="flex bg-slate-200 rounded-md mt-4">
          <Link to="/"> <li>
              <HomeIcon />
            </li></Link>
          </div>
          <div className="flex rounded-md mt-4">
            <li>
              <SubscriptionsIcon />
            </li>
          </div>
        </ul>
      </div>
    );
  //Early Return

  return (
    <div className="p-5 shadow-lg w-48 h-screen">
      <ul>
        <div className="flex bg-slate-200 rounded-md mt-4">
         <Link to="/"> <li>
            <HomeIcon />
          </li>
          <li className="ml-12 ">Home</li>
          </Link>
        </div>

        <div className="flex rounded-md mt-4">
          <li>
            <SubscriptionsIcon />
          </li>
          <li className="ml-6">Subscriptions</li>
        </div>
      </ul>
      <h3 className="font-bold pt-5">Explore</h3>
      <ul>
        <li>Music</li>

        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h3 className="font-bold pt-5">Watch Later</h3>
      <ul>
        <li>Music</li>

        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
