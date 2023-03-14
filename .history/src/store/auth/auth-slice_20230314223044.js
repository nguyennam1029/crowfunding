const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: [],
    currentUser: undefined,
    accessToken: null,
    getUserSuccess: null,
    isLoggedIn: false,
    logging: false,
  },
  reducers: {
    authLogin: (state, action) => ({
      logging: true,
    }),
    authLoginSuccess: (state, action) => ({
      isLoggedIn: true,
      currentUser: action.payload,
      logging: false,
    }),

    authLoginFailed: (state, action) => ({
      isLoggedIn: false,
      logging: false,
    }),
    authLogOut: (state) => ({
      isLoggedIn: false,
      currentUser: undefined,
    }),
    authRegister: (state, action) => ({
      ...state,
      users: action.payload,
      currentUser: action.payload,
    }),
  },
});
export const {
  authLogin,
  authRegister,
  authLoginSuccess,
  authLoginFailed,
  authLogOut,
} = authSlice.actions;
export default authSlice.reducer;
