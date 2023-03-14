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
      state = state.filter((i) => i.id !== action.payload);
      return state;
    },
  },
});

export const { campaignAddNew, getCampaign, setCampaign, deleteCampaign } =
  campaignSlice.actions;
export default campaignSlice.reducer;
