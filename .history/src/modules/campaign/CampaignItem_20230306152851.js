import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";
import CampAuthor from "./parts/CampAuthor";
import CampCategory from "./parts/CampCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignItem = ({ item }) => {
  console.log(item.id);
  // const {
  //   title,
  //   short_description,
  //   goal,
  //   amount,
  //   prefilled,
  //   video,
  //   category,
  //   featured_image,
  //   country,
  // } = item;

  return (
    <div>
      <CampImage imageUrl={item?.featured_image?.url}></CampImage>
      <div className="px-5 py-4">
        <CampCategory category={item?.category}></CampCategory>
        <Link to="/">
          <CampTitle>{item?.title}</CampTitle>
          <CampDesc>{item?.short_description}</CampDesc>
          <div className="flex items-start justify-between mb-5 gap-x-5">
            <CampMeta goal={item?.goal}></CampMeta>
            <CampMeta amount={item?.amount}></CampMeta>
          </div>
        </Link>
        <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
