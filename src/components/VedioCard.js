import React from "react";

const VedioCard = ({ info }) => {
  //console.log(info);
  if (!info) {
    return <div>Info is undefined</div>;
  }
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="Thumnail" />
      <ul>
        <li className="font-bold py-2">{title} </li>
        <li>{channelTitle} </li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VedioCard;
