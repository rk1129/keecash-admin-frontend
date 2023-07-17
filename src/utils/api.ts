import axios from "axios";
import { store } from "../app/store";
import { authError } from "../components/auth/authSlice";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const { dispatch } = store;

    if (err.response.status === 401) {
      dispatch(authError());
    }
    return Promise.reject(err);
  }
);

export default api;
