import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import "./App.css";
import ConfirmOtp from "./components/auth/ConfirmOtp";
import setAuthToken from "./utils/setAuthToken";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { loadUser } from "./actions/auth";
import { logout } from "./components/auth/authSlice";
import Landing from "./components/landing/Landing";
import PrivateRoute from "./components/routing/PrivateRoute";
import Navbar from "./components/layout/Navbar";
import ManageCustomer from "./components/manage-customer/ManageCustomer";
import ManageCountry from "./components/manage-country/ManageCountry"
import AdminSetting  from "./components/admin-setting/AdminSetting"

function App() {
  useEffect(() => {
    localStorage.theme = "light";

    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
      loadUser();
    }
    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch(logout());
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<ConfirmOtp />} />
          <Route
            path="/manage-customers"
            element={<PrivateRoute Component={ManageCustomer} />}
          />
          <Route path="/manage-countries" element={<PrivateRoute Component={ManageCountry}/>} />
          <Route path="/admin-setting" element={<PrivateRoute Component={AdminSetting}/>} />
          <Route path="/*" element={<Landing />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
