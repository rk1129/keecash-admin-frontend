import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export enum AdminType {
  SUPER_ADMIN = "SUPER_ADMIN",
  COUNTRY_MANAGER = "COUNTRY_MANAGER",
  CUSTOMER_SUPPORT = "CUSTOMER_SUPPORT",
}

export interface Admin {
  email: string;
  type: AdminType;
}

export interface AuthState {
  token: string | null;
  email: string | null;
  isOtpSent: boolean;
  isAuthenticated: boolean;
  loading: boolean;
  type: null | AdminType;
}

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  email: null,
  isOtpSent: false,
  isAuthenticated: false,
  loading: true,
  type: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      state.isOtpSent = true;
      state.isAuthenticated = false;
      state.loading = false;
    },
    otpVerified: (state, action: PayloadAction<string>) => {
      state.isOtpSent = false;
      state.isAuthenticated = true;
      state.token = action.payload;
      state.loading = false;
    },
    userLoaded: (state, action: PayloadAction<Admin>) => {
      state.isAuthenticated = true;
      state.type = action.payload.type;
      state.email = action.payload.email;
      state.loading = false;
    },
    authError: (state) => {
      state.email = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.type = null;
    },
    accountDeleted: (state) => {
      state.email = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.type = null;
    },
    logout: (state) => {
      state.isOtpSent = false;
      state.email = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.type = null;
    },
  },
});

export const {
  loginSuccess,
  otpVerified,
  userLoaded,
  authError,
  accountDeleted,
  logout,
  setLoading,
} = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectLoading = (state: RootState) => state.auth.loading;

export const selectIsOtpSent = (state: RootState) => state.auth.isOtpSent;

export const selectEmail = (state: RootState) => state.auth.email;

export default authSlice.reducer;
