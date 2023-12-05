import React, { useState } from "react";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ShareIcon from "@mui/icons-material/Share";
import { selectVedio } from "../utils/vedioSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Modal } from "@mui/material";



const Like = () => {
  const selectedVedio = useSelector(selectVedio);
  const { viewCount, likeCount } = selectedVedio?.statistics || {};
  const [likes, setLikes] = useState(likeCount || 0);
  const [dislike,setDislike] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLike = () => {
    setLikes((likes) => Number(likes) + 1);
  };

  const handleDislike = () => {
    // Implement dislike logic if needed
    setDislike((dislike) => Number(dislike) + 1);
  };

  const handleShare = () => {
    setIsModalOpen(true);
  };


  return (
    <div className="flex justify-between p-6 m-6" style={{ width: "1000px" }}>
      <div className="flex col-span-1 font-bold text-gray-800">
        {viewCount} Views
      </div>
      <div>
        <button
          onClick={handleLike}
          className="px-3 py-1 bg-gray-100 text-black hover:bg-gray-200 rounded-l-full"
        >
          <ThumbUpAltOutlinedIcon fontSize="large" /> {likes}
        </button>
        <button
          onClick={handleDislike}
          className="px-3 py-1 bg-gray-100 mr-2 text-black hover:bg-gray-200 rounded-r-full"
        >
          <ThumbDownAltOutlinedIcon fontSize="large" /> {dislike}
        </button>
        <button
          onClick={() => handleShare()}
          className="px-3 py-1 bg-gray-100 text-black hover:bg-gray-200 rounded-full"
        >
          <ShareIcon fontSize="large" />
        </button>
      </div>
      
    </div>
  );
};

export default Like;