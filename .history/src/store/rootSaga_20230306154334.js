import authSaga from "./auth/auth-saga";
import { all, fork } from "redux-saga/effects";
import campaignSaga from "./campaign/campaign-saga";

export default function* rootSaga() {
  yield all([fork(authSaga, campaignSaga)]);
}
