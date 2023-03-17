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
    authSignUp: (state, action) => ({
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
    setUser: (state, action) => ({
      ...state,
      users: action.payload,
    }),
    setCurrentUser: (state, action) => ({
      currentUser: action.payload,
    }),
    getUser() {},

    authLogOut: (state) => ({
      isLoggedIn: false,
      currentUser: undefined,
    }),
    authRegister: (state, action) => ({
      ...state,

      users: action.payload,
    }),
  },
});
export const {
  authLogin,
  authSignUp,
  authRegister,
  authLoginSuccess,
  authLoginFailed,
  authLogOut,
  getUser,
  setUser,
  setCurrentUser,
} = authSlice.actions;
export default authSlice.reducer;
