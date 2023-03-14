import { defaultImage } from "constants/global";
import React from "react";

const CampImage = ({ featured_image }) => {
  console.log(featured_image);
  return (
    <div className="h-[158px]">
      <img
        src={image}
        alt=""
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};

export default CampImage;
