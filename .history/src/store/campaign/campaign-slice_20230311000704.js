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
    setCampaignDetail: (state, action) => ({
      ...state,
      campaignDetail: action.payload,
    }),
    deleteCampaign: (state, action) => {
      console.log("state ", state);
      // const newstate = state.filter((i) => i.id !== action.payload);
    },
  },
});

export const {
  campaignAddNew,
  getCampaign,
  setCampaign,
  setCampaignDetail,
  deleteCampaign,
} = campaignSlice.actions;
export default campaignSlice.reducer;
