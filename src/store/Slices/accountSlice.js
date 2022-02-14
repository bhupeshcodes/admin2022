import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "account",
  initialState: {
    token: '',
    isLoggedIN: false,
    isInitialized: true,
    user: null
  },
  reducers: {
    initialize: (state, action) => {
      const { isLoggedIn, user, token } = action.payload;
      state.isInitialized = true,
      state.user = user,
      state.token = token,
      state.isLoggedIn = isLoggedIn
    },
    login: (state, action) => {
      const {user } = action.payload;
      state.user = user,
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
