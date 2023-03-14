import { fork, takeLatest } from "redux-saga/effects";
import {
  handleAuthRegister,
  handleGetCurrentUser,
  watchLoginFlow,
} from "./auth-handlers";
import { authRegister, getUser } from "./auth-slice";
export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(getUser.type, handleGetCurrentUser);

  yield fork(watchLoginFlow);
  // yield takeLatest(authLogin.type, handleAuthLogin);
}
