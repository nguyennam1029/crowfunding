import { takeLatest } from "redux-saga/effects";

import { campaignAddNew, getCampaign } from "../campaign/campaign-slice";
import { handleAddCampaign, handleGetCampaign } from "./campaign-handlers";
export default function* authSaga() {
  yield takeLatest(campaignAddNew.type, handleAddCampaign);
  yield takeLatest(getCampaign.type, handleGetCampaign);
}
