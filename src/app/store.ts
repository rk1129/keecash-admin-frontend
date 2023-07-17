import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../components/auth/authSlice";
import setAuthToken from "../utils/setAuthToken";
import userInfoReducer from "../components/manage-customer/userinfo/userinfoSlice";
import depositReducer from "../components/manage-customer/deposit/depositSlice";
import withdrawReducer from "../components/manage-customer/withdraw/withdrawSlice";
import transferReducer from "../components/manage-customer/transfer/transferSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    userInfo: userInfoReducer,
    deposit: depositReducer,
    withdraw: withdrawReducer,
    transfer: transferReducer,
  },
});

let currentState = store.getState();

store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  const previousState = currentState;
  currentState = store.getState();
  // if the token changes set the value in localStorage and axios headers
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
