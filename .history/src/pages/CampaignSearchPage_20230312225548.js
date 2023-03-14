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
      <div className="flex items-center justify-between">
        <p className="lg:flex-1 lg:text-center lg:text-6 text-base text-text2 ">
          524 Projects Found
        </p>
        <div className="flex items-center justify-between py-2 px-4 gap-1 border border-text3 rounded my-6 lg:my-8">
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
    </div>
  );
};

export default CampaignSearchPage;
