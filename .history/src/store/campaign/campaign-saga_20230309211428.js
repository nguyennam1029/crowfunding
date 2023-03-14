import { takeLatest } from "redux-saga/effects";

import {
  campaignAddNew,
  deleteCampaign,
  getCampaign,
  setCampaignDetail,
} from "../campaign/campaign-slice";
import {
  handleAddCampaign,
  handleDeleteCampaign,
  handleGetCampaign,
  handleGetCampaignDetail,
} from "./campaign-handlers";
export default function* campaignSaga() {
  yield takeLatest(campaignAddNew.type, handleAddCampaign);
  yield takeLatest(getCampaign.type, handleGetCampaign);
  yield takeLatest(deleteCampaign.type, handleDeleteCampaign);
  yield takeLatest(setCampaignDetail.type, handleGetCampaignDetail);
}
