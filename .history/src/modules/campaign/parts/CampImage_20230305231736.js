import { defaultImage } from "constants/global";
import React from "react";

const CampImage = ({ imageUrl }) => {
  return (
    <div className="h-[158px]">
      <img
        src={imageUrl}
        alt=""
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};

export default CampImage;
