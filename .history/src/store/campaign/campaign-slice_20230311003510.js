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
      console.log(`action.payload = ${action.payload}`); // returns correct id
      state.campaigns.filter((item) => item.id !== action.payload);
    },
  },
});

export const { campaignAddNew, getCampaign, setCampaign, deleteCampaign } =
  campaignSlice.actions;
export default campaignSlice.reducer;
