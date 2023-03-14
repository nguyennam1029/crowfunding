import { defaultImage } from "constants/global";
import React from "react";

const CampImage = ({ className = "h-[158px]", image }) => {
  const { imageUrl } = image;
  console.log(imageUrl);
  return (
    <div className={className}>
      <img
        src={image}
        alt=""
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};

export default CampImage;
