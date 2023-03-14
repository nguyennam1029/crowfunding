import React, { useEffect } from "react";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCampaign, setLimit, setQuery } from "store/campaign/campaign-slice";
import { Button } from "components/button";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
const CampaignSearchPage = () => {
  const dispatch = useDispatch();
  const { campaigns, query } = useSelector((state) => state.campaign);

  const { q } = useParams();
  useEffect(() => {
    dispatch(setQuery(q));

    dispatch(getCampaign(query));
  }, [dispatch, query]);
  const handleSeeMore = () => {
    // dispatch(setLimit(2));
  };
  return (
    <div>
      <div className="relative h-[120px] w-full lg:h-[200px] flex items-center justify-center rounded-3xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 opacity-40"></div>
        <img
          srcset="/banner.png 2x"
          alt=""
          className="object-cover w-full h-full"
        />
        <h1 className="absolute text-xl font-bold text-white top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 lg:text-4xl">
          Education
        </h1>
      </div>
      <div className="flex items-center justify-between">
        {campaigns.length > 0 ? (
          <p className="text-base font-bold lg:flex-1 lg:text-center lg:text-2xl text-text2">
            {campaigns.length} Projects Found
          </p>
        ) : (
          <p className="text-base font-bold lg:flex-1 lg:text-center lg:text-2xl text-text2">
            No results found for keyword{" "}
            <span className="text-lg italic font-semibold lg:text-3xl text-primary">
              " {query} "
            </span>
          </p>
        )}

        <div className="flex items-center justify-between gap-1 px-4 py-2 my-6 text-sm border rounded lg:text-lg border-text4 lg:my-8">
          <span>Trending</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
      <CampaignGrid>
        {campaigns.length > 0 &&
          campaigns.map((item) => (
            <CampaignItem key={item.id} item={item}></CampaignItem>
          ))}
      </CampaignGrid>
      <Button
        kind="ghost"
        className="px-8 mx-auto mt-10"
        onClick={handleSeeMore}
      >
        <span>See more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </Button>

      {/* ============================== */}
    </div>
  );
};

export default CampaignSearchPage;
