const { createSlice } = require("@reduxjs/toolkit");

const campaignSlice = createSlice({
  name: "campaign",
  initialState: {
    campaigns: [],
    campaign: {},
  },
  reducers: {
    campaignAddNew: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    setCampaign: (state, action) => ({
      ...state,
      campaigns: action.payload,
    }),
    getCampaign() {},
    setCampaignDetail: (state, action) => ({
      ...state,
      campaign: action.payload,
    }),
  },
});

export const { campaignAddNew, getCampaign, setCampaign, setCampaignDetail } =
  campaignSlice.actions;
export default campaignSlice.reducer;
