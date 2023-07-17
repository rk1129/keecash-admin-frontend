import React, { useState } from "react";
import RadioButtons from "../../common/RadioButtons";
import Datepicker from "react-tailwindcss-datepicker";
import TransactionView from "./TransactionView";
import { useAppSelector } from "../../../app/hooks";
import { selectUserInfo } from "../userinfo/userinfoSlice";
import { getTransferTx } from "../../../actions/manage-customer";
import { formatDateToString } from "../../../utils/common";

export interface TransferTxFilter {
  currency: string;
  fromDate: string;
  toDate: string;
  email: string;
  type: string;
  orderParam: string;
  currencyName: string;
  amount: number;
}

const Transfer = () => {
  const { email } = useAppSelector(selectUserInfo);
  const [dateRange, setdateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [amount, setAmount] = useState(0);

  const handleValueChange = (newValue: any) => {
    setdateRange(newValue);
  };

  const onAmountChange = (e: any) => {
    setAmount(e.target.value);
  };

  const [currency, setCurrency] = useState("USD");

  const onSubmit = (e: any) => {
    e.preventDefault();
    const filter: Partial<TransferTxFilter> = {
      email: email,
      type: "TRANSFER",
      orderParam: "id",
      currencyName: currency,
      amount: amount,
    };
    if (dateRange.startDate && dateRange.endDate) {
      console.log("typeof", formatDateToString(dateRange.startDate));
      filter.fromDate = formatDateToString(dateRange.startDate);
      filter.toDate = formatDateToString(dateRange.endDate);
    }
    getTransferTx(filter);
  };

  return (
    <form className="" onSubmit={onSubmit}>
      <div className="pb-5">
        <RadioButtons names={["USD", "EUR"]} setValue={setCurrency} />
      </div>
      <div className="flex justify-between h-16">
        <div className="w-[280px] hover:border-none border-2 border-specialgray rounded h-11">
          <Datepicker
            value={dateRange}
            onChange={handleValueChange}
            primaryColor={"blue"}
            maxDate={new Date()}
          />
        </div>
        <div className="flex gap-4">
          <div className="hover:border-2 hover:border-specialyblue border-2 border-specialgray w-[188px] rounded h-11">
            <input
              placeholder="Filter by amount"
              className="w-full text-sm px-3 h-9 text-left outline-none"
              onChange={onAmountChange}
            />
          </div>
          <button
            type="submit"
            className="w-[132px] h-11 flex-none text-base text-specialwhite bg-primary rounded"
          >
            Search
          </button>
        </div>
      </div>
      <TransactionView />
    </form>
  );
};

export default Transfer;
