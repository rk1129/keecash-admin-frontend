import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export interface UserInfo {
  firstName: string;
  secondName: string;
  email: string;
  phoenumber: string;
  countryCode: string;
  userId: string;
  referralId: string;
  referralAppliedUserId: string;
  registeredAt: string;
  approvedAt: string;
  rejectedAt: string;
  address1: string;
  address2: string;
  zipcode: string;
  city: string;
  status: string;
  accountType: string;
  language: string;
}

export interface UserInfoState {
  isUserFound: boolean | null;
  userInfo: UserInfo;
}

const initialState: UserInfoState = {
  isUserFound: null,
  userInfo: {
    firstName: "",
    secondName: "",
    email: "",
    phoenumber: "",
    countryCode: "",
    userId: "",
    referralId: "",
    referralAppliedUserId: "",
    registeredAt: "",
    approvedAt: "",
    rejectedAt: "",
    address1: "",
    address2: "",
    zipcode: "",
    city: "",
    status: "",
    accountType: "",
    language: "",
  },
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    loadUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.isUserFound = true;
      Object.assign(state.userInfo, action.payload);
    },
    userNotFound: (state) => {
      state.isUserFound = false;
    },
  },
});

export const { loadUserInfo, userNotFound } = userInfoSlice.actions;

export const selectUserInfo = (state: RootState) => state.userInfo.userInfo;

export const selectIsUserFound = (state: RootState) =>
  state.userInfo.isUserFound;

export default userInfoSlice.reducer;
