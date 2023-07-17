import React from "react";

const ListItem = () => {
  return (
    <tr className="w-full">
      <td className="w-3/12 border-2 border-specialgray text-base p-2 ">
        0xfegrgtjkrehgjgrglkengnge34
      </td>
      <td className="w-3/12 border-2 border-specialgray text-base p-2">
        My Binance BTC account
      </td>
      <td className="w-3/12 border-2 border-specialgray text-base p-2">
        efegegegg
      </td>
      <td className="w-3/12 border-2 border-specialgray text-base p-2">BTC</td>
    </tr>
  );
};

const WalletViewer = () => {
  return (
    <table className="pt-2 w-full">
      <thead className="w-full">
        <tr className="w-full">
          <th className="w-3/12 border-2 border-specialgray border-b-black text-base p-2 font-bold">
            Address
          </th>
          <th className="w-3/12 border-2 border-specialgray border-b-black text-base p-2 font-bold">
            Names
          </th>
          <th className="w-3/12 border-2 border-specialgray border-b-black text-base p-2 font-bold">
            UserId
          </th>
          <th className="w-3/12 border-2 border-specialgray border-b-black text-base p-2 font-bold">
            Crypto Currency
          </th>
        </tr>
      </thead>
      <tbody className="w-full">
        <ListItem />
      </tbody>
    </table>
  );
};

export default WalletViewer;
