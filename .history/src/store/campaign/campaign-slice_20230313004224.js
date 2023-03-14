const { createSlice } = require("@reduxjs/toolkit");

const campaignSlice = createSlice({
  name: "campaign",
  initialState: {
    campaigns: [],
    query: "",
    limit: 2,
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
    updateCampaign: (state, action) => {
      const newCampaign = action.payload;
      const campaignIndex = state.campaigns.findIndex(
        (item) => item.id === newCampaign.id
      );
      if (campaignIndex >= 0) {
        state.campaigns[campaignIndex] = newCampaign;
      }
    },
    setQuery: (state, action) => ({
      ...state,
      query: action.payload,
    }),
    setLimit: (state, action) => ({
      ...state,
      limit: state.limit + action.payload,
    }),
  },
});

export const {
  campaignAddNew,
  getCampaign,
  setCampaign,
  deleteCampaign,
  updateCampaign,
  setQuery,
} = campaignSlice.actions;
export default campaignSlice.reducer;
