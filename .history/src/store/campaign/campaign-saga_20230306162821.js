import { takeLatest } from "redux-saga/effects";

import {
  campaignAddNew,
  getCampaign,
  // setCampaignDetail,
} from "../campaign/campaign-slice";
import {
  handleAddCampaign,
  handleGetCampaign,
  // handleGetCampaignDetail,
} from "./campaign-handlers";
export default function* campaignSaga() {
  yield takeLatest(campaignAddNew.type, handleAddCampaign);
  yield takeLatest(getCampaign.type, handleGetCampaign);
  // yield takeLatest(setCampaignDetail.type, handleGetCampaignDetail);
}
