import authReducer from "./auth/auth-slice";
import campaignReducer from "./auth/campaign-slice";

const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
  auth: authReducer,
  campaign: campaignReducer,
});
