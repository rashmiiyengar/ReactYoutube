import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

import Like from "./Like";
import { selectVedio } from "../utils/vedioSlice";

const WatchPage = () => {
  const selectedVedio = useSelector(selectVedio);
  //console.log(selectedVedio);
  let [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <div className="px-5 ">
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <h1 className="px-5 m-4 font-bold text-xl">{selectedVedio?.snippet?.title}</h1>
      <Like />
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
