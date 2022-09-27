import { createSlice } from "@reduxjs/toolkit";

const initialAuthenticationState = { isAuthenticated: false };

const AuthenticationSlice = createSlice({
  name: "Authentication",
  initialState: initialAuthenticationState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const AuthenticationAction = AuthenticationSlice.actions;

export default AuthenticationSlice;
