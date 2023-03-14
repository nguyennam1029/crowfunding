import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import {
  requestAddCampaign,
  requestDeleteCampaign,
  requestGetCampaign,
} from "./campaign-requests";
import { setCampaign, updateCampaign } from "./campaign-slice";
import Swal from "sweetalert2";

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
  try {
    yield call(requestDeleteCampaign, payload);
  } catch (error) {
    console.log(error);
  }
}

function* handleUpdateCampaign({ payload }) {
  try {
    const response = yield call(requestDeleteCampaign, payload);
    yield put(updateCampaign, payload);
    if (response.status === 201) {
      toast.success("add new campaign success");
    }
  } catch (error) {
    console.log(error);
  }
}
export {
  handleAddCampaign,
  handleGetCampaign,
  handleDeleteCampaign,
  handleUpdateCampaign,
};
