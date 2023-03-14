import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import {
  requestAddCampaign,
  requestDeleteCampaign,
  requestGetCampaign,
} from "./campaign-requests";
import { setCampaign } from "./campaign-slice";

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

function* handleDeleteCampaign({ payload }) {
  console.log("id", payload);
  try {
    const response = yield call(requestDeleteCampaign, payload);
    // console.log("response ", response);
    // yield put(deleteCampaign(id));
  } catch (error) {
    console.log(error);
  }
}

export { handleAddCampaign, handleGetCampaign, handleDeleteCampaign };
