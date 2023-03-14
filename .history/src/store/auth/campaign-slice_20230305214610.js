const { createSlice } = require("@reduxjs/toolkit");

const campaignSlice = createSlice({
  name: "campaign",
  initialState: {
    campaigns: [],
  },
  reducers: {
    campaignAddNew: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    getCampaign() {},
  },
});

export const { campaignAddNew, getCampaign } = campaignSlice.actions;
export default campaignSlice.reducer;
