import React from "react";

const CampImage = ({ imageUrl, className = "h-[158px]" }) => {
  return (
    <div className={className}>
      <img
        src={imageUrl}
        alt=""
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};

export default CampImage;
