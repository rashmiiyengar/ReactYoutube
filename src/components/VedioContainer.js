import React, { useEffect, useState } from "react";
import { YOUTUBE_VEDIOS_API } from "../utils/constants";
import VedioCard from "./VedioCard";
import { Link } from "react-router-dom";

const VedioContainer = () => {
  const [vedios, setVedios] = useState([]);

  useEffect(() => {
    getVedios();
  }, []);

  const getVedios = async () => {
    const data = await fetch(YOUTUBE_VEDIOS_API);
    const json = await data.json();

    //console.log(json);
    setVedios(json.items);
  };
  return (
    <div className="flex flex-wrap justify-between m-2">
      {vedios.map((vedio) => (
       <Link to={"/watch?v="+vedio.id}> <VedioCard key={vedio.id} info={vedio} /></Link>
      ))}
    </div>
  );
};

export default VedioContainer;
