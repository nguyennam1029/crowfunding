import Gap from "components/common/Gap";
import Heading from "components/common/Heading";

import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin, getUser } from "store/auth/auth-slice";
import { getCampaign } from "store/campaign/campaign-slice";
import { v4 } from "uuid";
const DashboardPage = () => {
  const { campaigns } = useSelector((state) => state.campaign);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampaign());

    // dispatch(getUser());
  }, [dispatch]);

  return (
    <Fragment>
      <Heading number={4}>Your campaign</Heading>
      {campaigns.slice(1, 2).map((item) => (
        <CampaignFeature key={item.id} item={item}></CampaignFeature>
      ))}

      <Gap></Gap>
      <Heading>Popular campaign</Heading>
      <CampaignGrid>
        {campaigns.map((item) => (
          <CampaignItem key={item.id} item={item}></CampaignItem>
        ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading>Recent campaign</Heading>
      <CampaignGrid>
        {campaigns.slice(3, 7).map((item) => (
          <CampaignItem key={item.id} item={item}></CampaignItem>
        ))}
      </CampaignGrid>
    </Fragment>
  );
};

export default DashboardPage;