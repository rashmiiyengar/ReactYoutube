import React from "react";
import ButtonCustom from "./ButtonCustom";

const ButtonList = () => {
  const list = [
    "All",
    "Hindi Movies",
    "Songs",
    "Kannada Movies",
    "Top Places to Vist",
    "Family and Friends",
    "Culinary art",
    "Indian Street food",
    "California",
    "Lake Taho",
    "Winter in California",
  ];

  return (
    <div className="flex overflow-x-auto scroll-snap-type-[x mandatory]">
      {list.map((name, index) => (
        <div className="flex-none snap-start p-2 border border-gray-300 rounded-md">
          <ButtonCustom key={index} name={name} />
        </div>
      ))}
      {/* <ButtonCustom name="All"/>
      <ButtonCustom name="Hindi Movies"/>
      <ButtonCustom name="Songs"/>
      <ButtonCustom name=/>
      <ButtonCustom name="Top Places to Vist"/>
      <ButtonCustom name="Family and Friends"/>
      <ButtonCustom name="Culinary art"/>
      <ButtonCustom name="Indian Street food"/>
      <ButtonCustom name="California"/> */}
    </div>
  );
};

export default ButtonList;
