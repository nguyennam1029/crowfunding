import { defaultImage } from "constants/global";
import React from "react";

const CampImage = ({ image }) => {
  // console.log(featured_image);
  console.log("image", image);
  return (
    <div className="h-[158px]">
      <img src="" alt="" className="object-cover w-full h-full rounded-2xl" />
    </div>
  );
};

export default CampImage;
