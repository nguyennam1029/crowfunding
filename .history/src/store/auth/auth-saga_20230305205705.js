import { takeEvery, takeLatest } from "redux-saga/effects";
import handleAuthRegister, {
  handleAddCampaign,
  handleAuthLogin,
} from "./auth-handlers";
import { authLogin, authRegister } from "./auth-slice";
import { campaignAddNew } from "./campaign-slice";
export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  // yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(campaignAddNew.type, handleAddCampaign);
}
