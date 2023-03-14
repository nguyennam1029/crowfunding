import authReducer from "./auth/auth-slice";
import campaignReducer from "./campaign/campaign-slice";
import { connectRouter } from "connected-react-router";
import { history } from "utils/history";

const { combineReducers } = require("@reduxjs/toolkit");
export const reducer = combineReducers({
  auth: authReducer,
  campaign: campaignReducer,
  router: connectRouter(history),
});
