import React from "react";

const ButtonCustom = ({ name }) => {
  return (
    <div>
      <button className="px-5 m-2 bg-gray-200 rounded-md">{name}</button>
    </div>
  );
};

export default ButtonCustom;
