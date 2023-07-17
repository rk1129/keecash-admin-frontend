import React from "react";
import UsersViewer from "./UsersViewer";
import WalletViewer from "./WalletViewer";

const Beneficiaries = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="w-full border-bordercolor border-2 rounded">
        <div className="bg-graybackground px-4 py-2">
          <p className="text-base font-bold">User beneficiaries</p>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <div className="flex gap-6 w-6/12">
            <div className="flex-auto h-10">
              <div className="hover:border-2 hover:border-specialyblue border-2 border-specialgray w-full rounded">
                <input
                  placeholder="Type to search"
                  className="text-sm px-3 h-9 text-left outline-none w-full"
                  name="userId"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-40 h-10 flex-none text-base text-specialwhite bg-primary rounded"
            >
              Apply
            </button>
          </div>
          <UsersViewer />
        </div>
      </div>
      <div className="w-full border-bordercolor border-2 rounded">
        <div className="bg-graybackground px-4 py-2">
          <p className="text-base font-bold">Wallet beneficiaries</p>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <div className="flex gap-6 w-6/12">
            <div className="flex-auto h-10">
              <div className="hover:border-2 hover:border-specialyblue border-2 border-specialgray w-full rounded">
                <input
                  placeholder="Type to search"
                  className="text-sm px-3 h-9 text-left outline-none w-full"
                  name="userId"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-40 h-10 flex-none text-base text-specialwhite bg-primary rounded"
            >
              Apply
            </button>
          </div>
          <WalletViewer />
        </div>
      </div>
    </div>
  );
};

export default Beneficiaries;
