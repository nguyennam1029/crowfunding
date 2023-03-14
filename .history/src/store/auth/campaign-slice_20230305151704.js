const { createSlice } = require("@reduxjs/toolkit");

const campaignSlice = createSlice({
  name: "campaign",
  initialState: {
    campaign: undefined,
  },
  reducers: {
    campaignAddNew: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { campaignAddNew } = campaignSlice.actions;
export default campaignSlice.reducer;
