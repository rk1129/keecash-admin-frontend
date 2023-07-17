import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { confirmOtp } from "../../actions/auth";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectEmail, selectIsAuthenticated } from "./authSlice";
import { logout } from "./authSlice";

const ConfirmOtp = () => {
  const email = useAppSelector(selectEmail);
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const [formData, setFormData] = useState({
    code: "",
  });

  const { code } = formData;

  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (email === null) {
    dispatch(logout());
    return <Navigate to={"/login"} replace={true} />;
  }

  if (isAuthenticated) return <Navigate to={"/dashboard"} replace={true} />;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) confirmOtp(email, code);
  };

  return (
    <div className="w-full flex flex-row justify-center pt-[268px]">
      <form className="w-96" onSubmit={onSubmit}>
        <div className="flex justify-center">
          <h1 className="text-3xl font-black pb-[36px]">
            Security OTP
            <br /> send to email
          </h1>
        </div>
        <div className="mt-8">
          <div>
            <p className="text-base font-normal h-8">Code</p>
            <div className="border-2 border-specialgray border-solid rounded px-3 py-1.5">
              <input
                className="h-8 w-full border-none text-base outline-none"
                placeholder="123456"
                type="text"
                name="code"
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full h-9 mt-6 text-specialwhite bg-primary rounded"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default ConfirmOtp;
