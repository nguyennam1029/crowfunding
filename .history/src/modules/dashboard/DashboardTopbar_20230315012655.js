import { Button } from "components/button";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "store/auth/auth-slice";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <Link to="/" className="inline-block">
          <img srcSet="/logo.png 2x" alt="crowfunding-app" />
        </Link>
        <div className=" max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund></DashboardFund>
        <Button
          className="px-7"
          type="button"
          href="/start-campaign"
          kind="secondary"
        >
          Start a campaign
        </Button>
        <div className="relative flex items-center justify-center gap-3">
          <img
            src={currentUser?.avatar}
            alt="crowfunding-app"
            className="object-cover w-[52px] h-[52px] rounded-full"
          />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <div className="absolute w-[360px]  right-0 top-[74px] p-4 z-10 border border-text4 rounded-xl shadow-2xl bg-white">
            <div className="flex flex-col items-center justify-center gap-y-4">
              <img
                src={currentUser?.avatar}
                alt=""
                className="object-cover w-[82px] h-[82px] rounded-full"
              />
              <h3>{currentUser?.fullName}</h3>
              <span>Trang cá nhân của bạn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopbar;
