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
  const { users } = useSelector((state) => state.auth);
  console.log("user ", users);
  const { currentUser } = useSelector((state) => state.auth);

  console.log("cuu ", currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCampaign());
    dispatch(
      authLogin({
        name: "vcl",
        email: "ccc",
      })
    );
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
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
    </Fragment>
  );
};

export default DashboardPage;
