import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectIsAuthenticated } from "../auth/authSlice";
import HeaderItem from "./HeaderItem";

const Navbar = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  if (isAuthenticated)
    return (
      <div className=" bg-graywhite py-2 px-3 flex">
        <div className="px-1.5 pr-4">
          <p className="text-xl">KeeCash</p>
        </div>
        <div className="flex h-full">
          <HeaderItem name={"Manage customers"} to="manage-customers" />
          <HeaderItem name={"Manage countries"} to="manage-countries" />
          <HeaderItem name={"Admin panel settings"} to="admin-setting" />
        </div>
      </div>
    );
  return <></>;
};

export default Navbar;
