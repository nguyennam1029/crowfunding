import authReducer from "./auth/auth-slice";
import campaignReducer from "./campaign/campaign-slice";

const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
  auth: authReducer,
  campaign: campaignReducer,
});
