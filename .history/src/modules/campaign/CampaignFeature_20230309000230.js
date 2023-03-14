import React, { useEffect } from "react";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignFeature = ({ item }) => {
  return (
    <div className="flex items-center gap-x-[30px] w-full max-w-[1048px]">
      <CampImage
        imageUrl={item?.featured_image?.medium}
        className="h-[266px] flex-1"
      ></CampImage>
      <div className="flex-1 max-w-[435px]">
        <CampCategory text={item?.category} className="text-sm"></CampCategory>
        <CampTitle className="mb-4 text-xl font-bold">{item?.title}</CampTitle>
        <CampDesc className="mb-6 text-sm">{item?.short_description}</CampDesc>
        <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
          <div className="w-2/4 h-full rounded-full bg-primary"></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
          <CampMeta
            size="big"
            text={`Raised of ${item?.goal}`}
            number={item?.goal}
          ></CampMeta>
          <CampMeta
            size="big"
            text="Total backers"
            number={item?.amount}
          ></CampMeta>
          <CampMeta size="big"></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
