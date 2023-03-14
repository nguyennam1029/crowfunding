import Gap from "components/common/Gap";
import Heading from "components/common/Heading";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin } from "store/auth/auth-slice";
import { getCampaign } from "store/campaign/campaign-slice";
import { v4 } from "uuid";
const DashboardPage = () => {
  const { campaigns } = useSelector((state) => state.campaign);
  const { currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    dispatch(getCampaign());
    // setTimeout(
    //   dispatch(
    //     authLogin({
    //       name: user?.displayName,
    //       email: user?.email,
    //       avatar: user?.photoURL,
    //       accessToken: user?.accessToken,
    //       id: user?.uid,
    //     })
    //   ),
    //   2000
    // );
  }, [dispatch]);

  // if (user !== null) {
  //   // The user object has basic properties such as display name, email, etc.
  //   const displayName = user.displayName;
  //   const email = user.email;
  //   const accessToken = user.accessToken;
  //   const photoURL = user.photoURL;
  //   const uid = user.uid;
  //    useEffect(() => {
  //     dispatch(
  //     authLogin({
  //       displayName,
  //       email,
  //       photoURL,
  //       accessToken,
  //       uid,
  //     }))
  //    }, [dispatch])

  // }

  // Handle firebase auth changed
  useEffect(() => {
    dispatch(authLogin(currentUser));
    // onAuthStateChanged(auth, (currentUser) => {
    // if (currentUser) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // console.log("curent ", currentUser.displayName);
    // dispatch(
    //   authLogin({
    //     name: user?.displayName,
    //     email: user?.email,
    //     avatar: user?.photoURL,
    //     accessToken: user?.accessToken,
    //     id: user?.uid,
    //   })
    // );

    // ...
    // } else {
    // User is signed out
    // ...
    // console.log("loi");
    // }
    // });
  }, []);

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
