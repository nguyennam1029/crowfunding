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
    setCampaign: (state, action) => ({
      ...state,
      campaigns: action.payload,
    }),
    getCampaign() {},
    // setCampaignDetail: (state, action) => ({
    //   ...state,
    //   campaignDetail: action.payload,
    // }),
  },
});

export const { campaignAddNew, getCampaign, setCampaign } =
  campaignSlice.actions;
export default campaignSlice.reducer;
