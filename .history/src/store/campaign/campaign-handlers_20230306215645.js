import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import {
  requestAddCampaign,
  requestGetCampaign,
  requestGetCampaignDetail,
} from "./campaign-requests";
import { setCampaign, setCampaignDetail } from "./campaign-slice";

function* handleAddCampaign({ payload }) {
  try {
    const response = yield call(requestAddCampaign, payload);
    if (response.status === 201) {
      toast.success("add new campaign success");
    }
  } catch (error) {
    toast.error("don't add new campaign");
  }
}

function* handleGetCampaign() {
  try {
    const response = yield call(requestGetCampaign);
    const { data } = response;
    yield put(setCampaign(data));
  } catch (error) {
    console.log(error);
  }
}

function* handleGetCampaignDetail({ payload }) {
  console.log("payload", payload);
  try {
    const response = yield call(requestGetCampaignDetail, payload);
    yield put(setCampaignDetail(response.data));
  } catch (error) {
    console.log(error);
  }
}

export { handleAddCampaign, handleGetCampaign, handleGetCampaignDetail };
