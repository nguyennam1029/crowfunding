import { Button } from "components/button";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  const { currentUser } = useSelector((state) => state.auth);

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
        {/* <div className="w-[52px] h-[52px] rounded-full"> */}
        <img
          src={currentUser?.avatar}
          alt="crowfunding-app"
          className="object-cover w-[52px] h-[52px] rounded-full"
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default DashboardTopbar;
