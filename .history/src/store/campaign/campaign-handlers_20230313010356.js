import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import {
  requestAddCampaign,
  requestDeleteCampaign,
  requestGetCampaign,
  requestUpdateCampaign,
} from "./campaign-requests";
import { setCampaign, updateCampaign } from "./campaign-slice";

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

function* handleGetCampaign({ payload }) {
  console.log("payload ", payload);
  try {
    const response = yield call(requestGetCampaign, payload, 3);
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
    const response = yield call(requestUpdateCampaign, payload.id, payload);
    yield put(updateCampaign(payload));

    if (response.status === 200) {
      toast.success("add new campaign success");
    }
  } catch (error) {
    console.log(error);
  }
}
// function* handleGetNewCampaigns({ payload }) {
//   console.log("hd qr", payload);
//   yield 1;
//   // try {
//   //   const response = yield call(requestSearchCampaign(payload));
//   //   console.log("search ", response);
//   // } catch (error) {
//   //   console.log(error);
//   // }
// }
export {
  handleAddCampaign,
  handleGetCampaign,
  handleDeleteCampaign,
  handleUpdateCampaign,
};
