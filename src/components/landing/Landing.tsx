import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectIsAuthenticated, selectIsOtpSent } from "../auth/authSlice";
import { Navigate } from "react-router-dom";

const Landing = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const isOtpSent = useAppSelector(selectIsOtpSent);

  if (isAuthenticated)
    return <Navigate to={"/manage-customers"} replace={true} />;
  else if (isOtpSent) return <Navigate to={"/login"} replace={true} />;
  else return <Navigate to={"/otp"} replace={true} />;
};

export default Landing;
