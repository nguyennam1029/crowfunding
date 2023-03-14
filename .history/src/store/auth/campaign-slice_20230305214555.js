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
    getNews() {},
  },
});

export const { campaignAddNew } = campaignSlice.actions;
export default campaignSlice.reducer;
