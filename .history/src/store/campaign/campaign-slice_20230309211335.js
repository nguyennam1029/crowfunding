const { createSlice } = require("@reduxjs/toolkit");

const campaignSlice = createSlice({
  name: "campaign",
  initialState: {
    campaigns: [],
    campaignDetail: {},
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
      campaignDetail: action.payload,
    }),
    deleteCampaign: (state, action) => console.log("action", action.payload),
  },
});

export const { campaignAddNew, getCampaign, setCampaign, setCampaignDetail } =
  campaignSlice.actions;
export default campaignSlice.reducer;
