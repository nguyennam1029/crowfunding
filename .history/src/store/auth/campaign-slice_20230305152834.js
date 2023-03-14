const { createSlice } = require("@reduxjs/toolkit");

const campaignSlice = createSlice({
  name: "campaigns",
  initialState: {
    campaigns: undefined,
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
