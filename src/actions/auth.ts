import {
  loginSuccess,
  otpVerified,
  userLoaded,
  authError,
  setLoading,
} from "../components/auth/authSlice";
import { store } from "../app/store";
import api from "../utils/api";

const { dispatch } = store;

// Login User
export const login = async (email: string, password: string) => {
  const body = { email, password };
  try {
    dispatch(setLoading());
    await api.post("/auth/admin-login", body);
    dispatch(loginSuccess(email));
  } catch (err: unknown) {
    console.error(err);
    dispatch(authError());
    console.log("Login failed");
  }
};

// confirm otp
export const confirmOtp = async (email: string, code: string) => {
  const body = { email, code };
  try {
    dispatch(setLoading());
    const res = await api.post("/auth/confirm-otp", body);
    dispatch(otpVerified(res.data.accessToken));
  } catch (err: unknown) {
    console.error("errors", err);
    console.log("Otp verificication failed");
  }
};

// Get user info
export const loadUser = async () => {
  try {
    dispatch(setLoading());
    const res = await api.get("/auth/admin-profile");
    dispatch(userLoaded(res.data));
  } catch (err: unknown) {
    dispatch(authError());
    console.log("Can not get info");
  }
};
