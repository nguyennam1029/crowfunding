import authReducer from "./auth/auth-slice";
import campaignReducer from "./campagin/campaign-slice";

const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
  auth: authReducer,
  campaign: campaignReducer,
});
