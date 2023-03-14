import React from "react";

const CampaignSearchPage = () => {
  return (
    <div>
      <div className="relative h-[120px] w-full lg:h-[200px] flex items-center justify-center rounded-3xl overflow-hidden">
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 opacity-40"></div>
        <img
          srcset="/banner.png 2x"
          alt=""
          className="w-full object-cover h-full"
        />
        <h1 className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white text-4xl font-bold">
          Education
        </h1>
      </div>
    </div>
  );
};

export default CampaignSearchPage;
