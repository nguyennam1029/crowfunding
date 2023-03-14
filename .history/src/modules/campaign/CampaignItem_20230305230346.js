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
  const {
    title,
    short_description,
    goal,
    amount,
    prefilled,
    video,
    category,
    featured_image,
    country,
  } = item;

  return (
    <div>
      <CampImage imageUrl={featured_image?.url}></CampImage>
      <div className="px-5 py-4">
        <CampCategory></CampCategory>
        <CampTitle>{item?.title}</CampTitle>
        <CampDesc>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampDesc>
        <div className="flex items-start justify-between mb-5 gap-x-5">
          <CampMeta></CampMeta>
          <CampMeta></CampMeta>
        </div>
        <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
