import React, { useEffect } from "react";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCampaign, setLimit, setQuery } from "store/campaign/campaign-slice";
import { Button } from "components/button";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
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
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 opacity-40"></div>
        <img
          srcset="/banner.png 2x"
          alt=""
          className="w-full object-cover h-full"
        />
        <h1 className="absolute text-xl top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white lg:text-4xl font-bold">
          Education
        </h1>
      </div>
      <div className="flex items-center justify-between">
        {campaigns.length > 0 ? (
          <p className="lg:flex-1 lg:text-center lg:text-2xl text-base text-text2 font-bold">
            {campaigns.length} Projects Found
          </p>
        ) : (
          <p className="lg:flex-1 lg:text-center lg:text-2xl text-base text-text2 font-bold">
            No results found for keyword{" "}
            <span className="lg:text-3xl text-lg text-primary font-semibold italic">
              " {query} "
            </span>
          </p>
        )}

        <div className="flex items-center text-sm lg:text-lg justify-between py-2 px-4 gap-1 border border-text3 rounded my-6 lg:my-8">
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
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {campaigns.length > 0 &&
          campaigns.map((item) => (
            <SwiperSlide>
              <CampaignItem key={item.id} item={item}></CampaignItem>
            </SwiperSlide>
          ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default CampaignSearchPage;