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
    deleteCampaign: (state, action) => {
      const newCampaigns = state.campaigns.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, campaigns: newCampaigns };
    },
  },
});

export const { campaignAddNew, getCampaign, setCampaign, deleteCampaign } =
  campaignSlice.actions;
export default campaignSlice.reducer;
