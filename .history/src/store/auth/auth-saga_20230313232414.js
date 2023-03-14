import { fork, takeLatest } from "redux-saga/effects";
import { handleAuthRegister, watchLoginFlow } from "./auth-handlers";
import { authRegister } from "./auth-slice";
export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield fork(watchLoginFlow);
  // yield takeLatest(authLogin.type, handleAuthLogin);
}
