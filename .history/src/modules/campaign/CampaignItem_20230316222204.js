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
    <div className="transition duration-150 ease-in-out shadow-lg rounded-2xl hover:-translate-y-2 hover:shadow-xl">
      <CampImage imageUrl={item?.featured_image?.url}></CampImage>
      <div className="px-5 py-4">
        <CampCategory text={item?.category}></CampCategory>
        <Link to={`/campaign/${item?.id}`}>
          <CampTitle>{item?.title}</CampTitle>
          <CampDesc>{item?.short_description}</CampDesc>
          <div className="flex items-start justify-between mb-5 gap-x-5">
            <CampMeta number={item?.goal}></CampMeta>
            <CampMeta number={item?.amount}></CampMeta>
          </div>
        </Link>
        <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
