import React, { useState, useEffect } from "react";
import eyeSolid from "../../img/eye-solid.svg";
import eyeSlashSolid from "../../img/eye-slash-solid.svg";
import { login, loadUser } from "../../actions/auth";
import { useAppSelector } from "../../app/hooks";
import {
  selectIsOtpSent,
  selectIsAuthenticated,
  selectLoading,
} from "./authSlice";
import { Navigate } from "react-router-dom";
import Spinner from "../layout/Spinner";

const Login = () => {
  useEffect(() => {
    loadUser();
  }, []);
  const isOtpSent = useAppSelector(selectIsOtpSent);
  const isLoading = useAppSelector(selectLoading);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isOtpSent) return <Navigate to="/otp" replace={true} />;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
  };

  const passwordVisibleBtnClicked = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  if (isAuthenticated) return <Navigate to={"/dashboard"} replace={true} />;

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="w-full flex flex-row justify-center pt-[268px]">
      <form className="w-96" onSubmit={onSubmit}>
        <div className="flex justify-center">
          <h1 className="text-3xl font-black pb-[36px]">Admin login</h1>
        </div>
        <div className="mt-8">
          <div>
            <p className="text-base font-normal h-8">Email</p>
            <div className="border-2 border-specialgray border-solid rounded px-3 py-1.5">
              <input
                className="h-8 w-full border-none text-base outline-none"
                placeholder="Enter your email"
                type="email"
                name="email"
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div>
            <p className="text-base font-normal h-8">Password</p>
            <div className="border-2 border-specialgray border-solid rounded flex gap-2 px-3 py-1.5">
              <input
                className="h-8 w-full border-none text-base outline-none"
                placeholder="Password"
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                onChange={onChange}
              />
              <div
                onClick={passwordVisibleBtnClicked}
                className="flex flex-row items-center justify-center"
              >
                <img
                  className="h-4 w-4 opacity-60"
                  src={isPasswordVisible ? eyeSlashSolid : eyeSolid}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full h-9 mt-6 text-specialwhite bg-primary rounded"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
