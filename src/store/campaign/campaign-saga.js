import { takeLatest } from "redux-saga/effects";

import {
  campaignAddNew,
  deleteCampaign,
  getCampaign,
  updateCampaign,
} from "../campaign/campaign-slice";
import {
  handleAddCampaign,
  handleDeleteCampaign,
  handleGetCampaign,
  handleUpdateCampaign,
} from "./campaign-handlers";
export default function* campaignSaga() {
  yield takeLatest(campaignAddNew.type, handleAddCampaign);
  yield takeLatest(getCampaign.type, handleGetCampaign);
  yield takeLatest(deleteCampaign.type, handleDeleteCampaign);
  yield takeLatest(updateCampaign.type, handleUpdateCampaign);
}
