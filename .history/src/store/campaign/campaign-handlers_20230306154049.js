import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { requestAddCampaign, requestGetCampaign } from "./campaign-requests";
import { setCampaign } from "./campaign-slice";

function* handleAddCampaign({ payload }) {
  console.log("payload", payload);
  try {
    const response = yield call(requestAddCampaign, payload);
    if (response.status === 201) {
      toast.success("add new campaign success");
    }
  } catch (error) {
    toast.error("don't add new campaign");
  }
}

function* handleGetCampaign({ payload }) {
  try {
    const response = yield call(requestGetCampaign);
    const { data } = response;
    yield put(setCampaign(data));
  } catch (error) {
    console.log(error);
  }
}
export { handleAddCampaign, handleGetCampaign };
