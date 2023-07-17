import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { DepositTx, selectDepositTx } from "./depositSlice";
import eyeSvg from "../../../img/eye.svg";

const ListItem = ({ transaction }: { transaction: DepositTx }) => {
  return (
    <tr className="w-full">
      <td className="w-4/12 border-2 border-specialgray text-base p-2 ">
        {transaction.paymentReference}
      </td>
      <td className="w-4/12 border-2 border-specialgray text-base p-2">
        {transaction.createdAt + ""}
      </td>
      <td className="border-2 border-specialgray text-base p-2">
        {transaction.amount}
        {(() => {
          switch (transaction.currencyName) {
            case "USD":
              return "$";
            case "EUR":
              return "€";
          }
        })()}
      </td>
      <td className="w-10">
        <button type="button" className="pl-2 flex items-center">
          <img src={eyeSvg} alt="" />
        </button>
      </td>
    </tr>
  );
};

const TransactionView = () => {
  const depositTx = useAppSelector(selectDepositTx);

  return (
    <table className="pt-2 w-full">
      <thead className="w-full">
        <tr className="w-full">
          <th className="w-4/12 border-2 border-specialgray border-b-black text-base p-2 font-bold">
            TransID
          </th>
          <th className="w-4/12 border-2 border-specialgray border-b-black text-base p-2 font-bold">
            Date
          </th>
          <th className="border-2 border-specialgray border-b-black text-base p-2 font-bold">
            Amout
          </th>
          <th className="w-10"></th>
        </tr>
      </thead>
      <tbody className="w-full">
        {depositTx?.map((item, index) => (
          <ListItem transaction={item} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionView;
