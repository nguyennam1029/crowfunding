const { createSlice } = require("@reduxjs/toolkit");

const campaignSlice = createSlice({
  name: "campaign",
  initialState: {
    campaigns: [],
    hits: [],
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
  },
});

export const { campaignAddNew, getCampaign } = campaignSlice.actions;
export default campaignSlice.reducer;
