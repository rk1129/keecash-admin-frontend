import React, { useState } from "react";
import RadioButtons from "../common/RadioButtons";

const SetFees = () => {
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="w-full">
      <div className="pb-5">
        <RadioButtons names={["USD", "EUR"]} setValue={setCurrency} />
      </div>
      <div className="w-full border-bordercolor border-2 rounded">
        <div className="bg-graybackground px-4 py-2">
          <p className="text-base font-bold">Setting</p>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <p className="text-xl font-black">Country name</p>
          <p className="text-base font-black">country code</p>
          <p className="text-base text-specialgray">phone code</p>
          <p className="text-base">id</p>
          <button className="text-base font-normal px-3 py-2 bg-primary text-specialwhite rounded w-40">
            Save modifications
          </button>
        </div>
        <div className="w-full p-4">
          <div className="flex w-full py-4 border-b-2 border-bordercolor">
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">deposit_fixed_fee</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">deposit_percent_fee</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">deposit_min_amount</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">deposit_max_amount</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
          </div>
          <div className="flex w-full py-4 border-b-2 border-bordercolor">
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">withdraw_fixed_fee</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">withdraw_percent_fee</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">withdraw_min_amount</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">withdraw_max_amount</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
          </div>
          <div className="flex w-full py-4 border-b-2 border-bordercolor">
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">transfer_fixed_fee</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">transfer_percent_fee</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">transfer_min_amount</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">transfer_max_amount</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
          </div>
          <div className="flex w-full py-4">
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">card_top_up_fixed_fee</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">card_top_up_percent_fee</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">card_top_up_percent_fee</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">card_top_up_max_amount</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
          </div>
          <div className="flex w-full py-4">
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">card_withdrawal_fixed_fee</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">card_withdrawal_percent_fee</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">card_withdrawal_percent_fee</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">card_withdrawal_max_amount</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
          </div>
          <div className="flex w-full py-4">
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">card_price</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
          </div>
          <div className="flex w-full py-2">
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">Currency_1</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
            <div className="w-3/12 flex flex-col gap-2">
              <p className="text-base">Currency_2</p>
              <input
                className="w-52 outline-none text-base hover:border-2 hover:border-specialyblue border-2 border-specialgray rounded px-3 py-1.5"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetFees;
