import React, { useState } from "react";
import MultiSelector from "../common/MultiSelector";
import AdminViewer from "./AdminViewer";

const AdminSetting = () => {
  const [country, setCountry] = useState("");
  return (
    <div className="w-full">
      <div className="flex items-center py-12 font-black">
        <h1 className="text-3xl">Admin panel settings</h1>
      </div>
      <div className="flex flex-col gap-16">
        <div className="w-full border-bordercolor border-2 rounded">
          <div className="bg-graybackground px-4 py-2">
            <p className="text-base font-bold">Add admin</p>
          </div>
          <div className="px-16 py-12 flex flex-col gap-10 w-full">
            <div className="w-full flex justify-between">
              <div className="border-2 border-specialgray border-solid rounded px-3 py-1.5">
                <input
                  className="w-full border-none text-base outline-none"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                />
              </div>
              <div className="flex items-center gap-12">
                <span className="text-base inline-block">Select a country</span>
                <div className="w-40">
                  <MultiSelector
                    names={["All", "FR"]}
                    value="ALL"
                    setSelectorValue={setCountry}
                  />
                </div>
              </div>
              <div className="flex items-center gap-12">
                <span className="text-base inline-block">
                  Select type of admin
                </span>
                <div className="w-52">
                  <MultiSelector
                    names={[
                      "Super Admin",
                      "Customer Support",
                      "Country manager",
                    ]}
                    value="Country Manager"
                    setSelectorValue={setCountry}
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full gap-12">
              <div className="border-2 border-specialgray border-solid rounded px-3 py-1.5">
                <input
                  className="w-full border-none text-base outline-none"
                  placeholder="Set a complex password"
                  type="password"
                  name="password"
                />
              </div>
              <div className="border-2 border-specialgray border-solid rounded px-3 py-1.5">
                <input
                  className="w-full border-none text-base outline-none"
                  placeholder="confirm password"
                  type="password"
                  name="password"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <button
                type="submit"
                className="w-80 h-9 text-specialwhite bg-primary rounded"
              >
                Add admin
              </button>
              <p className="text-xs font-black">
                The password need to be largely secure and ens
              </p>
            </div>
          </div>
        </div>
        <div className="w-full border-bordercolor border-2 rounded">
          <div className="bg-graybackground px-4 py-2">
            <p className="text-base font-bold">
              List of admin user (only super admin can see this fiield)
            </p>
          </div>
          <div className="px-16 py-12 flex flex-col gap-10 w-full">
            <AdminViewer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSetting;
