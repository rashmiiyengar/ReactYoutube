import React, { useEffect, useState } from "react";
import { YOUTUBE_VEDIOS_API } from "../utils/constants";
import VedioCard, { AdVedioCard } from "./VedioCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setVedio } from "../utils/vedioSlice";

const VedioContainer = () => {
  const [vedios, setVedios] = useState([]);
  const dispatch= useDispatch();

  useEffect(() => {
    getVedios();
  }, []);

  const getVedios = async () => {
    const data = await fetch(YOUTUBE_VEDIOS_API);
    const json = await data.json();

    //console.log(json);
    setVedios(json.items);
  };
 
  const handleLinkClick = (vedio) => {
    console.log("Link Clicked", vedio);
    dispatch(setVedio(vedio));
  };

  return (
    <div className="flex flex-wrap justify-between m-2">
     {vedios[0]&& <AdVedioCard info={vedios[0]}/>}
      {vedios.map((vedio) => (
      <Link
      key={vedio.id}
      to={{
        pathname: "/watch",
        search: `?v=${vedio.id}`,
        state: { vedio },
      }}
      onClick={() => handleLinkClick(vedio)}
    >
        
          <VedioCard info={vedio} />
        </Link>
      ))}
    </div>
  );
};

export default VedioContainer;
